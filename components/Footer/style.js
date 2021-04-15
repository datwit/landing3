import styled from 'styled-components'

export const FooterContainer = styled.div.attrs({
    className: "px-5 relative top-2/4 transform -translate-y-2/4"
})``;
export const FooterHeader = styled.h1.attrs({
    className: "text-white text-center text-4xl"
})``;
export const FooterLinksWrapper = styled.div.attrs({
    className: "flex flex-wrap overflow-hidden lg:-mx-2"
})``;
export const ColumnContent = styled.div.attrs({
    className: "sm:w-2/4 lg:w-1/4 overflow-hidden lg:my-2 lg:px-2 sm:mb-4"
})``;
export const ColumnTitle = styled.h2.attrs({
    className: "text-white font-bold flex justify-start text-lg mb-5"
})``;
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
}
`;
export const ContactWrapper = styled.span.attrs({
    className: "flex"
})``;
export const UpperH3 = styled.h3.attrs({
    className: "text-white text-left mb-5 cursor-pointer"
})``;
export const DownH3 = styled.h3.attrs({
    className: "text-white text-left cursor-pointer"
})``;
export const CopyRight = styled.p.attrs({
    className: "text-gray-500 text-md absolute bottom-0"
})
`
left:40%;
`;

