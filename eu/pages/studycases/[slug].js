import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Footer} from 'components/Footer'
import {MarkdownContent} from 'components/Markdown/style'
import { motion } from 'framer-motion'
import { FullPage } from 'react-full-page'
import {CustomControls} from 'components/Slide/CustomControls'
import {PostTitle} from 'components/Blog/style'
import { useRouter } from 'next/router'
import {FiChevronLeft} from 'react-icons/fi'

import { getAllData } from 'lib/posts'

const StudyCasesPage = ({ title, date, content, author})=> {

    const router = useRouter()

    return (
     
        <>
            <Head>
            <title>{title}</title>
            </Head>

            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
                <FullPage controls={CustomControls} scrollMode='normal'>
                    <main>
                        <section className="pt-20 mx-auto max-w-7xl">
                            <div className="px-5 mx-auto">                                
                                <a onClick={()=>router.back()}>
                                    <h3 className="flex pt-10 pb-6 cursor-pointer hover:text-secondary1">
                                        <FiChevronLeft  className="h-6 w-6 mr-2"/>
                                        <span>Back</span>
                                    </h3>
                                </a>
                                <div className="mt-3 mb-8 w-3/4 mx-auto text-center">                               
                                    <PostTitle>{title}</PostTitle>                                
                                    <div className="w-full"><p className="mt-0 text-sm"><span className="text-gray-700 font-medium">By: </span><span>{author}</span></p></div>
                                    <div className="w-full"><p className="mt-0 text-sm"><span className="text-gray-700 font-medium">On: </span>{format(parseISO(date), 'MMMM do, uuu')}<span></span></p></div>
                                </div>
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
export default StudyCasesPage

  //fetching data from markdown files
export const getStaticProps = async (context) => {
    const { params } = context;
    const allCases = getAllData('studycases');
    const { data, content } = allCases.find((item) => item.slug === params.slug);
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
        paths: getAllData('studycases').map((case1) => ({
        params: {
            slug: case1.slug,
        },
        })),
        fallback: false,
    };
}