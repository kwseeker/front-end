import { ipcMain } from 'electron'
import { BrowserWindow } from 'electron'
import { configManager } from './config/ConfigManager'

// 向主窗口和app注册ipc事件
export function registerIpc(mainWindow: BrowserWindow, app: Electron.App) {
  // 进程间通信测试
  ipcMain.on('ping', () => console.log('pong'))

  // 启动时最小化到托盘
  // 监听channel app:set-launch-to-tray 中的事件
  // 这个事件哪里来的？何时触发？TOOD
  ipcMain.handle('app:set-launch-to-tray', (_, isActive: boolean) => {
    configManager.setLaunchToTray(isActive)
  })

  // 是否启用托盘？ TODO
  ipcMain.handle('app:set-tray', (_, isActive: boolean) => {
    configManager.setTray(isActive)
  })

  // 关闭窗口时是否最小化到托盘
  ipcMain.handle('app:set-tray-on-close', (_, isActive: boolean) => {
    configManager.setTrayOnClose(isActive)
  })

  ipcMain.handle('app:restart-tray', () => TrayService.getInstance().restartTray())
}
