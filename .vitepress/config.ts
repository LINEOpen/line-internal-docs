import { defineConfig } from 'vitepress'
//const { generateSidebar } = await import("vitepress-sidebar")
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LINE schemes project",
  description: "LINEスキームURLを収集するー",
  base: "/LINE-schemes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/docs' },
      { text: 'GitHubで変更を提案', link: 'https://github.com/nakasyou/LINE-schemas' }
    ],
    displayAllHeaders: true,
    sidebar: getSidebar({
      contentDirs: ["docs"],
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})

function sidebar(){
  const gs = generateSidebar({
      root: '/',
      rootGroupText: 'Contents',
      useTitleFromFileHeading: true,
      // hyphenToSpace: true,
      // underscoreToSpace: true,
      // collapsed: true,
      // collapseDepth: 2,
      // sortByFileName: ['first.md', 'second', 'third.md'],
      // withIndex: true,
      // includeEmptyGroup: false
  })[0].items
  for(const g of gs){
    if(g.text === "docs"){
       return g.items
    }
  }
}
