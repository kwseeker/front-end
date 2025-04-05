import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeMode } from '@renderer/types'

export interface SettingsState {
  theme: ThemeMode
  windowStyle: 'transparent' | 'opaque' // 取值范围：透明、不透明
}

const initialState: SettingsState = {
  theme: ThemeMode.auto,
  windowStyle: 'transparent'
}

// 创建一个设置状态的切片，为何叫做切片？
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  // Reducers 是一组根据当强状态值和动作设置新状态的函数，状态对象不可变（每次修改返回一个新的状态对象）、不可包含异步操作
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload
    },
    setWindowStyle: (state, action: PayloadAction<'transparent' | 'opaque'>) => {
      state.windowStyle = action.payload
    }
  }
})

// 导出 Slice中的 actions: CaseReducerActions<CaseReducers, Name>
export const { setTheme, setWindowStyle } = settingsSlice.actions

// 导出 Slice中的 reducer: Reducer<State>
// Reducer 根据当前状态和动作生成新的状态，并返回新的状态
export default settingsSlice.reducer
