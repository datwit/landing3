import React from 'react'
import PropTypes from 'prop-types';
import { useRouter } from "next/router"


const CustomControls = ({ slidesCount, scrollToSlide, onNext, onPrev, getCurrentSlideIndex, style, className }) => {

 
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
  CustomControls.defaultProps = {
    className: 'full-page-controls',
    style: {
      display: 'flex',
      flexFlow: 'column',
      position: 'fixed',
      top: '50%',
      transform: 'translateY(-50%)',
      paddingLeft: '20px',
      zIndex: 1
    },
  }

  const renderSlidesNumbers = (currentSlideIndex) => {

    const slidesNumbers = [];
    let tip = [];

    switch (pathname) {
      case '/':
        tip = [...tip, 'Top', 'Services', 'Study cases', 'Pricing', 'Bottom']
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

  // const handler = (event) => {
  //   switch (event.keyCode) {
  //     case 40:
  //       onNext()
  //       break;
  //     case 38:
  //       onPrev()
  //       break;

  //     default:
  //       break;
  //   }
  // }
  // window.addEventListener('keydown', handler)

  return (
    <div className={className} style={style}>
      {renderSlidesNumbers(getCurrentSlideIndex())}
    </div>

  );
}


export default CustomControls
