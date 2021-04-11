import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {MarkdownContent} from '../../components/Markdown/style'
import {PostTitle} from '../../components/Blog/style'
 

import { getAllData } from '../../lib/posts';

const Info = ({ title, content})=> {

  const hydratedContent = hydrate(content);

  return (
    //Post page template
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section className="pb-16 pt-20">
            <div className="container px-5 mx-auto">  
              <PostTitle>{title}</PostTitle>                  
              <MarkdownContent>{hydratedContent}</MarkdownContent>
            </div>        
        </section> 
        <section className= "w-full h-screen bg-primary mx-auto px-10">
            <Footer />
        </section>           
      </main>       
    </>
    
  );
}
export default Info

//fetching data from markdown files
export const getStaticProps = async (context) => {
  const { params } = context;
  const allPosts = getAllData('info');
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
    paths: getAllData('info').map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}