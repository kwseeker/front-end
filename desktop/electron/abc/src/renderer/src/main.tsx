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
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
}
