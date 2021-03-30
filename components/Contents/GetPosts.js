import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


//const contentDirectory = path.join(process.cwd(), /info');

export function getAllData(fileDir) {
  
  const contentDirectory = path.join(process.cwd(), '_content/' + fileDir)
  const allData = fs.readdirSync(contentDirectory)

  return allData.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      'utf8'
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}