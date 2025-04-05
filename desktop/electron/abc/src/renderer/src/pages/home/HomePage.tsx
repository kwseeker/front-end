import { FC } from 'react'
import styled from 'styled-components'
// 这里实际导入的是 HeaderNavbar 组件
import Navbar from './Navbar'
// import { Assistant } from '../../types/index';

// FC 是 FunctionComponent 的别名，是函数接口，包含调用签名和静态属性（类型检查、为属性提供默认值）
const HomePage: FC = () => {
  // TODO
  const [activeAssistant, setActiveAssistant] = useState(state?.assistant || _activeAssistant || assistants[0])
  const { activeTopic, setActiveTopic } = useActiveTopic(activeAssistant, state?.topic)

  return (
    // 带着样式的 div
    <Container id="home-page">
      {/* 导航栏 
          下面写法相当于：({
            activeAssistant: activeAssistant,
            activeTopic: activeTopic,
            setActiveTopic: setActiveTopic
          }) => {...}
          createElement(Navbar, );
      */}
      <Navbar
        activeAssistant={activeAssistant}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
      />
      {/* 内容容器 */}
      <ContentContainer id="content-container">
        {/* 助手栏 */}
        {showAssistants && (
          <HomeTabs
            activeAssistant={activeAssistant}
            activeTopic={activeTopic}
            setActiveAssistant={setActiveAssistant}
            setActiveTopic={setActiveTopic}
            position="left"
          />
        )}
        {/* 聊天窗口 */}
        <Chat
          assistant={activeAssistant}
          activeTopic={activeTopic}
          setActiveTopic={setActiveTopic}
          setActiveAssistant={setActiveAssistant}
        />
      </ContentContainer>
    </Container>
  )
}

// 使用 styled-components 创建的样式化的组件
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: calc(100vw - var(--sidebar-width));
`

export default HomePage
