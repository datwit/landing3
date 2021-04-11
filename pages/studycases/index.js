import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link"
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import {SectionSubheader, ContentWrapper, SectionHeader} from '../../styles/global'
import {BlogCardWrapper, BlogCardBorder,BlogCardBlock, BlogTitle1, BlogTitle2, CardSummary, RespBlock, DateWrapper} from '../../components/Blog/style'
import { getAllData } from '../../lib/posts'
import {CategoryRect, CategoryTitle} from '../../components/Home/StudyCases/style'
import Navbar from '../../components/Navbar'

import cases from '../../cache/cases.json'

const AllStudyCases = () =>{
  const style={
    height:'calc(100% - 80px)',    
  } 

  return (
    //Posts listing template       
    <FullPage controls={CustomControls}>
        <Slide {...style}>
            <Navbar />
            <Section>
            <div className="container px-5 mx-auto"> 
                <SectionHeader>Check out our solutions</SectionHeader>
                <SectionSubheader>Commitment and creativity mark our creations. By all means, stroll along...</SectionSubheader>
                <div className="hidden md:block">
                    <ContentWrapper>                
                      {
                        cases.map((item) => (
                          <StudyCasesListing key={item.id} {...item} />
                      ))
                      }                           
                    </ContentWrapper>
                </div>
                <div className="md:hidden">
                    <ContentWrapper>                
                      {
                        cases.map((item) => (
                          <StudyCasesListing key={item.id} {...item} />
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

//Extracting  visual component
const StudyCasesListing = ({id,title,summary,date,tags})=> {
  
  return (
      <>                     
        <BlogCardWrapper>
            <Link href={`/studycases/${id}`}>
                <BlogCardBorder>
                    <img className="lg:h-48 md:h-28 w-full object-cover object-center" src="/images/dummy-image.png" alt="" />  
                    <CategoryRect>
                        <Link href={`/studycases/search?p=${tags.toLowerCase()}`}>
                            <CategoryTitle>{tags}</CategoryTitle>
                        </Link>
                    </CategoryRect>            
                    <BlogCardBlock>                         
                        <Link href={`/studycases/${id}`}><BlogTitle1>{title}</BlogTitle1></Link> 
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
          <Link href={`/studycases/${id}`}>
              <BlogCardBorder className="mb-3">
                  <div className="flex">
                      <img src="/images/dummy-image.png"  className="sm:w-1/4 w-1/2"  alt=""/>
                      <RespBlock>
                          <Link href={`/studycases/${id}`}>
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

