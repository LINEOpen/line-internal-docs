import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LINE schemes project",
  description: "LINEスキームURLを収集するー",
  base: "/LINE-schemes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/docs' }
    ],
    displayAllHeaders: true,
    sidebar: sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})

function sidebar(){
  return
}
