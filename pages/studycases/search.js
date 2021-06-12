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
import { motion } from 'framer-motion'
import Head from 'next/head';
import DeviceDetect from "../../lib/deviceDetect";
import {useEffect} from 'react'
import {FiChevronLeft} from 'react-icons/fi'

import cases from '../../cache/cases.json'

const CasesResults = () => {
    const {isMobile} = DeviceDetect()

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

    return (
        <> 
            <Head>
            <title>Datwit | Search results</title>
            <link rel="icon" href="/favicon.ico" />
            </Head> 
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
            { !isMobile ? 
                <FullPage controls={CustomControls}>
                    <Slide {...style}>
                        <Section>
                            <div className="container px-5 mx-auto mt-20">
                                <Link href="/studycases/">
                                <h3 className="flex pt-10 pb-6 cursor-pointer hover:text-secondary1">
                                    <FiChevronLeft  className="h-6 w-6 mr-2"/>                                    
                                    <span>Back</span>
                                </h3>
                                </Link>
                                <SectionHeader>Search Results</SectionHeader>
                                <ContentWrapper>
                                    {
                                    results.length > 0
                                    ?   <div className="w-full">
                                            <ul>
                                            {
                                            results.map(({ title, summary, date, img, id }, key1) => (
                                                <li key={key1}>
                                                    <div className="mx-4 md:mx-0 mb-3">
                                                        <div className="flex">
                                                            <img src={img} className="sm:w-1/6 w-1/2" alt="" />
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
                                    :   <div className="mx-auto">
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
            :
            <>
                <Navbar scrollToSlide={ scrollToTop }/>
        
                <Slide {...style}>
                    <Section Section classes={'min-h-screen'}>
                        <div className="container px-5 mx-auto mt-20">
                            <Link href="/studycases/">
                                <h3 className="flex pt-10 pb-6 cursor-pointer hover:text-secondary1">
                                    <FiChevronLeft  className="h-6 w-6 mr-2"/>                                    
                                    <span>Back</span>
                                </h3>
                            </Link>
                            <SectionHeader>Search Results</SectionHeader>
                            <ContentWrapper>
                                {
                                results.length > 0
                                ?   <div className="w-full">
                                        <ul>
                                        {
                                        results.map(({ title, summary, date, img, id }, key1) => (
                                            <li key={key1}>
                                                <div className="mx-4 md:mx-0 mb-3">
                                                    <div className="flex">
                                                        <img src={img} className="sm:w-1/6 w-1/2" alt="" />
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
                                :   <div className="mx-auto">
                                        <p>No results found 😢 </p>
                                    </div>
                                }
                            </ContentWrapper>
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
