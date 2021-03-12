import React from 'react'
import PropTypes from 'prop-types';


class CustomControls extends React.Component {

 
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  }
  static defaultProps = {
    className: 'full-page-controls',
    style: {          
      display:'flex',
      flexFlow: 'column',
      position: 'fixed',
      top: '50%',
      transform: 'translateY(-50%)',
      paddingLeft: '20px',
      zIndex: 1
    },
  } 
     
  renderSlidesNumbers(currentSlideIndex) {

    const { slidesCount, scrollToSlide } = this.props;   
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        key: i,
        id: "control",        
        onClick: () => scrollToSlide(i),      
                            
      };               
      slidesNumbers.push(<button {...buttonProps}></button>);
     
    }     
    return slidesNumbers;
    
  }
  

   render() {       
   

    const {  onNext, onPrev } = this.props;
    
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
    window.addEventListener('keydown', handler)

   
    const { getCurrentSlideIndex, style, className} = this.props;    

    return (
      <div className={className} style={style}>
        {this.renderSlidesNumbers(getCurrentSlideIndex())}
      </div>         

    );
  }
}

export default CustomControls
