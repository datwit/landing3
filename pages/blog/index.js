import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import { useCallback, useRef, useState, Fragment } from 'react'
import { getAllData } from '../../lib/posts'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, ContentWrapper} from '../../styles/global'
import {SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, RespBlock,BlogTitle1, BlogTitle2, DateWrapper, Category} from '../../components/Blog/style'


import posts from '../../cache/data.json'

const Blog = () =>{
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [queryCat, setQueryCat] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (queryEnd, params) => `/api/search?q=${queryEnd}&p=${params}`

  const onClickCat = useCallback((event) => {
    const queryCat = event.target.id.toLowerCase(); 
    setQueryCat(queryCat) 
    console.log("cat:",queryCat)      
    if (queryCat.length) {
      fetch(searchEndpoint(queryCat, 'tags'))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
      } 
    else {
      setResults([])
    }
  }, [])

  const handleChange = useCallback((event) => {
    const query = event.target.value.toLowerCase();
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query, 'title'))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
       if(results == [''])(setQueryCat('')) //reset para la busqueda por categoria
      } 
    else {
      setResults([])
    }
  }, [])

  const handleFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
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
                      onFocus={handleFocus}
                      placeholder='Search posts'
                      type='text'
                      value={query}
                      type="text" 
                      name="search" 
                      placeholder="Search here" 
                      className="w-1/2 rounded border border-gray-300 bg-white  text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
                    />
                    <svg className="h-6 w-6 text-gray-700 opacity-40"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                </SearchWrapper>
            
            { results.length > 0 && (
                <div>
                  <ul>
                    {
                      results.map(({ id, title, summary, date, img },key1) => (
                      <li key={key1}>                        
                        <div className="mx-4 md:mx-0 mb-3">
                          <div className="flex">
                              <img src={img}  className="sm:w-1/5 w-1/2"  alt=""/>
                              <RespBlock>                                  
                                  <BlogTitle2>{title}</BlogTitle2>                                                    
                                  <DateWrapper>
                                      {format(parseISO(date), 'MMMM do, uuu')}
                                  </DateWrapper>
                                  <CardSummary className="hidden sm:block">{summary}</CardSummary>
                                </RespBlock>  
                          </div>                        
                        </div>
                      </li>
                    ))
                    }
                  </ul>
                </div>  
              )
            }   

            {results.length == 0 && (
                <div>
                  <div className="hidden md:block">
                    <ContentWrapper>                
                      {
                      posts.map((item, key2) => (
                          <Fragment  key={key2}>      
                            <BlogCardWrapper>                               
                                <BlogCardBorder>
                                    <img className="lg:h-48 md:h-28 w-full object-cover object-center" src={item.img} alt="" />              
                                    <BlogCardBlock>
                                        <div className="text-gray-600 text-xs">
                                            {format(parseISO(item.date), 'MMMM do, uuu')}
                                        </div>
                                        <div className="flex flex-wrap">
                                          { item.tags.map((tags, key3) => (
                                            <Category                                                
                                              key={key3}                                                
                                              id={tags}
                                              onClick={onClickCat}
                                              >{tags}
                                            </Category>
                                            ))
                                          }
                                        </div>
                                        
                                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
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
                            </BlogCardWrapper>
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
                          </Fragment>    
                      ))
                      }                           
                    </ContentWrapper>
                  </div>
                  <div className="md:hidden">
                      <ContentWrapper>                
                          {
                          posts.map((item, key4) => (
                            <div key={key4}>        
                                <BlogCardWrapper>                                    
                                    <BlogCardBorder>
                                        <img className="lg:h-48 md:h-28 w-full object-cover object-center" src={item.img} alt="" />              
                                        <BlogCardBlock>
                                            <div className="text-gray-600 text-xs">
                                                {format(parseISO(item.date), 'MMMM do, uuu')}
                                            </div>
                                            
                                            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
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
                                </BlogCardWrapper>
                                <div className="md:hidden">                                    
                                    <BlogCardBorder className="mb-3">
                                        <div className="flex">
                                            <img src={item.img}  className="sm:w-1/4 w-1/2"  alt=""/>
                                            <RespBlock>
                                                <Link href={`/blog/${item.slug}`}>
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
                            </div>  
                          ))
                          }                           
                      </ContentWrapper>
                  </div>
                </div>
              )}
                        
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
