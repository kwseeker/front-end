import { BrowserWindow, MenuItem } from 'electron'
import windowStateKeeper from 'electron-window-state'
import { isDev, isLinux, isMac, isWin } from '../constant'
import icon from '../../../build/icon.png?asset'
import { join } from 'path'
import { app, Menu } from 'electron/main'
import { configManager } from '../config/ConfigManager'
import { locales } from '../utils/locales'
import { is } from '@electron-toolkit/utils'

export class WindowService {
  // 单例模式
  private static instance: WindowService | null = null

  // 主窗口
  private mainWindow: BrowserWindow | null = null
  // private selectionMenuWindow: BrowserWindow | null = null
  // 右键菜单
  private contextMenu: Menu | null = null
  // 是否全屏
  private wasFullScreen: boolean = false

  private constructor() {}

  public static getInstance(): WindowService {
    if (!WindowService.instance) {
      WindowService.instance = new WindowService()
    }
    return WindowService.instance
  }

  public createMainWindow(): BrowserWindow {
    if (this.mainWindow && !this.mainWindow.isDestroyed()) {
      this.mainWindow.show()
      return this.mainWindow
    }

    // windowStateKeeper 用于保存和恢复窗口大小和位置
    const mainWindowState = windowStateKeeper({
      defaultWidth: 1080,
      defaultHeight: 670
    })

    this.mainWindow = new BrowserWindow({
      width: mainWindowState.width,
      height: mainWindowState.height,
      x: mainWindowState.x,
      y: mainWindowState.y,
      minWidth: 1080,
      minHeight: 600,
      show: false,
      autoHideMenuBar: true,
      transparent: isMac,
      vibrancy: 'sidebar',
      visualEffectState: 'active',
      titleBarStyle: isLinux ? 'default' : 'hidden',
      // titleBarOverlay: theme === 'dark' ? titleBarOverlayDark : titleBarOverlayLight,
      // backgroundColor: isMac ? undefined : theme === 'dark' ? '#181818' : '#FFFFFF',
      trafficLightPosition: { x: 8, y: 12 },
      // ... 将对象的属性展开赋值给当前对象
      ...(isLinux ? { icon } : {}),
      // 设置渲染进程的行为和权限， TODO
      webPreferences: {
        // 指定预加载脚本的路径，预加载脚本注册一批 API 给 window.api， TODO
        preload: join(__dirname, '../preload/index.js'),
        // 禁用沙箱
        sandbox: false,
        // 禁用网页安全策略，比如允许跨域请求、允许加载本地资源
        webSecurity: false,
        // 允许 webview 标签，允许在应用中嵌入网页
        webviewTag: true,
        // 允许运行不安全的资源，包括 HTTP 资源、混合内容等
        allowRunningInsecureContent: true
      }
    })

    this.setupMainWindow(this.mainWindow, mainWindowState)

    return this.mainWindow
  }

  private setupMainWindow(mainWindow: BrowserWindow, mainWindowState: any): void {
    mainWindowState.manage(mainWindow)

    this.setupContextMenu(mainWindow)
    this.setupWindowEvents(mainWindow)
    // this.setupWebContentsHandlers(mainWindow)
    this.setupWindowLifecycleEvents(mainWindow)
    this.loadMainWindowContent(mainWindow)
  }

  // 配置窗口右键菜单内容
  private setupContextMenu(mainWindow: BrowserWindow) {
    if (!this.contextMenu) {
      const locale = locales[configManager.getLanguage()]
      const { common } = locale.translation

      this.contextMenu = new Menu()
      // 复制
      this.contextMenu.append(new MenuItem({ label: common.copy, role: 'copy' }))
      // 粘贴
      this.contextMenu.append(new MenuItem({ label: common.paste, role: 'paste' }))
      // 剪切
      this.contextMenu.append(new MenuItem({ label: common.cut, role: 'cut' }))
    }

    // 监听右键菜单事件
    mainWindow.webContents.on('context-menu', () => {
      // 弹出右键菜单
      this.contextMenu?.popup()
    })

    // Dangerous API
    if (isDev) {
      mainWindow.webContents.on('will-attach-webview', (_, webPreferences) => {
        console.log('on will-attach-webview: dirname=', __dirname)
        webPreferences.preload = join(__dirname, '../preload/index.js')
      })
    }

    // Handle webview context menu
    mainWindow.webContents.on('did-attach-webview', (_, webContents) => {
      webContents.on('context-menu', () => {
        this.contextMenu?.popup()
      })
    })
  }

  // 配置窗口事件
  // ready-to-show： 仅执行一次，设置窗口缩放因子
  private setupWindowEvents(mainWindow: BrowserWindow) {
    mainWindow.once('ready-to-show', () => {
      mainWindow.webContents.setZoomFactor(configManager.getZoomFactor())

      // show window only when laucn to tray not set
      const isLaunchToTray = configManager.getLaunchToTray()
      if (!isLaunchToTray) {
        mainWindow.show()
      }
    })

    // 进入全屏事件
    mainWindow.on('enter-full-screen', () => {
      this.wasFullScreen = true
      // 发送全屏状态改变事件, TODO 发到哪里？ TODO
      mainWindow.webContents.send('fullscreen-status-changed', true)
    })

    // 离开全屏事件 
    mainWindow.on('leave-full-screen', () => {
      this.wasFullScreen = false
      mainWindow.webContents.send('fullscreen-status-changed', false)
    })

    // 添加Escape键退出全屏的支持
    mainWindow.webContents.on('before-input-event', (event, input) => {
      // 当按下Escape键且窗口处于全屏状态时退出全屏
      if (input.key === 'Escape' && !input.alt && !input.control && !input.meta && !input.shift) {
        if (mainWindow.isFullScreen()) {
          event.preventDefault()
          mainWindow.setFullScreen(false)
        }
      }
    })
  }

