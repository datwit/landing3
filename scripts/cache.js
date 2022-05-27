const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')



function getjsonData(fileDir) {
  const filesDirectory = path.join(process.cwd(), `_content/${fileDir}`)
  const fileNames = fs.readdirSync(filesDirectory)
  const files = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(filesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      title: matterResult.data.title,
      author: matterResult.data.author,
      summary: matterResult.data.summary,
      img: matterResult.data.img,
      tags: matterResult.data.tags,
      date: matterResult.data.date,
      reading: matterResult.data.reading
    }
  })
  return JSON.stringify(files)
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/posts.json', getjsonData('posts'), function (err) {
  if (err) return console.log(err);
  console.log('Posts cached.');
})
fs.writeFile('cache/cases.json', getjsonData('studycases'), function (err) {
  if (err) return console.log(err);
  console.log('Our Work cached.');
})

