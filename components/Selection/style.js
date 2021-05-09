import styled from 'styled-components'

export const BlockOuterContainer = styled.div.attrs({
    className: "w-full sm:w-1/2 flex justify-center"
})``;
export const BlockBorder = styled.a.attrs({
    className: "p-3 border-1 border-gray-600 border-opacity-100 shadow-md overflow-hidden w-36 h-40 sm:w-48 sm:h-52 md:w-64 md:h-full xl:w-72 cursor-pointer mb-2 sm:mb-0"
})
`
    &.active{
        background: #F4F4F4;
        outline: none;
        -webkit-box-shadow: inset 0px 0px 10px #c1c1c1;
        -moz-box-shadow: inset 0px 0px 10px #c1c1c1;
        box-shadow: inset 0px 0px 10px #c1c1c1;
    }
    &:hover{
        transform:translateY(5px);
        transition-duration:250ms;
        transition-timing-function: cubic-bezier(0.4,0,1,1);

        h1{
            color: #00baff;
        }
    }
`;
export const ButtonWrapper = styled.div.attrs({
    className: "flex justify-center pt-8"
})``;

export const SHeader = styled.h1.attrs({
    className: "text-primary text-xl sm:text-2xl md:text-3xl title-font font-semibold mb-1 text-center"
})``;

