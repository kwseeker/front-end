# Electron 工作原理

## 技术架构

Electron 的工作原理基于 **Chromium 渲染引擎** 和 **Node.js 运行时** 的融合，通过多进程架构实现跨平台桌面应用开发。

主要分为三部分：

+ **Chromium**

  是 Chrome 的开源版浏览器。为 `Electron` 提供 UI 渲染能力，可以使用 HTML\CSS\JS 开发页面。

+ **Node.js**

  整合了 javascript 运行时，提供调用操作系统底层 API 的能力。

+ **Native APIs**

  提供原生系统（Win、Linux、MacOS）的 GUI （桌面系统）支持，比如程序坞、托盘等功能是需要调用桌面系统 GUI 接口的。

### Chromium 架构

![](https://www.chromium.org/developers/design-documents/multi-process-architecture/arch.png)

是一个多进程架构：

+ **Browser 主进程**

  只有一个 Browser 进程。

+ **Renderer 渲染进程**

  可以有多个 Renderer 进程，每个渲染进程对应一个页面。

  页面通过基于 WebKit 排版的 RenderView 渲染展示出来。

  每个页面中可能有多个 RenderView, 比如弹出弹窗，渲染进程就会创建一个 RenderView。

  页面渲染需要加载一些资源（比如：html、css、图片等等）会通过 ResourceDispatcher 创建资源请求通过 IPC 传给主进程处理并获取返回的资源。

主进程与渲染进程之间通过 **IPC 通信**，上面的**红色模块**都是用于IPC通信的模块，可以处理 **IPC 事件**。

### Electron 架构

参考了 Chromium 架构，另外为 Browser 进程和 Renderer 进程都集成了 Node.js 运行时（使用 V8 执行引擎），可以调用 Node API 。

对比 Chromium 和 Electron 架构：

**Chromium 简化后的架构**

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a897009bd5444de287af1895a4f43081~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

**Electron 架构**

<img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59a53707ff364e9bbf1f5d8beead7c54~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" style="zoom:67%;" />

虽然主进程和渲染进程都整合了 Node.js 运行时，但是只有主进程可以调用系统 GUI 的 API，渲染进程需要经过 IPC 让主进程调用。

> V8 引擎应该属于 Node.js 运行时的一部分，感觉画在运行时外边不合适。

## 生命周期事件

生命周期反映工作流程，Electron 整个生命周期都是靠各种各样的事件驱动的，这里列举一些关键的事件（更多参考下一节）：

+ ready

+ dom-ready

+ did-finish-load

  导航完成后触发。

+ window-all-closed

+ before-quit

+ will-quit

+ quit

+ closed

## 模块与组件

参考：[Electron API](https://electron.nodejs.cn/docs/latest/api/app/)

+ **app** 

  控制应用的事件生命周期。

+ **BrowerWindow** 

  创建和管理应用窗口。

  **事件**：

  + ready-to-show
  + enter-full-screen

  **属性**：

  + **WebContents**

    

  + **WebPreferences**

+ ipMain

+ process