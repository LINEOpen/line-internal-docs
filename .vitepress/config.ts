import { defineConfig } from 'vitepress'

import sidebar from "vuepress-auto-sidebar"

sidebar.baseOption = "./docs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LINE schemas project",
  description: "LINEスキーマURLを収集するー",
  base: "/LINE-schemas",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/docs' }
    ],
    displayAllHeaders: true,
    sidebar: sidebar.getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})

