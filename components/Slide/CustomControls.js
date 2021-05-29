import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import { useRouter } from "next/router"
import Navbar from '../Navbar'



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
        tip = [...tip, 'Top', 'Services', 'Study Cases', 'Pricing' , 'Membership', 'Bottom']
        break
      case '/studycases':
        tip = [...tip, 'Study Cases', 'Bottom']
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
        tip = [...tip, 'Find partnership','Partnership pricing','FAQs', 'Bottom']
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
      default:
        break;
    }   

    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        key: i,
        id: "control",
        onClick: () => scrollToSlide(i),
        className: 'has-tooltip'
      };
      const toolProps = {
        className: "tooltip shadow-lg ml-5 bg-bggray text-primary px-3 py-2"
      }
      slidesNumbers.push(<button {...buttonProps}><span {...toolProps}>{tip[i]}</span></button>);
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
          <div className="flex items-center flex-wrap h-20 w-full fixed top-0 bg-fixed bg-white z-10" id='navbar'>              
            <Navbar scrollToSlide={ scrollToSlide }/> 
          </div> 

          <div className={className}>
            {renderSlidesNumbers(getCurrentSlideIndex())}
          </div>    
        </>
       
        
  );
}


export default CustomControls
