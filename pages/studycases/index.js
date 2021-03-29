import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link";
import { format, parseISO } from 'date-fns';
import CustomControls from '../../components/Slide/CustomControls'
import { getAllCases } from './GetCases';
import {SectionSubheader, ContentWrapper, SectionHeader} from '../../styles/global'
import {BlogCardWrapper, BlogCardBorder,BlogCardBlock, BlogTitle1, CardSummary} from '../../components/Blog/style'


const AllStudyCases = ({ stc }) =>{
  return (
    //Posts listing template   
    
    <FullPage controls={CustomControls}>
        <Slide>
            <Section>
            <div className="container px-5 mx-auto"> 
                <SectionHeader>Check out our solutions</SectionHeader>
                <SectionSubheader>Commitment and creativity mark our creations. BBy all means, stroll along...</SectionSubheader>
                <ContentWrapper>                
                  {
                  stc.map((item) => (
                      <StudyCasesListing key={item.slug} {...item} />
                  ))
                  }                           
              </ContentWrapper>
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
  const allCases = getAllCases();  
  return {
    props: {
      stc: allCases.map(({ data, slug }) => ({
        ...data,
        date: data.date.toISOString(),        
        slug,
      })),
    },
  };  
}

//Extracting  visual component
const StudyCasesListing = ({ slug, title, date, summary })=> {
  
  return (
      <>                     
        <BlogCardWrapper>
            <Link href={`/studycases/${slug}`}>
                <BlogCardBorder>
                    <img className="lg:h-48 md:h-28 w-full object-cover object-center" src="/images/dummy-image.png" alt="" />              
                    <BlogCardBlock>                      
                        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                        <Link href={`/studycases/${slug}`}><BlogTitle1>{title}</BlogTitle1></Link> 
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
      </>         
  );
}

