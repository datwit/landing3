import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, SectionHeader} from '../../styles/global'
import {PaginationWrapper, BlogCardWrapper, BlogCardBorder,BlogCardBlock, BlogTitle1, BlogTitle2, CardSummary, RespBlock, DateWrapper} from '../../components/Blog/style'
import { getAllData } from '../../lib/posts'
import {CategoryRect, CategoryTitle} from '../../components/Home/StudyCases/style'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Head from 'next/head';
import uuid from 'react-uuid'
import Navbar from '../../components/Navbar'
import DeviceDetect from "../../lib/deviceDetect";

import cases from '../../cache/cases.json'

const AllStudyCases = () =>{
  const {isMobile} = DeviceDetect()

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const style={
    height:'calc(100% - 80px)',    
  } 

  useEffect(()=>{
    isMobile ? [] : document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  })

  //pagination states
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)

  const getData = () => {
    const data = cases
    const cant = window.innerHeight <= 600 && window.innerWidth <= window.innerHeight ? 
       2 : window.innerHeight >= 800 && window.innerWidth <= window.innerHeight ? 4 : 3
    setPerPage(cant)
    
    //slicing data   
    const slice = data.slice(offset, offset + cant)
    const casesData = slice.map(item =>           
      <BlogCardWrapper key={uuid()}>
                           
              <BlogCardBorder>
                  <img className="lg:h-48 md:h-28 md:w-full object-cover object-center" src="/images/dummy-image.png" alt="" />  
                  <CategoryRect>
                      <Link href={`/studycases/search?p=${item.tags.toLowerCase()}`}>
                          <CategoryTitle>{item.tags}</CategoryTitle>
                      </Link>
                  </CategoryRect>            
                  <BlogCardBlock>                         
                      <Link href={`/studycases/${item.id}`}><BlogTitle1>{item.title}</BlogTitle1></Link> 
                      <CardSummary>{item.summary}</CardSummary>                      
                  </BlogCardBlock>
              </BlogCardBorder>                 
         
            {/* <div className="md:hidden">                 
                  <BlogCardBorder>
                      <div className="flex">                        
                          <img src="/images/dummy-image.png"  className="sm:w-1/4 w-1/2"  alt=""/>
                          <div className="w-full">
                              <CategoryRect>
                                  <Link href={`/studycases/search?p=${item.tags.toLowerCase()}`}>
                                      <CategoryTitle>{item.tags}</CategoryTitle>
                                  </Link>
                              </CategoryRect>
                              <div className="p-2">
                                  <Link href={`/studycases/${item.id}`}>
                                      <BlogTitle2>{item.title}</BlogTitle2>
                                  </Link>                                                              
                              </div>                                
                          </div>  
                      </div>                        
                  </BlogCardBorder>                                 
            </div> */}
      </BlogCardWrapper>          

)
setData(casesData)
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

const nextSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
const prevSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="11 17 6 12 11 7" />  <polyline points="18 17 13 12 18 7" /></svg>
  
return (
    <> 
      <Head>
      <title>Datwit | Study Cases</title>
      <link rel="icon" href="/favicon.ico" />
      </Head> 
      <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>  
      { !isMobile ?         
          <FullPage controls={CustomControls}>
              <Slide {...style}>
                  <Section classes={'w-full h-screen'}>
                  <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4"> 
                      <SectionHeader>Check out our solutions</SectionHeader>
                      <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
                      {/*pagination*/}
                      <div className="flex flex-wrap relative pb-20">
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
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
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
                <Section classes={'pb-16'}>
                <div className="px-5 mx-auto mt-20"> 
                    <SectionHeader>Check out our solutions</SectionHeader>
                    <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
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
                              marginPagesDisplayed={3}
                              pageRangeDisplayed={3}
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
export default AllStudyCases

//fetching data from markdown files
export const getStaticProps = async () => {  
  const allCases = getAllData('studycases');  
  return {
    props: {
      studycases: allCases.map(({ data, slug }) => ({
        ...data,
        date: data.date.toISOString(),        
        slug,
      })),
    },
  };  
}


