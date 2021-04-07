import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { ContentWrapper, SectionHeader} from '../../styles/global'
import { CardSummary,BlogTitle2, DateWrapper, RespBlock} from '../../components/Blog/style'
import Link from "next/link"


import posts from '../../cache/posts.json'
    posts.map(post => (
      post.Stringtags='',
      post.tags.map(tag =>( 
        post.Stringtags = post.Stringtags + tag.toString()
      ))
    ))

export const getServerSideProps = async(context) => {
  const cat = context.query.p  
  const que = context.query.q
  const results = cat != null ? 
    posts.filter(post => post.Stringtags.toLowerCase().includes(cat)) : 
    
    posts.filter(post => (post.title.toLowerCase().includes(que) 
    | post.author.toLowerCase().includes(que)
    | post.summary.toLowerCase().includes(que)
    | post.Stringtags.toLowerCase().includes(que)
      )
    )
  return { props: {results} };
}

const BlogResults = (data) => {
 
return (

<FullPage controls={CustomControls}>
  <Slide>
    <Section>
    <div className="container px-5 mx-auto">        
      <SectionHeader>Search Results</SectionHeader>
      <ContentWrapper>     
      { 
        data.results.length > 0 
        ? <div>
              <ul>
                {
                  data.results.map(({title, summary, date, img, id },key1) => (
                  <li key={key1}>                        
                    <div className="mx-4 md:mx-0 mb-3">
                      <div className="flex">
                          <img src={img}  className="sm:w-1/5 w-1/2"  alt=""/>
                            <RespBlock>                                  
                              <Link href={`/blog/${id}`}><BlogTitle2>{title}</BlogTitle2></Link>                                                  
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
        : <div className="mx-auto">
          <p>No results found 😢 </p>
         </div>
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
export default BlogResults

