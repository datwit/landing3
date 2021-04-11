import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import { format, parseISO } from 'date-fns'
import CustomControls from '../../components/Slide/CustomControls'
import { ContentWrapper, SectionHeader } from '../../styles/global'
import { CardSummary, BlogTitle2, DateWrapper, RespBlock } from '../../components/Blog/style'
import Link from "next/link"
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar' 

import cases from '../../cache/cases.json'

const CasesResults = () => {
    const style={
        height:'calc(100% - 80px)',    
    } 

    const router = useRouter()
    const cat = router.query.p 
    const results = cat != null ? 
        cases.filter(post => post.tags.toLowerCase().includes(cat)) : []

    return (
        <FullPage controls={CustomControls}>
            <Slide {...style}>
                <Navbar />
                <Section>
                    <div className="container px-5 mx-auto">
                        <SectionHeader>Search Results</SectionHeader>
                        <ContentWrapper>
                            {
                                results.length > 0
                                    ? <div>
                                        <ul>
                                            {
                                                results.map(({ title, summary, date, img, id }, key1) => (
                                                    <li key={key1}>
                                                        <div className="mx-4 md:mx-0 mb-3">
                                                            <div className="flex">
                                                                <img src={img} className="sm:w-1/5 w-1/2" alt="" />
                                                                <RespBlock>
                                                                    <Link href={`/studycases/${id}`}><BlogTitle2>{title}</BlogTitle2></Link>
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
                <section className="w-full h-screen bg-primary mx-auto px-10">
                    <Footer />
                </section>
            </Slide>
        </FullPage>

    );
}
export default CasesResults
