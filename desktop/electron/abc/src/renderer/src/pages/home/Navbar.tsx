import { FC } from 'react'

import { Assistant, Topic } from '@renderer/types'
import { Navbar } from '@renderer/components/Navbar'
import { useAssistant } from '@renderer/hooks/useAssistant'

interface Props {
  activeAssistant: Assistant
  activeTopic: Topic
  setActiveTopic: (topic: Topic) => void
}

// activeAssistant 是启用的助手
const HeaderNavbar: FC<Props> = ({ activeAssistant }) => {
  // 当前启用的助手
  const { assistant } = useAssistant(activeAssistant.id)

  return (
    // className 传递给了 Navbar 的 props 属性
    <Navbar className="home-navbar">
      {/* 左部导航栏 */}
      {showAssistants && (
        <NavbarLeft style={{ justifyContent: 'space-between', borderRight: 'none', padding: 0 }}>
          <Tooltip title={t('navbar.hide_sidebar')} mouseEnterDelay={0.8}>
            <NavbarIcon onClick={toggleShowAssistants} style={{ marginLeft: isMac ? 16 : 0 }}>
              <i className="iconfont icon-hide-sidebar" />
            </NavbarIcon>
          </Tooltip>
          <Tooltip title={t('settings.shortcuts.new_topic')} mouseEnterDelay={0.8}>
            <NavbarIcon onClick={() => EventEmitter.emit(EVENT_NAMES.ADD_NEW_TOPIC)}>
              <FormOutlined />
            </NavbarIcon>
          </Tooltip>
        </NavbarLeft>
      )}
      {/* 右部导航栏 */}
      <NavbarRight style={{ justifyContent: 'space-between', flex: 1 }} className="home-navbar-right">
        <HStack alignItems="center">
          {!showAssistants && (
            <Tooltip title={t('navbar.show_sidebar')} mouseEnterDelay={0.8}>
              <NavbarIcon
                onClick={() => toggleShowAssistants()}
                style={{ marginRight: 8, marginLeft: isMac ? 4 : -12 }}>
                <i className="iconfont icon-show-sidebar" />
              </NavbarIcon>
            </Tooltip>
          )}
          <SelectModelButton assistant={assistant} />
        </HStack>
        <HStack alignItems="center" gap={8}>
          <UpdateAppButton />
          <Tooltip title={t('chat.assistant.search.placeholder')} mouseEnterDelay={0.8}>
            <NarrowIcon onClick={() => SearchPopup.show()}>
              <SearchOutlined />
            </NarrowIcon>
          </Tooltip>
          <Tooltip title={t('navbar.expand')} mouseEnterDelay={0.8}>
            <NarrowIcon onClick={handleNarrowModeToggle}>
              <i className="iconfont icon-icon-adaptive-width"></i>
            </NarrowIcon>
          </Tooltip>
          {sidebarIcons.visible.includes('minapp') && (
            <MinAppsPopover>
              <Tooltip title={t('minapp.title')} mouseEnterDelay={0.8}>
                <NarrowIcon>
                  <i className="iconfont icon-appstore" />
                </NarrowIcon>
              </Tooltip>
            </MinAppsPopover>
          )}
          {topicPosition === 'right' && (
            <NarrowIcon onClick={toggleShowTopics}>
              <i className={`iconfont icon-${showTopics ? 'show' : 'hide'}-sidebar`} />
            </NarrowIcon>
          )}
        </HStack>
      </NavbarRight>
    </Navbar>
  )
}

export default HeaderNavbar
