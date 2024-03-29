import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { useRouter } from "next/router"
import {Navbar} from '../Navbar'
import {NavigationWrapper} from './style'



const CustomControls = ({ slidesCount, scrollToSlide, onNext, onPrev, getCurrentSlideIndex}) => {
 
    const {pathname} = useRouter()  

    CustomControls.propTypes = {
        className: PropTypes.string,
        getCurrentSlideIndex: PropTypes.func.isRequired,
        onNext: PropTypes.func.isRequired,
        onPrev: PropTypes.func.isRequired,
        scrollToSlide: PropTypes.func.isRequired,
        slidesCount: PropTypes.number.isRequired,
        style: PropTypes.object,
    }

    const className = 'flex flex-col fixed top-2/4 transform -translate-y-2/4 pl-5 z-10 invisible md:visible'
    
    const renderSlidesNumbers = (currentSlideIndex) => {

        const slidesNumbers = [];
        let tip = [];

        switch (pathname) {
            case '/':
              tip = [...tip, 'Top', 'Services','Services','Services','Our Work', 'Membership', 'Bottom']
              break
            case '/studycases':
              tip = [...tip, 'Our Work', 'Bottom']
              break
            case '/pricing':
              tip = [...tip, 'Data Solutions', 'ML Solutions','Web Solutions','Bottom']
              break
            case '/about':
              tip = [...tip, 'About Datwit', 'Team', 'Collaborators', 'Bottom']
              break
            case '/contact':
              tip = [...tip, 'Contact us', 'Bottom']
              break
            case '/blog':
              tip = [...tip, 'Blogs', 'Bottom']
              break
            case '/partner':
              tip = [...tip, 'Why hire us','Datwit believes in','Partnership pricing','Bottom']
              break
            case '/team':
            tip = [...tip, 'Technologies','Benefits', 'Bottom']
            break
            case '/studycases/search':
            tip = [...tip, 'Category filter', 'Bottom']
            break
            case '/blog/search':
            tip = [...tip, 'Results', 'Bottom']
            break
            case '/faqs':
              tip = [...tip, 'Choosing FAQs', 'Bottom']
              break
            default:
              break;
      }   

      for (let i = 0; i < slidesCount; i++) {
          const buttonProps = {
              //disabled: currentSlideIndex === i,
              key: i,
              name: `Go to slide ${i}`,
              id: `control${i}`,
              onClick: () => scrollToSlide(i),
              className: `has-tooltip ${currentSlideIndex === i && "disabled"}`
          };
          const toolProps = {
              className: "tooltip shadow-lg ml-5 bg-bggray text-primary px-3 py-2"
          }
          slidesNumbers.push(<div {...buttonProps}><span {...toolProps}>{tip[i]}</span></div>);
      }
      return slidesNumbers;
    }

    useEffect(() => {
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const handler = (event) => {
      
        switch (event.keyCode) {
            case 40:
              onNext()
              break;
            case 38:
              onPrev()
              break;

            default:
              break;
        }
    }

    return (
        <>      
            <Navbar scrollToSlide={ scrollToSlide }/> 

            <NavigationWrapper className={className}>
              {renderSlidesNumbers(getCurrentSlideIndex())}           
            </NavigationWrapper>    
        </>         
    );
}


export {CustomControls}
