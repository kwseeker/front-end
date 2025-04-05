import store, { useAppDispatch, useAppSelector } from '@renderer/store'

export function useSettings() {
  const settings = useAppSelector((state) => state.settings)
  const dispatch = useAppDispatch()

  return {
    // 析构 settings 属性
    ...settings,
    setWindowStyle(windowStyle: 'transparent' | 'opaque') {
      dispatch(setWindowStyle(windowStyle))
    }
  }
}
