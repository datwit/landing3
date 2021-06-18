import styled from 'styled-components';

export const QuestionWrapper = styled.div.attrs({
    className: "mb-4"
})``;
export const QuestionText = styled.h1.attrs({
    className: "text-base mt-4 text-center"
})
`
text-align: left;
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
    className: "text-lg text-primary"
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