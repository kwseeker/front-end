import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

// Getting Started with React Redux: https://react-redux.js.org/introduction/getting-started
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
const store = configureStore({
  reducer: {
    buttonClickCount: counterSlice.reducer
  }
})

// 计数显示组件
const Counter = () => {
  const count = useSelector(state => state.buttonClickCount.clickCount)   // state.<slice.name>.<stateValueName>
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
        <div>
          <h1>React-Redux 按钮计数示例</h1>
          <Counter />
          <FirstComponent />
          <SecondComponent />
        </div>
      </Provider>
      {/* <div>
        <ThirdComponent />
      </div> */}
    </div>
  )
}

export default App