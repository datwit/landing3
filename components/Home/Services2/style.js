import styled from 'styled-components';

export const IllWrapper = styled.div.attrs({
    className: "w-full md:w-2/4 my-auto"
  })
  `
  svg.resizes{
  @media (min-width: 768px){
  object-fit:cover;
  width: 70%;
  height:70%;
  } 
  @media (max-width: 767px){
    object-fit:cover;
    width: 60%;
    height:60%;
  } 
  @media (max-width: 400px){
    object-fit:cover;
    width: auto;
    height:auto;
  }   
}
`;
export const ImageTitle = styled.h2.attrs({
    className: "text-base md:text-2xl my-2 md:my-6"
})``;
export const TextBlock = styled.div.attrs({
    className: "w-full md:w-2/4 md:p-4"
})``;
  