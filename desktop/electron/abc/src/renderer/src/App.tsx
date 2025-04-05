import store, { persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'

function App(): React.ReactElement {
  return (
    // App 组件其实是一堆组件的嵌套, React 使用组件组成用户界面
    // TODO
    //  Provider 组件：将 Redux 的 Store（状态容器） 传递给整个 React 应用，使得所有子组件都能访问到 Redux 管理的全局状态
    //    PersistGate 组件：
    //      HashRouter 组件：通过 URL 的哈希部分(#之后的内容)来管理路由，方便在不依赖服务器配置的情况下，实现单页应用（SPA）的路由功能
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}

// function App(): React.ReactElement {
//   return (
//     <Provider store={store}>
//       <StyleSheetManager>
//         <ThemeProvider>
//           <AntdProvider>
//             <SyntaxHighlighterProvider>
//               <PersistGate loading={null} persistor={persistor}>
//                 <TopViewContainer>
//                   <HashRouter>
//                     <NavigationHandler />
//                     <Sidebar />
//                     <Routes>
//                       <Route path="/" element={<HomePage />} />
//                       <Route path="/agents" element={<AgentsPage />} />
//                       <Route path="/paintings" element={<PaintingsPage />} />
//                       <Route path="/translate" element={<TranslatePage />} />
//                       <Route path="/files" element={<FilesPage />} />
//                       <Route path="/knowledge" element={<KnowledgePage />} />
//                       <Route path="/apps" element={<AppsPage />} />
//                       <Route path="/settings/*" element={<SettingsPage />} />
//                     </Routes>
//                   </HashRouter>
//                 </TopViewContainer>
//               </PersistGate>
//             </SyntaxHighlighterProvider>
//           </AntdProvider>
//         </ThemeProvider>
//       </StyleSheetManager>
//     </Provider>
//   )
// }

// App函数组件作为默认导出
// 默认导出是模块的主要功能，导入时可以任意命名
export default App
