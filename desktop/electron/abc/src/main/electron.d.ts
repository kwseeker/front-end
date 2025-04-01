declare global {
  namespace Electron {
    interface App {
      // 拓展 App 接口，添加 isQuitting 属性
      isQuitting: boolean
    }
  }
}

export {}
