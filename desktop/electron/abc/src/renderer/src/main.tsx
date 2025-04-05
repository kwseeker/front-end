import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

if (location.hash === '#/mini') {
  // 显示迷你窗口，暂忽略
  // const root = createRoot(document.getElementById('root') as HTMLElement)
  // root.render(<MiniApp />)
} else {
  // 删除初始化动画，初始动画在窗口准备就绪后再删除
  // document.getElementById('spinner')?.remove()
  // 使用 React 重新渲染 id="root" 的元素
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // StrictMode是一个突出显示React应用程序中潜在问题的工具。
    // 只在开发模式下运行，不会影响生产构建
    // https://zh-hans.react.dev/reference/react/StrictMode
    // <App /> 引入 React 函数组件
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
