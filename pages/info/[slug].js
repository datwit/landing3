import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Footer from '../../components/Footer'
import {MarkdownContent} from '../../components/Markdown/style'
import {PostTitle} from '../../components/Blog/style'
import { motion } from 'framer-motion' 
import { FullPage } from 'react-full-page'
import CustomControls from '../../components/Slide/CustomControls'

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

      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
          <FullPage controls={CustomControls} scrollMode='normal'>
              <main>
                <section className="pb-16 pt-20">
                    <div className="px-5 mx-auto">  
                      <PostTitle>{title}</PostTitle>                  
                      <MarkdownContent>{hydratedContent}</MarkdownContent>
                    </div>        
                </section> 
                <section className= "w-full h-screen bg-primary mx-auto px-10">
                    <Footer />
                </section>           
              </main>
          </FullPage>
      </motion.div>       
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