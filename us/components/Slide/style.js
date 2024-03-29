import styled from 'styled-components'

export const NavigationWrapper = styled.div.attrs({
    className: ""
})
`
#control0,#control1,#control2,#control3,#control4,#control5,#control6,#control7,#control8{   
margin-bottom:15px ;
width: 15px;
height: 15px;   
background: #eaebec;
border-radius: 25px;
transition: height .5s ease;    
  &:hover{
    .tooltip{
    visibility: visible;
    z-index: 100;   
    } 
  } 
  @keyframes pill{
    100%{   
      height: 45px;       
    }
  }
}
.tooltip{
visibility: hidden;
position: absolute;
font-family: 'Numans';
border-radius: 25px;
}
.disabled{    
  animation: pill .6s ease-in-out normal forwards;     
  position:relative;
  z-index:0; 
  background: linear-gradient(to right, #00baff, #e69c24);
  &::before{
    content:"";
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding: 3px;
    border-radius: 15px;
    background: linear-gradient(to right, #00baff, #e69c24);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude; 
  }  
} 
`;

