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

