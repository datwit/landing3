import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

//const contentDirectory = path.join(process.cwd(), /info');

export function getAllPosts(fileDir) {
  
  const contentDirectory = path.join(process.cwd(), '_content/' + fileDir)
  const allPosts = fs.readdirSync(contentDirectory)

  return allPosts.map((fileName) => {
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