const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function postData() {
  const postsDirectory = path.join(process.cwd(), '_content/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      title: matterResult.data.title,
      author: matterResult.data.author.name,
      summary: matterResult.data.summary,
      img: matterResult.data.img,
      tags: matterResult.data.tags,
      date: matterResult.data.date
    }
  })
  return JSON.stringify(posts)
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.json', postData(), function (err) {
  if (err) return console.log(err);
  console.log('Posts cached.');
})

