# Feign Travel Blog

一个基于 Vue 3 + Vite 的旅行博客项目，用于展示旅行地图、照片画廊和旅行日志。

## 项目特性

- 交互式地图：基于 Leaflet 展示旅行区域与轨迹入口
- 区域详情页：按地区浏览照片与简介信息
- 旅行画廊：集中查看旅行图片
- 日志与个人页面：预留内容扩展入口
- 现代前端栈：Vue 3 + Vue Router + Pinia + TailwindCSS + Vite

## 技术栈

- Vue 3
- Vite
- Vue Router 4
- Pinia
- TailwindCSS 4
- Leaflet

## 目录结构

```text
travel-blog/
├─ public/
│  └─ imgs/                 # 旅行图片资源
├─ src/
│  ├─ assets/               # 全局样式与静态资源
│  ├─ components/           # 公共组件（Header/Footer/Map 等）
│  ├─ data/                 # 页面使用的数据（地区、照片等）
│  ├─ directives/           # 自定义指令
│  ├─ pages/                # 页面组件
│  ├─ router/               # 路由配置
│  ├─ store/                # Pinia 状态管理
│  ├─ App.vue
│  └─ main.js
├─ index.html
├─ package.json
└─ vite.config.js
```

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认情况下，Vite 会输出本地访问地址（通常是 `http://localhost:5173`）。

### 3. 生产构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 4. 本地预览构建结果

```bash
npm run preview
```

## 页面路由

- `/`：首页
- `/map`：旅行地图
- `/region/:id`：区域详情
- `/gallery`：图片画廊
- `/logs`：旅行日志
- `/profile`：个人页

## 当前数据范围

目前数据主要包含以下区域：

- Guangxi, China
- Hunan, China

相关数据文件位于 `src/data/travelData.js`。

## 说明

- 本项目当前使用本地静态图片与本地数据文件驱动页面。
- 如需扩展到后端接口，可优先从 `src/data/` 数据层替换开始。

## License

Copyright (c) 2026 Feign
