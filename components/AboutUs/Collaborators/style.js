import styled from "styled-components"

export const ColWrapper = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})``;

export const ColName = styled.h2.attrs({
    className: "font-bold text-lg text-primary"
})``;

export const ColRol = styled.h4.attrs({
    className: "text-gray-500 mb-3"
})``;
export const SocialLinkItem = styled.a.attrs({
    className: "ml-2"
})
`
svg{
    width: 32px;
    height: 32px;
    color: #e69c24;
    margin: 16px 0;

    &:hover{
        color:#00baff;
    }
}

`;


