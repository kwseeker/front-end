import { ThemeMode } from '@renderer/types'
import settingsReducer, { setTheme, SettingsState, setWindowStyle } from './settings'

// 执行测试：yarn test src/renderer/src/store/settings.test.ts
// 定义测试用例分组，包含测试名称、测试方法
describe('settings reducer', () => {
  const initialState: SettingsState = {
    theme: ThemeMode.auto,
    windowStyle: 'transparent' as const
  }

  // 测试用例
  it('should handle initial state', () => {
    expect(settingsReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle setTheme', () => {
    const actual = settingsReducer(initialState, setTheme(ThemeMode.dark))
    expect(actual.theme).toEqual(ThemeMode.dark)
    expect(actual.windowStyle).toEqual('transparent')
  })

  it('should handle setWindowStyle', () => {
    const actual = settingsReducer(initialState, setWindowStyle('opaque'))
    expect(actual.windowStyle).toEqual('opaque')
    expect(actual.theme).toEqual(ThemeMode.auto)
  })

  it('should handle multiple actions', () => {
    let state = settingsReducer(initialState, setTheme(ThemeMode.light))
    state = settingsReducer(state, setWindowStyle('opaque'))

    expect(state).toEqual({
      theme: ThemeMode.light,
      windowStyle: 'opaque'
    })
  })
})
