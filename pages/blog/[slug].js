import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {ImgContainer, DateAuthorWrapper, PostTitle} from '../../components/Blog/style'
import { getAllData } from '../../lib/posts';
import {MarkdownContent} from '../../components/Markdown/style'
import {Category} from '../../components/Blog/style'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const BlogPage = ({ title, date, content, img, author, tags, id})=> {

  const hydratedContent = hydrate(content);
  const router = useRouter()

  return (
    //Post page template
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
          <main>
              <Navbar />
              <section className="pt-20">
                  <div className="container px-5 mx-auto">  
                        <ImgContainer>
                            <img src={img} alt={title}/>
                        </ImgContainer>              
                        <DateAuthorWrapper>
                          <a>{`By: ${format(parseISO(date), 'MMMM do, uuu')}`}</a>
                          <a>{`On: ${author.name}`}</a>
                        </DateAuthorWrapper>   
                        <div className="flex flex-wrap">
                            {
                              tags.map((tags, key3) => (
                                <div key={key3} >                            
                                    <a onClick={() => router.push(`/blog/search?p=${tags.toLowerCase()}`)}>
                                        <Category                                                                             
                                        >{tags}
                                        </Category>
                                    </a>                          
                                </div>                        
                            ))
                            }
                        </div>        
                        <PostTitle>{title}</PostTitle>                  
                        <MarkdownContent>{hydratedContent}</MarkdownContent>
                  </div>        
              </section> 
              <section className= "w-full h-screen bg-primary mx-auto px-10">
                  <Footer />
              </section>           
          </main> 
      </motion.div>      
    </>
    
  );
}
export default BlogPage

//fetching data from markdown files
export const getStaticProps = async (context) => {
  const { params } = context;
  const allPosts = getAllData('posts');
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
    paths: getAllData('posts').map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}