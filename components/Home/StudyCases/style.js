import styled from 'styled-components'

export const SCardWrapper = styled.div.attrs({
    className: "py-2 md:py-0 md:p-4 w-full md:w-1/3"
  })
  ``;
  export const SCardBorder = styled.div.attrs({
    className: "h-full border border-gray-300 overflow-hidden mx-4 md:mx-0 shadow hover:shadow-lg transition duration-200 ease-in"
  })
  `   
  `; 
  export const CategoryRect = styled.p.attrs({
    className: "flex items-center"
  })
  `
  padding: .05rem .5rem;
  border-radius: 3rem;
  background: #e69c24;
  color: white;
  border: 2px solid #e69c24;
  font-size: 14px;
  margin: 0;
  cursor:pointer;
  line-height:1.2rem;
  width:fit-content;

  svg{
    margin: 0 5px 0 5px;
  }
  &:hover {
        color: #00baff;
        border: 2px solid #00baff;        
        background: white;
        svg{
            color: #00baff;  
        }
        
  }
  `;
  export const CategoryTitle = styled.h2.attrs({
    className: "tracking-widest m-0 font-semibold text-white ml-2 cursor-pointer"
  })
  `
  cursor:pointer;
  font-size: 12px;
  line-height: 1.1rem;
  `;
  export const CardContent = styled.div.attrs({
    className: "p-4 w-full"
  })
  `     
  `;

  export const CardTitle = styled.h1.attrs({
    className: "title-font text-lg font-bold text-primary mb-1 cursor-pointer hover:text-secondary1"
  })``;
  export const CardSubtitle = styled.p.attrs({
    className: "mt-0 text-base leading-6 text-gray-500"
  })
  `
  /* truncate text*/
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  height:75px;
  text-align:justify;
  `;
  export const ReadMore = styled.a.attrs({
    className: "text-secondary2 flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-secondary1"
  })``;

