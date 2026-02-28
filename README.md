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

## � 更新日志

### v1.0.1 (2026-02-28)
- ✅ 修复 Leaflet 地图标记（marker）显示问题，使用 CDN 加载默认图标资源
- ✅ 移除日本、冰岛、意大利的地区数据和相关照片
- ✅ 优化地图组件，确保标记正确显示和交互

### v1.0.0 
- 初始版本发布
- 完成地图、图库、日志等核心功能

## 🌍 当前支持的地区

目前支持以下旅行地区：
- **广西中国** - 以其独特的喀斯特地貌著称
- **湖南中国** - 以辛辣美食和丰富的历史文化而闻名

## 📄 版权说明

&copy; 2026 Feign. All rights reserved.
[陇ICP备2025016955号](https://beian.miit.gov.cn/)

