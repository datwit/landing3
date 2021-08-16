import { FullPage, Slide } from 'react-full-page'
import { Section } from 'components/Section'
import { Footer } from 'components/Footer'
import Link from "next/link"
import React, { useCallback, useState, useEffect } from 'react'
import { getAllData } from 'lib/posts'
import { format, parseISO } from 'date-fns'
import { CustomControls } from 'components/Slide/CustomControls'
import { SectionSubheader } from 'styles/global'
import { PaginationWrapper, SearchWrapper, BlogCardWrapper, BlogCardBlock, CardSummary, BlogCardBorder, BlogTitle1, SearchField } from '../../components/Blog/style'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Head from 'next/head'
import DeviceDetect from "lib/deviceDetect"
import { Navbar } from 'components/Navbar'
import { CategoryRect } from 'components/Home/StudyCases/style'


import posts from 'cache/posts.json'

const Blog = () => {
    const { isMobile } = DeviceDetect()

    function scrollToTop() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }
    /*****hiding scroll bar*/
    useEffect(() => {
        isMobile ? [] : document.body.style.overflow = "hidden";
        return () => {
        document.body.style.overflow = "visible";
        };
    })

    const [query, setQuery] = useState('')

    //pagination states
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(3);
    const [pageCount, setPageCount] = useState(0)

    const router = useRouter()

    //custom hook to trigger search pressing enter
    const useKeyPress = (targetKey) => {
        const [keyPressed, setKeyPressed] = useState(false);
        function downHandler({ key }) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }
        useEffect(() => {
            window.addEventListener("keydown", downHandler);
                return () => {
                    window.removeEventListener("keydown", downHandler);

                };
        }, []); 
        return keyPressed;
    }
    //calling hook passing the key
    const pressEnter = useKeyPress("Enter");

    //redirecting using router
    const searchRedirect = () => {
        router.push(`/blog/search?q=${query.toLowerCase()}`)
    }

    //getting our data
    const getData = () => {
        const data = posts

    //slicing data
    const slice = data.slice(offset, offset + perPage)
    const postData = slice.map((item, key7) =>
        <BlogCardWrapper key={key7}>
            <BlogCardBorder>
                <img className="object-cover object-center cursor-pointer res-img" src={item.img} alt="" />
                <BlogCardBlock>
                    <div className="flex flex-wrap">
                    {
                        React.Children.toArray(
                            item.tags.map(tags => (                        
                                <Link href={`/blog/search?p=${tags.toLowerCase()}`}>
                                    <CategoryRect>{tags}</CategoryRect>
                                </Link>                        
                            ))
                        )
                    }
                    </div>
                    <div className="text-gray-600 text-xs pt-1">
                    {format(parseISO(item.date), 'MMMM do, uuu')}
                    </div>
                    <Link href={`/blog/${item.id}`}>
                        <BlogTitle1>{item.title}</BlogTitle1>
                    </Link>
                    <CardSummary>{item.summary}</CardSummary>
                </BlogCardBlock>
            </BlogCardBorder>
        </BlogCardWrapper>
    )
    setData(postData)
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

    //event on search box
    const handleChange = useCallback((event) => {
        const query = event.target.value.toLowerCase();
        setQuery(query)
    }, [])

    const nextSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
    const prevSVG = <svg className="h-8 w-8 text-secondary2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="11 17 6 12 11 7" />  <polyline points="18 17 13 12 18 7" /></svg>

    return (
        <>
            <Head>
                <title>Datwit | Blog</title>
            </Head>
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}>
                {
                !isMobile 
                ?
                <FullPage controls={CustomControls}>
                    <Slide>
                        <Section classes={'w-full h-screen'}>
                            <div className="container px-5 mx-auto relative top-2/4 transform -translate-y-2/4">
                            <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>
                            {pressEnter && searchRedirect()}
                            {/* search box*/}
                            <SearchWrapper>
                                <SearchField
                                onChange={handleChange}
                                placeholder='Search posts'
                                type='text'
                                value={query}
                                type="text"
                                name="search"
                                placeholder="Search here">
                                </SearchField>
                                <Link href={`/blog/search?q=${query}`}><svg className="h-6 w-6 text-gray-300 absolute right-1 hover:text-secondary1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></Link>
                            </SearchWrapper>

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
                    <Navbar scrollToSlide={scrollToTop} />
                    <Slide>
                        <Section classes={'min-h-screen'}>
                            <div className="px-5 mx-auto pb-16 mt-20">
                                <SectionSubheader>Discover interesting ideas and unique perspectives from our amazing crew</SectionSubheader>
                                {pressEnter && searchRedirect()}
                                {/* search box*/}
                                <SearchWrapper>
                                    <SearchField
                                    onChange={handleChange}
                                    placeholder='Search posts'
                                    type='text'
                                    value={query}
                                    type="text"
                                    name="search"
                                    placeholder="Search here">
                                    </SearchField>
                                    <Link href={`/blog/search?q=${query}`}><svg className="h-6 w-6 text-gray-300 absolute right-1 hover:text-secondary1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></Link>
                                </SearchWrapper>
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

