import styled from 'styled-components'


export const IconWrapper = styled.div.attrs({
  className: "sm:w-1/4 h-full w-full"
})``;
export const IconListWrapper = styled.ul.attrs({
  className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col"
})``;
export const IconListItem = styled.li.attrs({
  className: "-mb-px mr-2 flex-auto text-center flex items-center sm:pb-12 flex-col"
})``;
export const IconTitle = styled.a.attrs({
  className: "text-base font-bold  block leading-normal relative cursor-pointer"
})``;
export const TabContent = styled.div.attrs({
  className: "sm:w-3/4 relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg"
})``;
export const TabContentInner = styled.div.attrs({
  className: "px-4 flex-auto border-2 border-gray-200 border-opacity-60 md:h-full"
})
`
@media (max-width: 767px) {
  height: 400px;
  overflow:hidden !important;
  overflow: scroll !important;
}
`;
export const BulletTitle = styled.h2.attrs({
  className: "text-lg mt-2 text-left"
})``;
export const BulletSubtitle = styled.p.attrs({
  className: "text-base mt-2"
})``;
export const ServiceBulletsOuter = styled.p.attrs({
  className: "text-base mt-2 flex"
})``;
export const ServiceBulletsSpan = styled.span.attrs({
  className: "w-5 h-5 mr-2 inline-flex items-center justify-center flex-shrink-0"
})``;