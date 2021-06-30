import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { ContentWrapper, SectionHeader } from '../../styles/global'
import { ImageW, CardSummary, CardSummary2,BlogTitle2, DateWrapper, RespBlock, BlogTitle1, PaginationWrapper, PaginationSection, SearchCard } from '../../components/Blog/style'
import Link from "next/link"
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar' 
import { motion } from 'framer-motion'
import Head from 'next/head';
import DeviceDetect from "../../lib/deviceDetect";
import {useEffect, useState } from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import ReactPaginate from 'react-paginate'
import cases from '../../cache/cases.json'



const CasesResults = () => {
    const {isMobile} = DeviceDetect()  

    // * pagination states
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [ perPage, setPerPage ] = useState(10);
    const [pageCount, setPageCount] = useState(0)

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });    
    }

    useEffect(()=>{
        isMobile ? [] : document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "visible";
        };
    })

    const style={
        height:'calc(100% - 80px)',    
    } 

    const router = useRouter()
    const cat = router.query.p 
    const results = cat != null ? 
        cases.filter(post => post.tags.toLowerCase().includes(cat)) : []


    //getting our data 
    const getData = () => {
        const data = results
        const cant = window.innerHeight <= 640 && window.innerWidth <= window.innerHeight ? 
        4 : window.innerHeight >= 800 && window.innerWidth <= 765 ? 4 : 3
        
        setPerPage(cant)
        //slicing data   
        const slice = data.slice(offset, offset + cant)
        const postData = slice.map((item, key6) =>         
            <div className="mx-4 md:mx-0 mb-3" key={key6}>
                <SearchCard> 
                    <ImageW>
                        <img className="res"  src={item.img} alt="" />
                    </ImageW>                         
                  <RespBlock>
                    <DateWrapper>
                        {format(parseISO(item.date), 'MMMM do, uuu')}
                    </DateWrapper>
                      <Link href={`/studycases/${item.id}`}>
                        <BlogTitle1>{item.title}</BlogTitle1>
                      </Link>
                     {/*  <CardSummary2 className="hidden sm:block">{item.summary}</CardSummary2> */}
                  </RespBlock>
                </SearchCard>
            </div>         
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

    
    const nextSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
    const prevSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="11 17 6 12 11 7" />  <polyline points="18 17 13 12 18 7" /></svg>
    
    return (
        <> 
             <Head>
    <title>Datwit | Search results</title>  
    </Head>  
    <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
        { !isMobile ? 
        <FullPage controls={CustomControls}>
          <Slide {...style}>
            <Section classes={'w-full h-screen'}>
            <div className="px-5 mx-auto mt-20">
              {/* back button*/}
              <a onClick={()=>router.back()}>
                  <h3 className="flex cursor-pointer hover:text-secondary1">
                      <FiChevronLeft  className="h-6 w-6 mr-2"/>                                    
                      <span>Back</span>
                  </h3>
              </a>
            <SectionHeader>Search Results</SectionHeader>
              {/*pagination*/}
                <PaginationSection>
                  <div className="w-full">
                    {data}
                  </div>                 
                  { results ==0 ?
                      <div className="mx-auto">
                      <p>No results found 😢 </p>
                      </div>
                      :
                      pageCount >= 2 ?
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
                </PaginationSection>
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
            <Section classes={'min-h-screen'}>
              <div className="px-5 mx-auto mt-20">
               {/* back button*/}
                <a onClick={()=>router.back()}>
                    <h3 className="flex cursor-pointer hover:text-secondary1">
                        <FiChevronLeft  className="h-6 w-6 mr-2"/>                                    
                        <span>Back</span>
                    </h3>
                </a>
               {/* */}
              <SectionHeader>Search Results</SectionHeader>
                {/*pagination*/}
                  <PaginationSection>
                      {data}              
                    { results ==0 ?
                        <div className="mx-auto">
                        <p>No results found 😢 </p>
                        </div>
                        :
                        pageCount >= 2 ?
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
                  </PaginationSection>
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
export default CasesResults
