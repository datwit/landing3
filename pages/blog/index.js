import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link";
import { getAllPosts } from './GetPosts';
import { format, parseISO } from 'date-fns';
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, ContentWrapper} from '../../styles/global'
import {UpperRowBlog, DropdownWrapper, SearchWrapper} from '../../components/Blog/style'



const Blog = ({ posts }) =>{
  return (
    //Posts listing template    
      <FullPage controls={CustomControls}>
        <Slide>
          <Section>
          <div className="container px-5 mx-auto">        
            <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>
            <UpperRowBlog>
               {/*dropdown*/}
                <DropdownWrapper>                    
                    <button className= "w-1/2 rounded border border-gray-300 bg-white text-gray-700 font-bold text-sm px-3 py-4 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "></button>                    
                </DropdownWrapper>
                {/* search box*/}
                <SearchWrapper>
                    <input type="text" name="search" placeholder="Search here" className="w-3/4 rounded border border-gray-300 bg-white  text-base outline-none text-gray-700 px-3 leading-8 focus:border-primary focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out"/>
                    <svg className="h-6 w-6 text-gray-700 opacity-40"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                </SearchWrapper>
            </UpperRowBlog>              
            <div className="hidden md:block">
              <ContentWrapper>                
                  {
                  posts.map((item) => (
                      <BlogListItem key={item.slug} {...item} />
                  ))
                  }                           
              </ContentWrapper>
            </div>
            <div className="md:hidden">
              <ContentWrapper>                
                  {
                  posts.map((item) => (
                      <BlogListItem key={item.slug} {...item} />
                  ))
                  }                           
              </ContentWrapper>
            </div>
                        
            </div>               
          </Section>        
        </Slide>       

        <Slide>
          <section className= "w-full h-screen bg-primary mx-auto px-10">
            <Footer />
          </section>                  
        </Slide>
      </FullPage>      
  
  );
}
export default Blog

//fetching data from markdown files
export const getStaticProps = async () => {  
  const allPosts = getAllPosts();  
  return {
    props: {
      posts: allPosts.map(({ data, slug }) => ({
        ...data,
        date: data.date.toISOString(),        
        slug,
      })),
    },
  };  
}

//Extracting  visual component
const BlogListItem = ({ slug, title, date, summary })=> {

  
  return (
    <>        
      <div className="p-4 md:w-1/3 w-full hidden md:block">
          <Link href={`/blog/${slug}`}><div className="h-full border border-gray-300 shadow hover:shadow-lg  transition duration-200 ease-in overflow-hidden mx-4 md:mx-0">
              <img className="lg:h-48 md:h-28 w-full object-cover object-center" src="" alt="" />              
              <div className="p-3">
                  <div className="text-gray-600 text-xs">
                      {format(parseISO(date), 'MMMM do, uuu')}
                  </div>
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                  <Link href={`/blog/${slug}`}><h1 className="title-font text-lg font-bold text-primary mb-1 cursor-pointer">{title}</h1></Link> 
                  <p className="mt-0 text-base leading-6 text-gray-500">{summary}</p>                  
                  {/* <div className="flex items-center flex-wrap ">
                      <a className="text-secondary2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                          </svg>
                      </a>
                  </div> */}
              </div>
          </div></Link>
      </div>
      <div className="md:hidden">
          <Link href={`/blog/${slug}`}>
              <div className="border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in mb-3 p-3 cursor-pointer">
                  <div>
                      <Link href={`/blog/${slug}`}>
                          <a className="font-bold">{title}</a>
                      </Link>
                  </div>
                  <div className="text-gray-600 text-xs">
                      {format(parseISO(date), 'MMMM do, uuu')}
                  </div>
                  <div>{summary}</div>
              </div>
          </Link>
      </div>  
      </>         
  );
}




