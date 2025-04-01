// TODO 可以 import { is, platform } from '@electron-toolkit/utils' 来替代
export const isMac = process.platform === 'darwin'
export const isWin = process.platform === 'win32'
export const isLinux = process.platform === 'linux'
export const isDev = process.env.NODE_ENV === 'development'

// 窗口内容缩放快捷键，不是窗口大小缩放
export const ZOOM_SHORTCUTS = [
  {
    // 缩小：CommandOrControl + =
    key: 'zoom_in',
    shortcut: ['CommandOrControl', '='],
    editable: false,
    enabled: true,
    system: true
  },
  {
    // 放大：CommandOrControl + -
    key: 'zoom_out',
    shortcut: ['CommandOrControl', '-'],
    editable: false,
    enabled: true,
    system: true
  },
  {
    // 重置：CommandOrControl + 0
    key: 'zoom_reset',
    shortcut: ['CommandOrControl', '0'],
    editable: false,
    enabled: true,
    system: true
  }
]
