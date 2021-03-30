import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {MarkdownContent} from '../info/style'

import { getAllData } from '../../components/Contents/GetPosts';

const StudyCasesPage = ({ title, date, content, img, author})=> {

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
            <section>
              <div className="container px-5 mx-auto">  
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
  export default StudyCasesPage
  
  //fetching data from markdown files
  export const getStaticProps = async (context) => {
    const { params } = context;
    const allCases = getAllData('studycases');
    const { data, content } = allCases.find((item) => item.slug === params.slug);
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
      paths: getAllData('studycases').map((case1) => ({
        params: {
          slug: case1.slug,
        },
      })),
      fallback: false,
    };
  }