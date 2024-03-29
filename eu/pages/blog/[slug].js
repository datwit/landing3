import React from 'react'
import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Footer} from 'components/Footer'
import {ImgContainer, DateAuthorWrapper, PostTitle} from 'components/Blog/style'
import { getAllData } from 'lib/posts'
import {MarkdownContent} from 'components/Markdown/style'
import {Category} from 'components/Blog/style'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import {CustomControls} from 'components/Slide/CustomControls'
import {FiChevronLeft} from 'react-icons/fi'

const BlogPage = ({ title, date, content, img, author, tags, id})=> {

    const router = useRouter()

    return (
        //Post page template
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>
                    <main>
                        <section className="pt-20 mx-auto max-w-7xl">
                            <div className="mx-8 md:mx-auto">                                
                                <a onClick={()=>router.back()}>
                                    <h3 className="flex pt-10 pb-6 cursor-pointer hover:text-secondary1">
                                        <FiChevronLeft  className="h-6 w-6 mr-2"/>
                                        <span>Back</span>
                                    </h3>
                                </a>
                                <DateAuthorWrapper>
                                    <PostTitle>{title}</PostTitle> 
                                    <div className="w-full"><p className="mt-0 text-sm">{`By: ${author}`}</p></div>
                                    <div className="w-full"><p className="mt-0 text-sm">{`On: ${format(parseISO(date), 'MMMM do, uuu')}`}</p></div>
                                    <div className="flex flex-wrap py-5 justify-center">
                                        {
                                            React.Children.toArray(
                                                tags.map(tags => (
                                                    <a onClick={() => router.push(`/blog/search?p=${tags.toLowerCase()}`)}>
                                                        <Category
                                                        >{tags}
                                                        </Category>
                                                    </a>
                                                ))
                                            )
                                        }
                                    </div>                                      
                                </DateAuthorWrapper>                                                         
                                <ImgContainer>
                                    <img src={img} alt={title}/>
                                </ImgContainer>                              
                                <MarkdownContent>
                                    <MDXRemote {...content} />
                                </MarkdownContent>
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
export default BlogPage

//fetching data from markdown files
export const getStaticProps = async (context) => {
    const { params } = context;
    const allPosts = getAllData('posts');
    const { data, content } = allPosts.find((item) => item.slug === params.slug);
    const mdxSource = await serialize(content);

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