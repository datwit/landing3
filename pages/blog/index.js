import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import { useCallback, useRef, useState, Fragment, useEffect } from 'react'
import { getAllData } from '../../lib/posts'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { SectionSubheader, ContentWrapper } from '../../styles/global'
import { Pagination, SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, RespBlock, BlogTitle1, BlogTitle2, DateWrapper, Category } from '../../components/Blog/style'
import ReactPaginate from 'react-paginate';

import posts from '../../cache/data.json'

const Blog = () => {  
  const [query, setQuery] = useState('')  
  const [results, setResults] = useState([])

  //pagination states
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)
  
  //getting our data 
  const getData = () => {
      const data = posts    
      //slicing data   
      const slice = data.slice(offset, offset + perPage)      
        const postData = slice.map((item, key6) =>         
          <BlogCardWrapper key={key6}>
            <div className="hidden md:block">
                <BlogCardBorder>
                  <img className="lg:h-48 md:h-28 w-full object-cover object-center" src={item.img} alt="" />
                  <BlogCardBlock>
                    <div className="text-gray-600 text-xs">
                      {format(parseISO(item.date), 'MMMM do, uuu')}
                    </div>                                
                    <Link href={`/blog/${item.id}`}><BlogTitle1>{item.title}</BlogTitle1></Link>
                    <CardSummary>{item.summary}</CardSummary>
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
            </div>          
            <div className="md:hidden">                                    
              <BlogCardBorder className="mb-3">
                  <div className="flex">
                      <img src={item.img}  className="sm:w-1/4 w-1/2"  alt=""/>
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
            </div>        
            </BlogCardWrapper>
        )
      setData(postData)
      setPageCount(Math.ceil(data.length / perPage))
    

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

  return (
    //Posts listing template    
    <FullPage controls={CustomControls}>
      <Slide>
        <Section>
          <div className="container px-5 mx-auto">
            <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>

            {/* search box*/}
            <SearchWrapper>
              <input
                onChange={handleChange}                
                placeholder='Search posts'
                type='text'
                value={query}
                type="text"
                name="search"
                placeholder="Search here"
                className="w-1/2 rounded border border-gray-300 bg-white  text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
              />
              <Link href={query === "" ? `/blog/search?p=${query}`:`/blog/search?q=${query}`} ><svg className="h-6 w-6 text-gray-700 opacity-40" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></Link>
              
            </SearchWrapper>

            {/*pagination*/}
            <div className="App flex flex-wrap">
              {data}
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>          
          </div>
        </Section>
      </Slide>

      <Slide>
        <section className="w-full h-screen bg-primary mx-auto px-10">
          <Footer />
        </section>
      </Slide>
    </FullPage>
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
