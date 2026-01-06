# Feign Travel Blog (TravelLog)

一个基于 Vue 3 + Vite 的个人旅行博客系统，用于记录足迹、分享照片和旅行日志。

## ✨ 项目特色

- **🗺️ 交互式地图**: 使用 Leaflet 集成地图，可视化展示旅行足迹。
- **🖼️ 沉浸式图库**: 支持按地区筛选的响应式照片墙。
- **📝 旅行日志**: 记录旅途中的点点滴滴（开发中）。
- **🎨 现代化 UI**: 采用 TailwindCSS v4 打造的响应式、极简风格界面。
- **⚡ 极速体验**: 基于 Vite 构建，秒级启动。

## 🛠️ 技术栈

- **核心框架**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **构建工具**: [Vite](https://vitejs.dev/)
- **样式方案**: [TailwindCSS v4](https://tailwindcss.com/)
- **路由管理**: [Vue Router 4](https://router.vuejs.org/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **地图组件**: [Leaflet](https://leafletjs.com/)

## 📂 目录结构

```
src/
├── assets/          # 静态资源 & 全局样式
├── components/      # 公共组件 (Header, Footer, Map, etc.)
├── data/            # 模拟数据 (旅行足迹, 照片信息)
├── pages/           # 页面级组件 (Home, Gallery, Logs, etc.)
├── router/          # 路由配置
├── store/           # Pinia 状态管理
└── utils/           # 工具函数
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 项目打包

```bash
npm run build
```

## 📄 版权说明

&copy; 2026 Feign. All rights reserved.
[陇ICP备2025016955号](https://beian.miit.gov.cn/)
