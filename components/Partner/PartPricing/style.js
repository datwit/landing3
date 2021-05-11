import styled from 'styled-components';

export const BulletWrapper= styled.ul
`
&.slide-right{
    position: relative;
    right: -1000px;
    -webkit-animation: slider 0.8s forwards;
    -webkit-animation-delay: 0.3s;
    animation: slider 0.8s forwards;
    animation-delay: 0.3s;

}
@-webkit-keyframes slider {
    100% { right: 0; }
}

@keyframes slider {
    100% { right: 0; }
}
`;
export const PricingCardGray= styled.div.attrs({
    className: "p-4 md:w-1/3 w-full bg-gray-100 bg-opacity-75 px-4 py-4 lg:px-8 lg:py-10 rounded-lg overflow-hidden text-center"
})
`
&.slide-left{
    position: relative;
    left: -1000px;
    -webkit-animation: slidel 0.8s forwards;
    -webkit-animation-delay: 0.3s;
    animation: slidel 0.8s forwards;
    animation-delay: 0.3s;
    overflow:hidden;
}
@-webkit-keyframes slidel {
    100% { left: 0; }
}

@keyframes slidel {
    100% { left: 0; }
}
`;
export const ToggleWrapper = styled.div.attrs({
    className: "flex mx-auto border-2 border-gray-200 border-opacity-60 rounded-full overflow-hidden my-3 justify-between lg:max-w-lg xl:max-w-xl"
})``;
export const BundleChooser = styled.a.attrs({
    className: "py-1 px-4  rounded-full text-xs sm:text-base flex items-center"
})``;
export const PriceTitle = styled.h1.attrs({
    className: "title-font sm:text-2xl text-lg font-medium text-primary sm:mb-3"
})``;
export const PriceDescription = styled.p.attrs({
    className: "leading-relaxed mb-3 text-sm sm:text-base"
})``;
export const BulletText = styled.p.attrs({
    className: "flex items-center text-gray-600 md:mb-6 text-sm sm:text-base"
})``;
export const BulletTextSpan = styled.span.attrs({
    className: "w-8 h-8 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;
export const BulletsContainer = styled.div.attrs({
    className: "px-4 sm:p-4 md:w-2/3 w-full flex items-center"
})``;