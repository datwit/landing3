import styled from 'styled-components';

export const QuestionWrapper = styled.div.attrs({
    className: "mb-4"
})``;
export const QuestionText = styled.h1.attrs({
    className: "text-base mt-4 text-center"
})
`
cursor:pointer;
&:hover{
    color: #e69c24;
}
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
    opacity: 0.6;

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
    // background-color: #fff;    
    overflow: hidden;
    // box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06), 0 20px 30px -10px rgba(15, 72, 179, 0.2);

    // .accordion-list__item + .accordion-list__item {
    //     border-top: 1px solid rgba(0, 0, 0, 0.1);       
    // }      
`;
export const AccordionTitleWrapper = styled.div
`
    display: block;
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);

    .icon-rotate {       
        transform: rotate(180deg);               
    }

`;
export const AccordionTitle = styled.h3
`
    font-size: 1.6rem;
    margin: 0;
    font-weight: 700;
    color: #121212;

`;
export const AccItemInner = styled.div
`
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;       
        
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
export const AccItemParagraph = styled.div
`
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 300;
    line-height: 1.3;
`;