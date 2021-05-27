import styled, { css } from 'styled-components'

const HoverLine = css
`
    transition: all ease 0.3s;
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    &::after{
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 5px;
        background: #e69c24;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      } 
      &:hover::after{
        transform: scaleX(1);
        transform-origin: left;
      }   
  
`

export const NavWrapper = styled.div.attrs({
    className: "flex items-center justify-between h-16"
  })``;
  export const ImgWrapper = styled.div.attrs({
    className: "flex-shrink-0"
  })``;  
  export const LogoLink = styled.a.attrs({
    className: "inline-flex items-center cursor-pointer"
  })``; 
  //Hidding left behind for understanding purposes
  export const ButtonContainer = styled.div.attrs({
    className: "-mr-2 flex"
  })``;  
  export const HamburguerWrapper = styled.aside.attrs({
    className: "md:invisible"
  })
  `
    &.cont-aside{
        position: fixed;
        top: 0;
        left: 0;
            width: 100vw;
        display: flex;
        flex-direction: column;
        background: #1e4158;
        opacity: 0.95;			
        transition: height 1s ease;
        z-index: 2;
        overflow-y:auto;
        justify-content:center
    }
  `; 
  export const LinkItem = styled.li.attrs({
    className: "ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:text-secondary1"
  })
  `
  ${HoverLine}
  font-family: 'Numans';
  `;  
  export const LinkItem2 = styled.li.attrs({
    className: "ml-5 2xl:ml-8 pb-2 text-xl font-semibold text-white hover:text-secondary1 focus:text-secondary1"
  })
  `
  ${HoverLine}
  font-family: 'Numans';
  `;  
  export const HeaderElements = styled.div.attrs({
    className: "h-16 absolute top-0 w-full px-10 pt-4"
  })``;  
  export const AligningElements = styled.div.attrs({
    className: "flex justify-between items-center"
  })``;  


  

  