import { useTheme } from '@renderer/context/ThemeProvider'
import { useRuntime } from './useRuntime'
import { useSettings } from './useSettings'

import { platform } from '@electron-toolkit/utils'

// 导航栏背景颜色取决于当前主题和窗口样式（state 中存储）
function useNavBackgroundColor(): string {
  // 获取当前窗口样式
  const { windowStyle } = useSettings()
  // 获取当前主题
  const { theme } = useTheme()
  // 获取当前应用是否显示
  const { minappShow } = useRuntime()

  // 如果当前是 macOS 系统，并且窗口样式是透明，则返回透明
  const macTransparentWindow = platform.isMacOS && windowStyle === 'transparent'

  if (minappShow) {
    return theme === 'dark' ? 'var(--navbar-background)' : 'var(--color-white)'
  }

  if (macTransparentWindow) {
    return 'transparent'
  }

  // 引用自定义样式属性 --navbar-background 的值
  return 'var(--navbar-background)'
}

export default useNavBackgroundColor
