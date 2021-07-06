import styled from 'styled-components'

export const FooterContainer = styled.div.attrs({
    className: "px-5 relative top-2/4 transform -translate-y-2/4"
})``;
export const FooterHeader = styled.h1.attrs({
    className: "text-white text-center text-4xl my-2"
})``;
export const FooterLinksWrapper = styled.div.attrs({
    className: "sm:flex sm:flex-wrap overflow-hidden lg:-mx-2 justify-center sm:justify-start md:px-8"
})``;
export const ColumnContent = styled.div.attrs({
    className: "sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2 mb-4"
})``;
export const ColumnContent2 = styled.div.attrs({
    className: "sm:w-2/4"
})``;
export const ColumnTitle = styled.h2.attrs({
    className: "text-white text-lg font-bold"
})
`
margin: 5px 0;
line-height: 2.25rem;
text-transform:uppercase;

@media (max-width: 639px){
    text-align: center !important;
}
@media (min-width: 640px){
    text-align: left !important;
}
`;
export const SocialList = styled.ul.attrs({
    className: "inline-flex"
})
`  
@media (max-width: 640px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`;
export const SocialListItem = styled.li.attrs({
    className: "mr-2 h-8 w-8 cursor-pointer mt-2"
})
`
list-style:none;

svg{
    width:1.75rem;
    height:1.75rem;
    color: white;
    
    &:hover{
        color: #00baff;    
    }
}
`;
export const SocialListItem2 = styled.li.attrs({
    className: "cursor-pointer flex items-center"
})
`
list-style:none;
svg{
    width:1.75rem;
    height:1.75rem;
    color: white;
    margin-right:5px;
    
    &:hover{
        color: #00baff;    
    }
}
`;
export const ContactWrapper = styled.span.attrs({
    className: "flex"
})
`
svg{
    &:hover{
        color: #00baff;    
    }
}
@media (max-width: 639px){
    text-align: center !important;
}
@media (min-width: 640px){
    text-align: left !important;
}
`;
export const UpperH3 = styled.h3.attrs({
    className: "text-white font-medium text-left cursor-pointer flex justify-center sm:justify-start hover:text-secondary1"
})
`
margin: 5px 0;
line-height: 2.25rem;
`;
export const CopyRight = styled.p.attrs({
    className: "text-md absolute bottom-0"
})
`
left:50%;
transform: translateX(-50%);
color: #b7b7bc;
`;

export const AccordionFooterTitle = styled.h2
`
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: white;
    text-transform: uppercase;
    margin: 5px 0 5px 0;
`;
export const AccordionTitleWrapperF = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-md transition duration-200 ease-in"
})`
  
    display: flex;
    justify-content: space-between;
    align-items: center;    
    position: relative;
    cursor:pointer;
    background-color: #1e4158;
    border: none;
    outline: none;
    border-bottom: 1px solid #fcfcfc; 

    .icon-rotate {       
        transform: rotate(180deg);                      
    }   

`;
export const AccordionIconFooter= styled.svg
`
    width: 1.2rem;
    height: 1.2rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;    
    margin: 5px 0 5px 0;
    color:white;

`;
export const AccordionContent = styled.div
`
    background-color: #1e4158; 
    transition: max-height 0.6s ease;
    color: white;
    text-align: center;  
    display: flex;    
    flex-direction: column;
`;
export const AccContWrapper = styled.div
`
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;    
    position: relative; 
        
`;
