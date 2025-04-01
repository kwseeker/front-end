import { Menu, MenuItemConstructorOptions, Tray, nativeImage} from 'electron'
import { configManager } from '../config/ConfigManager'
// ?asset - 这是 Vite 的特殊查询参数，用于处理静态资源
import icon from '../../../build/tray_icon.png?asset'
import { windowService } from './WindowService'
import { locales } from '../utils/locales'
import { app } from 'electron/main'

export class TrayService {
  // 单例模式
  private static instance: TrayService
  // Tray本质是托盘中的图标
  private tray: Tray | null = null

  constructor() {
    this.updateTray()
    this.watchTrayChanges()
    TrayService.instance = this
  }

  public static getInstance() {
    return TrayService.instance
  }

  private createTray() {
    this.destroyTray()

    // 图标配置
    const iconPath = icon 
    const tray = new Tray(iconPath)

    if (process.platform === 'win32') {
      tray.setImage(iconPath)
    } else if (process.platform === 'darwin') {
      const image = nativeImage.createFromPath(iconPath)
      const resizedImage = image.resize({ width: 15, height: 15 })
      resizedImage.setTemplateImage(true)
      tray.setImage(resizedImage)
    } else if (process.platform === 'linux') {
      const image = nativeImage.createFromPath(iconPath)
      const resizedImage = image.resize({ width: 15, height: 15 })
      tray.setImage(resizedImage)
    }

    this.tray = tray

    const locale = locales[configManager.getLanguage()]
    // 析构 translation 中的 tray 部分并重命名为 trayLocale
    const { tray: trayLocale } = locale.translation
    // 托盘右键菜单模板
    const template = [
      {
        // 展示窗口
        label: trayLocale.show_window,
        click: () => windowService.showMainWindow()
      },
      // enableQuickAssistant && {
      //   label: trayLocale.show_mini_window,
      //   click: () => windowService.showMiniWindow()
      // },
      // 添加一条分割线
      { type: 'separator' },
      {
        // 退出
        label: trayLocale.quit,
        click: () => this.quit()
      }
    ].filter(Boolean) as MenuItemConstructorOptions[]
    // 从模板构建托盘右键菜单
    const contextMenu = Menu.buildFromTemplate(template)
    if (process.platform === 'linux') {
      this.tray.setContextMenu(contextMenu)
    }
    // 设置托盘图标提示文字
    this.tray.setToolTip('Abc')
    this.tray.on('right-click', () => {
      this.tray?.popUpContextMenu(contextMenu)
    })

    // 托盘图标点击事件
    this.tray.on('click', () => {
      // if (enableQuickAssistant && configManager.getClickTrayToShowQuickAssistant()) {
      //   windowService.showMiniWindow()
      // } else {
        windowService.showMainWindow()
      // }
    })
  }

  private updateTray() {
    const showTray = configManager.getTray()
    if (showTray) {
      this.createTray()
    } else {
      this.destroyTray()
    }
  }

  public restartTray() {
    if (configManager.getTray()) {
      this.destroyTray()
      this.createTray()
    }
  }

  private destroyTray() {
    if (this.tray) {
      this.tray.destroy()
      this.tray = null
    }
  }

  private watchTrayChanges() {
    configManager.subscribe<boolean>('tray', () => this.updateTray())
  }

  private quit() {
    app.quit()
  }
}
