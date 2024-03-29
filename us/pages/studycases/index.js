import { FullPage, Slide } from 'react-full-page'
import {Section} from 'components/Section'
import {Footer} from 'components/Footer'
import Link from "next/link"
import {CustomControls} from 'components/Slide/CustomControls'
import {SectionSubheader, SectionHeader} from 'styles/global'
import {PaginationWrapper, BlogCardWrapper, BlogCardBorder,BlogCardBlock, BlogTitle1, BlogTitle2, CardSummary, RespBlock, DateWrapper} from 'components/Blog/style'
import { getAllData } from 'lib/posts'
import {CategoryRect, CategoryTitle, TagsRect} from 'components/Home/StudyCases/style'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import Head from 'next/head'
import {Navbar} from 'components/Navbar'
import DeviceDetect from "lib/deviceDetect"
import { FiBookmark } from "react-icons/fi"

import cases from 'cache/cases.json'

const AllStudyCases = () =>{
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

    //pagination states
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(3);
    const [pageCount, setPageCount] = useState(0)

    const getData = () => {
        const data = cases

        //slicing data
        const slice = data.slice(offset, offset + perPage)
        const casesData = slice.map((item, key8 )=>
            <BlogCardWrapper key={key8}>
                    <BlogCardBorder>
                        <img className="object-cover object-center res-img" src={item.img} alt="" />
                        <BlogCardBlock>
                            <div>
                            <Link href={`/studycases/search?p=${item.category}`}>
                                <CategoryRect>
                                    {item.category}
                                    <FiBookmark />
                                </CategoryRect>
                            </Link>
                            <p className="text-sm text-gray-500 m-0 text-left pt-1">{` ―  ${item.reading} min read`}</p>
                            </div>
                            <div>
                                <Link href={`/studycases/${item.id}`}><BlogTitle1>{item.title}</BlogTitle1></Link>
                                <CardSummary>{item.summary}</CardSummary>
                            </div>
                            <div className='flex'>
                                {
                                    item.tags.map((tag) => (
                                        <Link href={`/studycases/search?p=${tag.toLowerCase()}`}>
                                            <TagsRect>{tag}
                                            </TagsRect>
                                        </Link>
                                    ))
                                }
                            </div>
                        </BlogCardBlock>
                    </BlogCardBorder>
            </BlogCardWrapper>
        )
        setData(casesData)
        setPageCount(Math.ceil(data.length / perPage))
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
            <title>Datwit | Our Work</title>
            </Head>
            <motion.div initial={{opacity:0,  y: 200}} animate={{opacity:1, y:0}}>
            { 
            !isMobile 
            ?
            <FullPage controls={CustomControls}>
                <Slide>
                    <Section classes={'w-full h-screen'}>
                        <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
                            <SectionHeader>Feel free to explore our solutions</SectionHeader>
                            <SectionSubheader> Commitment and creativity mark our work. Come and walk with us!</SectionSubheader>
                            {/*pagination*/}
                            <div className="flex flex-wrap">
                                {data}
                            </div>
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
                <Slide>
                    <Section classes={'min-h-screen'}>
                        <div className="px-5 mx-auto pb-16 mt-20">
                            <SectionHeader>Check out our solutions</SectionHeader>
                            <SectionSubheader>Commitment and creativity mark our creations. Come and walk with us!...</SectionSubheader>
                            {/*pagination*/}
                            <div className="flex flex-wrap">
                                {data}
                            </div>
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


