import fs from "fs"

function getFiles(path){
  return fs.readdirSync(path, { withFileTypes: true }).filter(dirent => dirent.isFile()).map(e=>path+e.name);
}
const getSchemes = (path, noth2: boolean | void) => getFiles(path).map(path => {
  const markdown = fs.readFileSync(path, 'utf8');
  let h1 = markdown.match(/^# .+$/mg);
  h1 = h1 ? h1[0].slice(2) : "None";
  const h2s = (()=>{
    const h2s = markdown.match(/^## .+$/mg);
    return h2s ? h2s.map(h2=>h2.slice(3)) : [];
  })();
  if(noth2){
    return {
      text: h1,
      link: path.replace(/(\.md)|(\.)/g,""),
    }
  }
  return {
    text: h1,
    items: h2s.map(h2=>({
      text: h2,
      link: path.replace(/(\.md)|(\.)/g,"") + "#" + h2.replace(/[\?= `\/"'\{\}:\|_]+/g,"-").replace(/(^-+)|(-+$)/g,"").toLowerCase(),
    })),
    link: path.replace(/(\.md)|(\.)/g,""),
    collapsed: false,
  }
})
export default () => ([
  { text: "Introduction", link: "/docs" },
  { text: "ルール", link: "/docs/rule" },
  { text: "Words", link: "/docs/words", items: getSchemes("./docs/words/",true), collapsed: false,},
  {
    text: "Schemas",
    items: getSchemes("./docs/schemes/"),
  },
])
