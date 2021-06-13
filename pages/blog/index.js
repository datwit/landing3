import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import { useCallback, useState, useEffect } from 'react'
import { getAllData } from '../../lib/posts'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { SectionSubheader } from '../../styles/global'
import { Category, PaginationWrapper, SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, RespBlock, BlogTitle1, BlogTitle2, DateWrapper, SearchField } from '../../components/Blog/style'
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head';
import uuid from 'react-uuid'
import DeviceDetect from "../../lib/deviceDetect";
import Navbar from '../../components/Navbar'


import posts from '../../cache/posts.json'

const Blog = () => {
  const {isMobile} = DeviceDetect()

  const style={
    height:'calc(100% - 80px)',    
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  /*****hiding scroll bar*/
  useEffect(()=>{
    isMobile ? [] : document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  })

  const [query, setQuery] = useState('') 

  //pagination states
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)

  const router = useRouter()  

  //custom hook to trigger search pressing enter
  const useKeyPress=(targetKey)=> {   
    const [keyPressed, setKeyPressed] = useState(false);   
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }    
    useEffect(() => {
      window.addEventListener("keydown", downHandler);     
      return () => {
        window.removeEventListener("keydown", downHandler);
       
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
  }
  //calling hook passing the key
  const pressEnter = useKeyPress("Enter");

  //redirecting using router
  const searchRedirect=()=>{
    router.push(`/blog/search?q=${query.toLowerCase()}`)
  }


  //getting our data 
  const getData = () => {
    const data = posts
    const cant = window.innerHeight <= 600 && window.innerWidth <= window.innerHeight ? 
       2 : window.innerHeight >= 800 && window.innerWidth <= 765 ? 4 : 3

    setPerPage(cant)    
    //slicing data   
    const slice = data.slice(offset, offset + cant)
    const postData = slice.map(item =>
      <BlogCardWrapper key={uuid()}>        
          <BlogCardBorder>
          <Link href={`/blog/${item.id}`}><img className="lg:h-48 md:h-28 md:w-full object-cover object-center cursor-pointer res-img" src={item.img} alt="" /></Link>         
            <BlogCardBlock>
              <div className="flex flex-wrap">
                {
                  item.tags.map(tags => (
                    <div key={uuid()}>
                      <Link href={`/blog/search?p=${tags.toLowerCase()}`}>
                        <Category>{tags}</Category>
                      </Link>
                    </div>
                  ))
                }
              </div>
              <div className="text-gray-600 text-xs">
                {format(parseISO(item.date), 'MMMM do, uuu')}
              </div>
              <Link href={`/blog/${item.id}`}><BlogTitle1>{item.title}</BlogTitle1></Link>
              <CardSummary>{item.summary}</CardSummary>              
            </BlogCardBlock>
          </BlogCardBorder>        
        {/* <div className="md:hidden">
          <BlogCardBorder className="mb-3">
            <div className="flex">
              <img src={item.img} className="sm:w-1/4 w-1/2" alt="" />
              <RespBlock>
                <Link href={`/blog/${item.id}`}>
                  <BlogTitle2>{item.title}</BlogTitle2>
                </Link>
                <DateWrapper>
                  {format(parseISO(item.date), 'MMMM do, uuu')}
                </DateWrapper>
                <CardSummary className="hidden sm:block">{item.summary}</CardSummary>
              </RespBlock>
            </div>
          </BlogCardBorder>
        </div> */}
      </BlogCardWrapper>
    )
    setData(postData)
    setPageCount(Math.ceil(data.length / cant))


  }
  //callingData
  useEffect(() => {
    getData()
  }, [offset])

  //clicking from page to page
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage)
  };

  //event on search box
  const handleChange = useCallback((event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query)
  }, [])
  
  const nextSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
  const prevSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="11 17 6 12 11 7" />  <polyline points="18 17 13 12 18 7" /></svg>
  
  return (
    <>
        <Head>
        <title>Datwit | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        </Head> 
        <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
          { !isMobile ?       
            <FullPage controls={CustomControls}>
              <Slide {...style}>
                <Section classes={'w-full h-screen'}>
                <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
                      <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>        
                      {pressEnter && searchRedirect()}
                      {/* search box*/}
                      <SearchWrapper>
                        <SearchField
                          onChange={handleChange}
                          placeholder='Search posts'
                          type='text'
                          value={query}
                          type="text"
                          name="search"
                          placeholder="Search here">
                        </SearchField>
                        <Link href={`/blog/search?q=${query}`}><svg className="h-6 w-6 text-secondary2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></Link>
                      </SearchWrapper>

                    {/*pagination*/}
                    <div className="flex flex-wrap pb-20 relative">                      
                        {data}                                            
                      {
                      pageCount >= 2 
                        ?
                        <PaginationWrapper>
                          <ReactPaginate
                            previousLabel={prevSVG}
                            nextLabel={nextSVG}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            />
                          </PaginationWrapper>
                          :
                          [] 
                        }          
                      </div>
                  </div>
                </Section>
              </Slide>

              <Slide>
                <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                  <Footer />
                </Section>
              </Slide>
            </FullPage>
            :
            <>
              <Navbar scrollToSlide={ scrollToTop }/>
              <Slide {...style}>
                <Section classes={'pb-16 pt-20'}>
                <div className="px-5 mx-auto">
                      <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>        
                      {pressEnter && searchRedirect()}
                      {/* search box*/}
                      <SearchWrapper>
                        <SearchField
                          onChange={handleChange}
                          placeholder='Search posts'
                          type='text'
                          value={query}
                          type="text"
                          name="search"
                          placeholder="Search here">
                        </SearchField>
                        <Link href={`/blog/search?q=${query}`}><svg className="h-6 w-6 text-secondary2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></Link>
                      </SearchWrapper>

                    {/*pagination*/}
                    <div className="flex flex-wrap">
                      {data}
                      {
                      pageCount >= 2 
                        ?
                        <PaginationWrapper>
                          <ReactPaginate
                            previousLabel={prevSVG}
                            nextLabel={nextSVG}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                            />
                          </PaginationWrapper>
                          :
                          [] 
                        }          
                      </div>
                  </div>
                </Section>
              </Slide>

              <Slide>
                <Section classes={"w-full h-screen bg-primary mx-auto px-10"}>
                  <Footer />
                </Section>
              </Slide>
            </>          
          }  
        </motion.div>
    </>
  );
}
export default Blog

//fetching data from markdown files
export const getStaticProps = async () => {
  const allPosts = getAllData('posts');
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

