import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import settingsReducer from './settings'
// import migrate from './migrate'

// 合并多个 Reducer 为一个 Reducer, 执行时应该会自动分发处理
const rootReducer = combineReducers({
  // 助手（本质是针对某个场景的一段模型上下文信息）
  assistants,
  // agents,
  // backup,
  // nutstore,
  // paintings,
  // llm,
  settingsReducer
  // runtime,
  // shortcuts,
  // knowledge,
  // 小程序
  // minapps,
  // websearch,
  // mcp,
  // copilot,
  // messages: messagesReducer
})

// 为 Reducer 添加持久化功能
const persistedReducer = persistReducer(
  // 持久化配置, 更多持久化配置参考 PersistConfig
  {
    key: 'abc', // 持久化存储的键名
    storage, // 持久化存储的引擎
    version: 86 // 持久化存储的版本
    // blacklist: ['runtime', 'messages'],  // 不持久化存储的 reducer
    // PersistMigrate 迁移函数
    // migrate
  },
  rootReducer
)

// 创建 Redux store
const store = configureStore({
  // 告诉编译器 persistedReducer 的类型与原始 rootReducer 相同
  // Property '_persist' is missing in type '{ settingsReducer: SettingsState; }' but required in type 'PersistPartial'
  reducer: persistedReducer as typeof rootReducer,
  // TODO ?
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
  },
  devTools: true
})

// ReturnType 用于获取一个函数的返回值类型，这里 RootState 其实是
// M[keyof M] extends Reducer<any, any, any>
//   | undefined ? Reducer<StateFromReducersMapObject<M>, ActionFromReducersMapObject<M>, Partial<PreloadedStateShapeFromReducersMapObject<M>>>
//     : never
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
// useDispatch 是一个函数接口类型，定义一个函数，调用函数返回 AppDispatch，AppDispatch 本身也是一个泛型类型
// 不过当前文件中 AppDispatch 是一个具体类型，这里 withTypes 提前定义好了类型约束
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store
