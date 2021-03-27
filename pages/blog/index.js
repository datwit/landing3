import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link";
import { getAllPosts } from './GetPosts';
import { format, parseISO } from 'date-fns';
import CustomControls from '../../components/Slide/CustomControls'



const Blog = ({ posts }) =>{
  return (
    //Posts listing template
    
      <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <div className="space-y-4">
              {posts.map((item) => (
                <BlogListItem key={item.slug} {...item} />
              ))}
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
export default Blog

//fetching data from markdown files
export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

//Extracting  visual component
const BlogListItem = ({ slug, title, date, content })=> {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}





