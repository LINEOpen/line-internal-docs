import { defineConfig } from 'vitepress'
const { generateSidebar } = await import("vitepress-sidebar")

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LINE schemes project",
  description: "LINEスキームURLを収集するー",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/docs' }
    ],
    displayAllHeaders: true,
    sidebar: generateSidebar({
      root: '/docs',
      rootGroupText: 'Contents',
      useTitleFromFileHeading: true,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // collapsed: true,
      // collapseDepth: 2,
      // sortByFileName: ['first.md', 'second', 'third.md'],
      withIndex: true,
      // includeEmptyGroup: false
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})

function sidebar(){
  return
}
