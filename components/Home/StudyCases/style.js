import styled from 'styled-components'

export const SCardWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3"
  })``;
  export const SCardBorder = styled.div.attrs({
    className: "h-full border border-gray-300 overflow-hidden mx-4 md:mx-0 shadow hover:shadow-lg transition duration-200 ease-in"
  })
  `
   &:hover{
    h1{
      color: #00baff;
    }
   }
    
  `;
  export const CategoryRect = styled.div.attrs({
    className: "bg-secondary2 h-8 flex justify-start items-center"
  })``;
  export const CategoryTitle = styled.h2.attrs({
    className: "tracking-widest m-0 font-semibold text-white ml-2 cursor-pointer"
  })
  `
  cursor:pointer;
  font-size: 12px;
  line-height: 1.1rem;
  `;
  export const CardContent = styled.div.attrs({
    className: "p-4"
  })``;

  export const CardTitle = styled.h1.attrs({
    className: "title-font text-lg font-bold text-primary mb-1 cursor-pointer"
  })``;
  export const CardSubtitle = styled.p.attrs({
    className: "mt-0 text-base leading-6 text-gray-500"
  })``;
  export const ReadMore = styled.a.attrs({
    className: "text-secondary2 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
  })``;

