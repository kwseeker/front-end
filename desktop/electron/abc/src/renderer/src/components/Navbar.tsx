import useNavBackgroundColor from '@renderer/hooks/useNavBackgroundColor'

import type { FC, PropsWithChildren } from 'react'
import type { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { platform } from '@electron-toolkit/utils'

// PropsWithChildren 是合并了 P 和 嵌套子元素（children）属性的类型
// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
// HTMLAttributes<HTMLDivElement> 继承 <div> 的所有 HTML 属性， 比如 className
// 最终 Props 合并了 P 和 children 和 <div> 的所有 HTML 属性
type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>

export const Navbar: FC<Props> = ({ children, ...props }) => {
  // 从 state 中取 NavBar 背景颜色
  const backgroundColor = useNavBackgroundColor()

  return (
    // <Navbar className="home-navbar"> 传递到这里相当于
    // <NavbarContainer className="home-navbar" style={{ backgroundColor }}>
    <NavbarContainer {...props} style={{ backgroundColor }}>
      {children}
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  min-height: var(--navbar-height);
  max-height: var(--navbar-height);
  margin-left: ${platform.isMacOS ? 'calc(var(--sidebar-width) * -1)' : 0};
  padding-left: ${platform.isMacOS ? 'var(--sidebar-width)' : 0};
  -webkit-app-region: drag;
`
export const NavbarLeft: FC<Props> = ({ children, ...props }) => {
  return <NavbarLeftContainer {...props}>{children}</NavbarLeftContainer>
}

const NavbarLeftContainer = styled.div`
  min-width: var(--assistants-width);
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  color: var(--color-text-1);
`

export const NavbarCenter: FC<Props> = ({ children, ...props }) => {
  return <NavbarCenterContainer {...props}>{children}</NavbarCenterContainer>
}

const NavbarCenterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 ${platform.isMacOS ? '20px' : 0};
  font-weight: bold;
  color: var(--color-text-1);
`

export const NavbarRight: FC<Props> = ({ children, ...props }) => {
  return <NavbarRightContainer {...props}>{children}</NavbarRightContainer>
}

const NavbarRightContainer = styled.div`
  min-width: var(--topic-list-width);
  display: flex;
  align-items: center;
  padding: 0 12px;
  padding-right: ${platform.isWindows ? '140px' : 12};
  justify-content: flex-end;
`
