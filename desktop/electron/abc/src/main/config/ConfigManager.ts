import Store from 'electron-store'
import { LanguageVarious, Shortcut } from '@types';
import { app } from 'electron'
import { locales } from '../utils/locales';
import { ZOOM_SHORTCUTS } from '../constant';

// App 配置管理
// 包括语言、主题、托盘、缩放、快捷方式、快速助手、配置变更订阅等
export class ConfigManager {
  // Electron Store 是简单的数据持久化，适用于您的 Electron 应用程序或模块 - 保存和加载用户设置、应用程序状态、缓存等
  // 数据将保存在名为 config.json 的 JSON 文件中，位于 app.getPath('userData')
  // https://www.npmjs.com/package/electron-store
  private store: Store
  // 托盘、缩放 等订阅者
  private subscribers: Map<string, Array<(newValue: any) => void>> = new Map()

  constructor() {
    this.store = new Store()
  }

  subscribe<T>(key: string, callback: (newValue: T) => void) {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, [])
    }
    this.subscribers.get(key)!.push(callback)
  }

  private notifySubscribers<T>(key: string, newValue: T) {
    const subscribers = this.subscribers.get(key)
    if (subscribers) {
      subscribers.forEach((subscriber) => subscriber(newValue))
    }
  }

  // 国际化 ------------------------------------
  getLanguage(): LanguageVarious {
    // 默认改为简中
    const locale = Object.keys(locales).includes(app.getLocale()) ? app.getLocale() : 'zh-CN'
    return this.store.get('language', locale) as LanguageVarious
  }

  setLanguage(language: LanguageVarious) {
    this.store.set('language', language)
  }

  // 托盘功能 ------------------------------------
  // 是否设置启动时最小化到托盘
  getLaunchToTray(): boolean {
    // !! 将值强制转换为 boolean 类型
    return !!this.store.get('launchToTray', false)
  }

  setLaunchToTray(value: boolean) {
    this.store.set('launchToTray', value)
  }

  getTray(): boolean {
    // 默认启用托盘功能
    return !!this.store.get('tray', true)
  }

  setTray(value: boolean) {
    this.store.set('tray', value)
    this.notifySubscribers('tray', value)
  }
  
  getTrayOnClose(): boolean {
    return !!this.store.get('trayOnClose', true)
  }
  
  // 设置关闭时最小化到托盘
  setTrayOnClose(value: boolean) {
    this.store.set('trayOnClose', value)
  }

  // 快捷键 ------------------------------------
  // store 中只保存注册的系统快捷键，store 为空返回 ZOOM_SHORTCUTS
  getShortcuts() {
    return this.store.get('shortcuts', ZOOM_SHORTCUTS) as Shortcut[] | []
  }

  setShortcuts(shortcuts: Shortcut[]) {
    this.store.set(
      'shortcuts',
      // 只保留系统快捷键
      shortcuts.filter((shortcut) => shortcut.system)
    )
    this.notifySubscribers('shortcuts', shortcuts)
  }

  getEnableQuickAssistant(): boolean {
    return this.store.get('enableQuickAssistant', false) as boolean
  }

  setEnableQuickAssistant(value: boolean) {
    this.store.set('enableQuickAssistant', value)
  }

  // 缩放 ------------------------------------
  // 缩放规则？TODO
  getZoomFactor(): number {
    return this.store.get('zoomFactor', 1) as number
  }

  setZoomFactor(factor: number) {
    this.store.set('zoomFactor', factor)
    this.notifySubscribers('zoomFactor', factor)
  }
}

export const configManager = new ConfigManager()
