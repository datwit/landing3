import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link";
import { getAllPosts } from './GetPosts';
import { format, parseISO } from 'date-fns';
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, ContentWrapper} from '../../styles/global'
import {UpperRowBlog, DropdownWrapper, SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, RespBlock,BlogTitle1, BlogTitle2, DateWrapper} from '../../components/Blog/style'



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
                    <button className= "w-1/2 rounded border border-gray-300 bg-white text-gray-700 font-bold text-sm px-3 py-4 outline-none focus:outline-none ease-linear transition-all duration-150 "></button>                    
                </DropdownWrapper>
                {/* search box*/}
                <SearchWrapper>
                    <input type="text" name="search" placeholder="Search here" className="w-3/4 rounded border border-gray-300 bg-white  text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"/>
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
  const allPosts = getAllPosts('info');  
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
      <BlogCardWrapper>
          <Link href={`/info/${slug}`}>
              <BlogCardBorder>
                  <img className="lg:h-48 md:h-28 w-full object-cover object-center" src="/images/dummy-image.png" alt="" />              
                  <BlogCardBlock>
                      <div className="text-gray-600 text-xs">
                          {format(parseISO(date), 'MMMM do, uuu')}
                      </div>
                      {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                      <Link href={`/info/${slug}`}><BlogTitle1>{title}</BlogTitle1></Link> 
                      <CardSummary>{summary}</CardSummary>                  
                      {/* <div className="flex items-center flex-wrap ">
                          <a className="text-secondary2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                              </svg>
                          </a>
                      </div> */}
                  </BlogCardBlock>
              </BlogCardBorder>
          </Link>
      </BlogCardWrapper>
      <div className="md:hidden">
          <Link href={`/blog/${slug}`}>
              <BlogCardBorder className="mb-3">
                  <div className="flex">
                      <img src="/images/dummy-image.png"  className="sm:w-1/4 w-1/2"  alt=""/>
                      <RespBlock>
                          <Link href={`/blog/${slug}`}>
                              <BlogTitle2>{title}</BlogTitle2>
                          </Link>                  
                          <DateWrapper>
                              {format(parseISO(date), 'MMMM do, uuu')}
                          </DateWrapper>
                          <CardSummary className="hidden sm:block">{summary}</CardSummary>
                      </RespBlock>  
                  </div>                        
              </BlogCardBorder>
          </Link>
      </div>  
      </>         
  );
}




