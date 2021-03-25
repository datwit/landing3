import CustomControls from '../../components/Slide/CustomControls'
import { FullPage, Slide } from 'react-full-page'
import Section from '../../components/Section'
import BlogList from '../../components/Blog'
import Footer from '../../components/Footer'

const Blog = () => {
    return (
        <FullPage controls={CustomControls}>
        <Slide>
          <Section>
            <BlogList />
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

export default Blog
