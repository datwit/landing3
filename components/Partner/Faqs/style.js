import styled from 'styled-components';

export const QuestionWrapper = styled.div.attrs({
    className: "flex items-center shadow border border-gray-300 p-4 md:p-6 shadow hover:shadow-lg transition duration-200 ease-in"
})
`  
@media (min-width: 790px){
    height: 131px;
    width:320px;
    
}
@media (max-width: 639px){
    height: 131px;
    width:284px;
}
@media (max-width: 360px){
    height: auto;
    width:auto;
    justify-content: center;
    padding:10px;
}

    position: relative;
    margin-right:auto;
    margin-left: auto;

&:hover{    
    cursor: pointer;
}
&:hover h1{
    color: #00baff;
    cursor: pointer;
}    
   
&::after{
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #e69c24;
    width: 0;
    transition: width .2s linear;
}
&:hover::after{
    width: 100%;
}
@media (max-width: 360px){
    svg{
        display:none;
    }
}

svg{
    padding-right: 20px;    
}
`;
export const QuestionText = styled.h1.attrs({
    className: "text-xl text-left flex items-center"
})
`
@media (max-width: 359px){
   text-align:center;
}
height: 81px;
`;
export const AccItem = styled.div
`
padding-bottom:20px; 
`;
export const AccordionIcon= styled.svg
`
    width: 1.2rem;
    height: 1.2rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;  
    /* opacity: 0.6; */
    color:#e69c24;

`;
export const AccordionWrapper = styled.div
`
padding-bottom: 30px;
`;
export const AccordionList = styled.div
`
    list-style: none;
    margin: 0;
    padding: 0;       
    overflow: hidden;        
`;
export const AccordionTitleWrapper = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-md transition duration-200 ease-in"
})
`
    display: block;
    padding: 0.5rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
    cursor:pointer;

    .icon-rotate {       
        transform: rotate(180deg); 
        color: #00baff;              
    }   

`;
export const AccordionTitle = styled.h3.attrs({
    className: "text-base sm:text-lg text-primary text-left"
})
`
&:hover{
    color: #00baff;
}
`;
export const AccItemInner = styled.div
`
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;    
    position: relative;
    background:#eaebec;  
    border-left: 3px solid #e69c24;     
        
`;
export const AccItemContent = styled.div
`
    // opacity: 0;
    // transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0 1.2rem 1.2rem;
`;
export const AccItemParagraph = styled.div.attrs({
    className: "text-base"
})
`
    text-align: justify;
    
`;