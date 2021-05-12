import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { ContentWrapper, SectionHeader} from '../../styles/global'
import { CardSummary,BlogTitle2, DateWrapper, RespBlock} from '../../components/Blog/style'
import Link from "next/link"
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import Head from 'next/head';

import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { BlogTitle1, PaginationWrapper } from '../../components/Blog/style'



import posts from '../../cache/posts.json'
    posts.map(post => (
      post.Stringtags='',
      post.tags.map(tag =>( 
        post.Stringtags = post.Stringtags + tag.toString()
      ))
    ))


const BlogResults = () => {
  const style={
    height:'calc(100% - 80px)',    
  }  


  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [ perPage, setPerPage ] = useState(10);
  const [pageCount, setPageCount] = useState(0)

  const router = useRouter()
  const cat = router.query.p  
  const que = router.query.q
  const results = cat != null ? 
    posts.filter(post => post.Stringtags.toLowerCase().includes(cat)) : 
    
    posts.filter(post => (post.title.toLowerCase().includes(que) 
    | post.author.toLowerCase().includes(que)
    | post.summary.toLowerCase().includes(que)
    | post.Stringtags.toLowerCase().includes(que)
      )
    )

  //getting our data 
  const getData = () => {
    const data = results
    const cant = window.innerHeight <= 640 && window.innerWidth <= window.innerHeight ? 
       4 : window.innerHeight >= 800 && window.innerWidth <= 765 ? 4 : 3
    
    setPerPage(cant)
    //slicing data   
    const slice = data.slice(offset, offset + cant)
    const postData = slice.map((item, key6) =>
      <div className="w-full" key={key6}>
        <div className="mx-4 md:mx-0 mb-3">
            <div className="flex">
              <Link href={`/blog/${item.id}`}><img className="sm:w-1/6 w-1/2" src={item.img} alt="" /></Link>         
              <RespBlock>
                <DateWrapper>
                    {format(parseISO(item.date), 'MMMM do, uuu')}
                </DateWrapper>
                  <Link href={`/blog/${item.id}`}><BlogTitle1>{item.title}</BlogTitle1></Link>
                  <CardSummary className="hidden sm:block">{item.summary}</CardSummary>
              </RespBlock>
            </div>
        </div>
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
    <link rel="icon" href="/favicon.ico" />
    </Head>  
    <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}> 
        <FullPage controls={CustomControls}>
          <Slide {...style}>
            <Section>
            <div className="container px-5 mx-auto relative transform mt-20">
            <SectionHeader>Search Results</SectionHeader>
              {/*pagination*/}
                <div className="flex flex-wrap">
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
    </motion.div>
  </>  
  );
}
export default BlogResults

