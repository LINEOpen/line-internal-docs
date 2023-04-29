import { defineConfig } from 'vitepress'
import fs from "fs"
import path from "path"
var dirpath = "./docs"
var dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
})
var sidebarArray = ["/"].concat(dirs.map((dir) => {
  return {
    title: dir,
    collapsable: true,
    children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
      return dirpath + "/" + dir + "/" + childDir
    })
  }
}))
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
    sidebar: sidebarArray,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nakasyou/LINE-schemas' }
    ]
  }
})
