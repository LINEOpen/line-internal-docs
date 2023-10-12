import { defineConfig } from 'vitepress'
//const { generateSidebar } = await import("vitepress-sidebar")
//import { getSidebar } from 'vitepress-plugin-auto-sidebar'
import config_sidebar from "../sidebar.ts"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LINE schemes project",
  description: "LINEスキームURLを収集するー",
  base: "/line-internal-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/docs' },
      { text: 'GitHubで変更を提案', link: 'https://github.com/LINEOpen/line-internal-docs' }
    ],
    displayAllHeaders: true,
    sidebar: config_sidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LINEOpen/line-internal-docs' }
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
