import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import Footer from '../../components/Footer'
import Link from "next/link";
import fs from "fs";

const Blog = ({slugs}) => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
          <div>
          slugs:
          {slugs.map(slug => {
            return (
              <div key={slug}>
                <Link href={"/blog/" + slug}>
                  <a>{"/blog/" + slug}</a>
                </Link>
              </div>
            );
          })}
          </div>           
          </Section>        
        </Slide>       

        <Slide>
          <section className= "w-full h-screen bg-primary mx-auto px-10">
            <Footer />
          </section>                  
        </Slide>
        </FullPage>
    )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};





export default Blog
