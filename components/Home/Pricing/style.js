import styled from "styled-components"

export const OuterWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3 w-full"
})``;
export const Field = styled.h2.attrs({
    className: "text-sm tracking-widest title-font mb-1 font-medium pt-2 h-12"
})``;
export const Price = styled.h1.attrs({
    className: "text-5xl text-primary mb-1 leading-none mx-auto"
})``;
export const LilDescrip = styled.p.attrs({
    className: "text-xs text-gray-500 mt-3 border-b border-gray-200"
})``;
export const PBulletsWrapper = styled.p.attrs({
    className: "flex items-center text-gray-600 mb-2 text-xs sm:text-sm"
})``;
export const PBullets = styled.span.attrs({
    className: "w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;

