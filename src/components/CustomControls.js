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
        left: '50%',
        paddingTop: '10px',
        position: 'fixed',
        transform: 'translateX(-50%)',
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
      const {
        getCurrentSlideIndex, style, className,
      } = this.props;
      const currentSlideIndex = getCurrentSlideIndex();
  
      return (
        <div className={className} style={style}>
          {this.renderSlidesNumbers(currentSlideIndex)}
        </div>
      );
    }
  }

  export default CustomControls