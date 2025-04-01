import { app, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { windowService } from './services/WindowService'
// import { TrayService } from './services/TrayService'
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer'
import { registerShortcuts } from './services/ShortcutService'
import { TrayService } from './services/TrayService'

// 用于确保程序只运行一个实例
// if (!app.requestSingleInstanceLock()) {
//   app.quit()
//   process.exit(0)
// }

// app 初始化完成后调用
app.whenReady().then(async () => {
  // 获取用户数据目录，比如 /home/arvin/.config/abc
  console.log('app userData', app.getPath('userData'))
  // 在 Windows 系统中，AppUserModelID 是系统识别应用程序的唯一标识符，且用于关联一些系统功能，推荐使用反向域名格式
  electronApp.setAppUserModelId('top.kwseeker.abc')

  // 创建主窗口
  const mainWindow = windowService.createMainWindow()
  // 托盘服务
  new TrayService()

  // 当应用程序激活且窗口数为0时创建窗口
  app.on('activate', function () {
    const mainWindow = windowService.getMainWindow()
    if (!mainWindow || mainWindow.isDestroyed()) {
      windowService.createMainWindow()
    } else {
      windowService.showMainWindow()
    }
  })

  registerShortcuts(mainWindow)
  // registerIpc(mainWindow, app)
  // replaceDevtoolsFont(mainWindow)

  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  // app.on('browser-window-created', (event, window) => {
  //   console.log('browser-window-created', event, window)
  //   // 注册一个快捷键监听，监听 window 窗口上的 F12 快捷键, 具体看 preload 中 optimizer 的实现
  //   optimizer.watchWindowShortcuts(window)
  // })

  if (process.env.NODE_ENV === 'development') {
    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err))
  }

  // 进程间通信测试
  ipcMain.on('ping', () => console.log('pong'))
  ipcMain.handle('system:getDeviceType', () => {
    return process.platform === 'darwin'
      ? 'mac'
      : process.platform === 'win32'
        ? 'windows'
        : 'linux'
  })
})

// 窗口建立后监听快捷方式
app.on('browser-window-created', (_, window) => {
  optimizer.watchWindowShortcuts(window)
})

app.on('before-quit', () => {
  app.isQuitting = true
})
