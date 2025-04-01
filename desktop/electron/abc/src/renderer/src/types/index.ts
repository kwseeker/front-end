export type LanguageVarious =
  | 'zh-CN'
  | 'zh-TW'
  | 'el-GR'
  | 'en-US'
  | 'es-ES'
  | 'fr-FR'
  | 'ja-JP'
  | 'pt-PT'
  | 'ru-RU'

export interface Shortcut {
  // 快捷键名称
  key: string
  // 快捷键的按键组合
  shortcut: string[]
  editable: boolean
  enabled: boolean
  // 是否系统快捷键
  system: boolean
}
