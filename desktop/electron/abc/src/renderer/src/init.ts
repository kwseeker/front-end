// import KeyvStorage from '@kangfenmao/keyv-storage'
// import { startAutoSync } from '@renderer/services/BackupService'
// import store from '@renderer/store'

// 初始化加载动画
// 在应用启动较慢时，展示加载动画，有更好的交互体验
function initSpinner() {
  const spinner = document.getElementById('spinner')
  // 如果是请求的不是 #/mini 片段标识符（也称锚点、哈希（hash）），则展示图片
  // # 是 前端导航工具，用于页面内跳转或 SPA 路由
  if (spinner && window.location.hash !== '#/mini') {
    spinner.style.display = 'flex'
  }
}

// function initKeyv() {
//   window.keyv = new KeyvStorage()
//   window.keyv.init()
// }

// function initAutoSync() {
//   setTimeout(() => {
//     const { webdavAutoSync } = store.getState().settings
//     if (webdavAutoSync) {
//       startAutoSync()
//     }
//   }, 2000)
// }

initSpinner()
// initKeyv()
// initAutoSync()
