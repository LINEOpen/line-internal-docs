import { defineConfig } from 'vitepress'

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
    sidebar: [
      {
        
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})
