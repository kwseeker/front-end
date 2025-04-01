# Electron 应用初始化

## Electron 原生构建

```shell
# 生成 npm 项目管理文件： package.json, 类似 maven pom.xml
# 包括项目名、版本、描述、入口点、测试脚本、作者等信息
npm init

# npm 镜像配置，（类似 maven 仓库配置）
# 其他：https://npm.aliyun.com/、https://mirrors.cloud.tencent.com/npm/、https://mirrors.huaweicloud.com/repository/npm/
npm config set registry https://registry.npmmirror.com # 有后面的 .npmrc 就不需要了
npm info underscore
npm config list
# 切换镜像后可能遇到 npm ERR! code CERT_HAS_EXPIRED，我们先暂时关闭连接npm源的SSL认证
npm config set strict-ssl false
# 也可以使用 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

# 安装 electron 依赖
# --save-dev (-D) 将 electron 依赖设置为开发依赖，会被包含在 devDependencies 属性中
npm install electron --save-dev --verbose
```

上面方式可能下载依赖会失败，推荐配置 `.npmrc`：

```properties
registry=https://registry.npmmirror.com/
electron_mirror=https://npmmirror.com/mirrors/electron/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
```

## Electron-Vite 构建

参考：https://cn.electron-vite.org/guide/

```
npm init
npm i electron-vite -D
```

还可以通过模板构建：

```shell
npm create @quick-start/electron@latest my-app -- --template vue
yarn create @quick-start/electron my-app --template vue
yarn create @quick-start/electron my-app --template react-ts

yarn install 
yarn dev
```

使用模板构建生成的目录结构：

```shell
.
├── build				# 存放静态资源（如图标、安装程序素材），打包时会复制到最终输出目录。
├── node_modules		# 存放项目依赖的 npm 包
├── out					# 打包后的输出目录（包含可执行文件、安装包等），由 electron-builder 生成。
├── resources			# 存放应用专属资源（如数据库、配置文件、额外二进制文件），打包时会被包含。
├── src	
  	├── main			# 主进程入口，启动 Electron 应用，创建窗口
    │   └── index.ts
    ├── preload			# 预加载脚本，在渲染进程加载前执行
    │   ├── index.d.ts
    │   └── index.ts
    └── renderer		# 渲染进程
        ├── index.html
        └── src
            ├── App.tsx
            ├── assets
            │   ├── base.css
            │   ├── electron.svg
            │   ├── main.css
            │   └── wavy-lines.svg
            ├── components
            │   └── Versions.tsx
            ├── env.d.ts
            └── main.tsx
├── .editorconfig			# 统一代码编辑器风格（缩进、换行符等）。
├── .gitignore
├── .npmrc					# npm 配置（如镜像源、缓存路径）。
├── .prettierignore			# 指定不需要格式化的文件/目录
├── .prettierrc.yaml		# 代码格式化规则（Prettier 配置）
├── .vscode
├── electron-builder.yml	# 打包配置（应用名称、版本、图标、目标平台等），由 electron-builder 使用。
├── electron.vite.config.ts	# Electron-Vite 主配置，定义主进程、渲染进程、预加载脚本的构建规则。
├── eslint.config.mjs		# ESLint 静态检查规则
├── package.json			# 项目元数据、依赖项、脚本命令（如 dev、build）。
├── README.md
├── tsconfig.json			# TypeScript 通用配置（基础编译规则）。
├── tsconfig.node.json		# 主进程/Node 环境的 TypeScript 配置。
├── tsconfig.web.json		# 渲染进程/Browser 环境的 TypeScript 配置。
└── yarn.lock
```

## Yarn 添加依赖

开发中可能需要添加新的依赖：

```shell
yarn add electron-store@8.2.0
yarn add electron-window-state@5.0.3
```

## Electron 应用调试

