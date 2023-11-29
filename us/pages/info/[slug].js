import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Footer} from 'components/Footer'
import {MarkdownContent} from 'components/Markdown/style'
import {PostTitle} from 'components/Blog/style'
import { motion } from 'framer-motion' 
import { FullPage } from 'react-full-page'
import {CustomControls} from 'components/Slide/CustomControls'
import {Section} from 'components/Section'

import { getAllData } from 'lib/posts'

const Info = ({ title, content})=> {

    return (
        //Post page template
        <>
            <Head>
                <title>{title}</title>        
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>
                    <main>
                        <Section classes={"pb-16 pt-20 mx-auto max-w-7xl"} >
                            <div className="px-5 mx-auto">  
                                <PostTitle>{title}</PostTitle>                  
                                <MarkdownContent>
                                    <MDXRemote {...content} />
                                </MarkdownContent>
                            </div>        
                        </Section> 
                        <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                            <Footer />
                        </Section>           
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
        paths: getAllData('info').map((post) => ({
        params: {
            slug: post.slug,
        },
        })),
        fallback: false,
    };
}