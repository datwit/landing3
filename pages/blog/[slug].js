import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllPosts } from './GetPosts';

const BlogPage = ({ title, date, content })=> {
  const hydratedContent = hydrate(content);

  return (
    //Post page template
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
        </div>
        <div className="prose">{hydratedContent}</div>
      </main>
    </div>
  );
}
export default BlogPage

//fetching data from markdown files
export const getStaticProps = async (context) => {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}
//Creating the paths
export const getStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}