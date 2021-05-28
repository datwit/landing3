import styled from 'styled-components'

export const FooterContainer = styled.div.attrs({
    className: "px-5 relative top-2/4 transform -translate-y-2/4"
})``;
export const FooterHeader = styled.h1.attrs({
    className: "text-white text-center text-4xl my-2"
})``;
export const FooterLinksWrapper = styled.div.attrs({
    className: "flex flex-wrap overflow-hidden lg:-mx-2 justify-center sm:justify-start md:px-8"
})``;
export const ColumnContent = styled.div.attrs({
    className: "sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2 mb-4"
})``;
export const ColumnTitle = styled.h2.attrs({
    className: "text-white font-bold text-lg sm:mb-5"
})
`
@media (max-width: 639px){
    text-align: center !important;
}
@media (min-width: 640px){
    text-align: left !important;
}
`;
export const SocialList = styled.ul.attrs({
    className: "inline-flex"
})``;
export const SocialListItem = styled.li.attrs({
    className: "mr-2 h-8 w-8 cursor-pointer"
})
`
svg{
    width:1.75rem;
    height:1.75rem;
    color: white;
    
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
    className: "text-white font-medium text-left sm:mb-5 cursor-pointer flex justify-center sm:justify-start hover:text-secondary1"
})``;
export const DownH3 = styled.h3.attrs({
    className: "text-white font-medium text-left cursor-pointer flex justify-center sm:justify-start hover:text-secondary1"
})
``;
export const CopyRight = styled.p.attrs({
    className: "text-md absolute bottom-0"
})
`
left:50%;
transform: translateX(-50%);
color: #b7b7bc;
`;
export const Divider = styled.div.attrs({
    className: "w-8 h-1 mx-auto mt-4 bg-secondary2 block sm:hidden"
})
`
// background: #b7b7bc;
`;

