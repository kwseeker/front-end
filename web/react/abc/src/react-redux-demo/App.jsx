import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

// Getting Started with React Redux: https://react-redux.js.org/introduction/getting-started
// API Reference: https://react-redux.js.org/api/provider
// 使用 useSelector 和 useDispatch 这两个钩子在 React组件中与 Redux 存储交互
// useSelector 从存储状态读取值并订阅更新
// useDispatch 返回存储的 dispatch 方法以允许您分发操作。

// 计数器
const counterSlice = createSlice({
  name: 'buttonClickCount',
  initialState: { clickCount: 0 },
  reducers: {
    increment: (state) => {
      state.clickCount += 1
    }
  }
})

// 创建 Redux store
const rootReducer = counterSlice.reducer

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['clickCount']  // 现在直接匹配 state 中的字段名
  },
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer
})

// 持久化存储
const persistor = persistStore(store)

// 计数显示组件
const Counter = () => {
  const count = useSelector(state => state.clickCount)   // 直接访问 state.clickCount
  return <h2>按钮点击次数：{count}</h2>
}

// 子组件
const ChildButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(counterSlice.actions.increment())}>
      子组件按钮
    </button>
  )
}

// 第一个父组件
const FirstComponent = () => {
  const dispatch = useDispatch()
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        父组件按钮
      </button>
      <ChildButton />
    </div>
  )
}

// 第二个父组件
const SecondComponent = () => {
  const dispatch = useDispatch()
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        父组件按钮
      </button>
      <ChildButton />
    </div>
  )
}

// App 组件
function App() {
  return (
    <div>
      <Provider store={store}>
        {/* 延迟应用程序 UI 的渲染，直到持久化状态被检索并保存到 redux 中
            loading 参数接收一个 React 节点，用于在持久化数据加载期间显示（比如显示一个加载中的动图），设置为null表示不显示任何加载指示器
        */}
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <h1>React-Redux 按钮计数示例</h1>
            <Counter />
            <FirstComponent />
            <SecondComponent />
          </div>
        </PersistGate>
      </Provider>
      {/* <div>
        <ThirdComponent />
      </div> */}
    </div>
  )
}

export default App
