import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import { useCallback, useRef, useState } from 'react'
import { getAllData } from '../../lib/posts'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, ContentWrapper} from '../../styles/global'
import {SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, RespBlock,BlogTitle1, BlogTitle2, DateWrapper} from '../../components/Blog/style'
 
import posts from '../../cache/data.json' 

const Blog = () =>{
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
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
                      onChange={onChange}
                      onFocus={onFocus}
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
            
            { active && results.length > 0 && (               
                  <ul>                    
                    {
                      results.map((item) => (
                      <li key={item.id}>                        
                        <div className="mx-4 md:mx-0 mb-3">
                          <div className="flex">
                              <img src={item.img}  className="sm:w-1/5 w-1/2"  alt={item.title}/>
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
                        </div>
                      </li>
                    ))}
                  </ul>              
              )
            }   

            {results.length == 0 && (
                <div>
                  <div className="hidden md:block">
                    <ContentWrapper>                                   
                      {
                      posts.map((item) => (
                          <BlogListItem key={item.id} {...item} />
                         
                      ))
                      }                           
                    </ContentWrapper>
                  </div>
                  <div className="md:hidden">
                  <ContentWrapper>                
                      {
                      posts.map((item) => (
                          <BlogListItem key={item.id} {...item} />
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

//Extracting  visual component

const BlogListItem = ({id, img, summary, title, date})=> {
     
  return (
    <>        
      <BlogCardWrapper>
          <Link href={`/blog/${id}`}>
              <BlogCardBorder>
                  <img className="lg:h-48 md:h-28 w-full object-cover object-center" src={img} alt="" />              
                  <BlogCardBlock>
                      <div className="text-gray-600 text-xs">
                          {format(parseISO(date), 'MMMM do, uuu')}
                      </div>
                      {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                      <Link href={`/blog/${id}`}><BlogTitle1>{title}</BlogTitle1></Link> 
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
          <Link href={`/blog/${id}`}>
              <BlogCardBorder className="mb-3">
                  <div className="flex">
                      <img src={img}  className="sm:w-1/4 w-1/2"  alt=""/>
                      <RespBlock>
                          <Link href={`/blog/${id}`}>
                              <BlogTitle2>{posts.title}</BlogTitle2>
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