  // private setupWebContentsHandlers(mainWindow: BrowserWindow) {
  //   mainWindow.webContents.on('will-navigate', (event, url) => {
  //     if (url.includes('localhost:5173')) {
  //       return
  //     }

  //     event.preventDefault()
  //     shell.openExternal(url)
  //   })

  //   mainWindow.webContents.setWindowOpenHandler((details) => {
  //     const { url } = details

  //     const oauthProviderUrls = [
  //       'https://account.siliconflow.cn/oauth',
  //       'https://cloud.siliconflow.cn/expensebill',
  //       'https://aihubmix.com/token',
  //       'https://aihubmix.com/topup'
  //     ]

  //     if (oauthProviderUrls.some((link) => url.startsWith(link))) {
  //       return {
  //         action: 'allow',
  //         overrideBrowserWindowOptions: {
  //           webPreferences: {
  //             partition: 'persist:webview'
  //           }
  //         }
  //       }
  //     }

  //     if (url.includes('http://file/')) {
  //       const fileName = url.replace('http://file/', '')
  //       const storageDir = getFilesDir()
  //       const filePath = storageDir + '/' + fileName
  //       shell.openPath(filePath).catch((err) => Logger.error('Failed to open file:', err))
  //     } else {
  //       shell.openExternal(details.url)
  //     }

  //     return { action: 'deny' }
  //   })

  //   this.setupWebRequestHeaders(mainWindow)
  // }

  // private setupWebRequestHeaders(mainWindow: BrowserWindow) {
  //   mainWindow.webContents.session.webRequest.onHeadersReceived(
  //     { urls: ['*://*/*'] },
  //     (details, callback) => {
  //       if (details.responseHeaders?.['X-Frame-Options']) {
  //         delete details.responseHeaders['X-Frame-Options']
  //       }
  //       if (details.responseHeaders?.['x-frame-options']) {
  //         delete details.responseHeaders['x-frame-options']
  //       }
  //       if (details.responseHeaders?.['Content-Security-Policy']) {
  //         delete details.responseHeaders['Content-Security-Policy']
  //       }
  //       if (details.responseHeaders?.['content-security-policy']) {
  //         delete details.responseHeaders['content-security-policy']
  //       }
  //       callback({ cancel: false, responseHeaders: details.responseHeaders })
  //     }
  //   )
  // }

  // 配置窗口事件处理
  private setupWindowLifecycleEvents(mainWindow: BrowserWindow) {
    // 应用
    mainWindow.on('close', (event) => {
      // 如果已经触发退出，直接退出
      if (app.isQuitting) {
        return app.quit()
      }

      // 托盘及关闭行为设置
      const isShowTray = configManager.getTray()
      const isTrayOnClose = configManager.getTrayOnClose()

      // 没有开启托盘，或者开启了托盘，但设置了直接关闭，应执行直接退出
      if (!isShowTray || (isShowTray && !isTrayOnClose)) {
        // 如果是Windows或Linux，直接退出
        // mac按照系统默认行为，不退出
        if (isWin || isLinux) {
          return app.quit()
        }
      }

      //上述逻辑以下，是“开启托盘+设置关闭时最小化到托盘”的情况
      // 如果是Windows或Linux，且处于全屏状态，则退出应用
      if (this.wasFullScreen) {
        if (isWin || isLinux) {
          return app.quit()
        } else {
          // ？
          event.preventDefault()
          mainWindow.setFullScreen(false)
          return
        }
      }

      event.preventDefault()
      mainWindow.hide()

      if (isMac && isTrayOnClose) {
        app.dock?.hide() //for mac to hide to tray
      }
    })

    mainWindow.on('closed', () => {
      this.mainWindow = null
    })

    // mainWindow.on('show', () => {
    //   if (this.miniWindow && !this.miniWindow.isDestroyed()) {
    //     this.miniWindow.hide()
    //   }
    // })
  }

  private loadMainWindowContent(mainWindow: BrowserWindow) {
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      // 加载本地html文件
      mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }
  }

  public getMainWindow(): BrowserWindow | null {
    return this.mainWindow
  }

  public showMainWindow(): void {
    // 主窗口不为null且未被销毁
    if (this.mainWindow && !this.mainWindow.isDestroyed()) {
      // 如果主窗口被最小化，则恢复
      if (this.mainWindow.isMinimized()) {
        this.mainWindow.restore()
      }
      this.mainWindow.show()
      // 聚焦到主窗口
      this.mainWindow.focus()
    } else {
      this.mainWindow = this.createMainWindow()
      this.mainWindow.focus()
    }

    // mac dock 处理
  }

  public hideMainWindow(): void {
    this.mainWindow?.hide()
  }

  // 最小化窗口
  // public toggleMiniWindow() {
  //   if (this.miniWindow) {
  //     this.miniWindow.isVisible() ? this.miniWindow.hide() : this.miniWindow.show()
  //   } else {
  //     this.showMiniWindow()
  //   }
  // }
}

export const windowService = WindowService.getInstance()
