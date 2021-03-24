import styled from 'styled-components'

export const BlockOuterContainer = styled.div.attrs({
    className: "w-full md:w-1/2 flex justify-center"
})``;
export const BlockBorder = styled.a.attrs({
    className: "md:h-full p-3 border-1 border-gray-600 border-opacity-100 shadow-md overflow-hidden w-64"
})
`
    &.active{
        background: #F4F4F4;
        outline: none;
        -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
        -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
        box-shadow: inset 0px 0px 5px #c1c1c1;
    }
`;
