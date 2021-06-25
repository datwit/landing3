import styled from 'styled-components'

export const SearchWrapper = styled.div.attrs({
    className: "flex items-center w-1/2 relative"
})
`
transform: translateX(50%);
`;
export const BlogCardWrapper = styled.div.attrs({
    className: "p-3 w-full sm:w-1/3 w-full flex"
})
`
/* align-items: stretch; */
`;
export const BlogCardBlock = styled.div.attrs({
    className: "p-3"
})``;
export const CardSummary = styled.p.attrs({
    className: "mt-0 text-gray-500 hidden md:block"
})
`
font-size: 0.90rem;
line-height: 1.2rem;
/* truncate text*/
display: -webkit-box;
-webkit-line-clamp:4;
-webkit-box-orient: vertical;
overflow:hidden;
text-overflow: ellipsis;
height:75px;
text-align:justify;

`;
export const BlogCardBorder = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in overflow-hidden"
})
`
    @media (min-width: 430px){
        
        display:flex;
        flex-direction: row;
    }
     @media (min-width: 640px){
        
        flex-direction: column;
    }
    img.res-img{
        @media (min-width: 430px){
        
        width:40%;
        }
         @media (min-width: 640px){
        
        width:100%;
        height:100%;
        }

    }
`;
export const RespBlock = styled.div.attrs({
    className: "p-2 sm:w-5/6 w-1/2"
})``;
export const BlogTitle1 = styled.h1.attrs({
    className: "title-font text-lg font-bold text-primary mb-1 cursor-pointer"
})``;
export const BlogTitle2 = styled.a.attrs({
    className: "font-bold text-primary cursor-pointer"
})``;
export const DateWrapper= styled.div.attrs({
    className: "text-gray-600 text-xs"
})``;
export const ImgContainer= styled.div.attrs({
    className: "flex justify-center mb-4"
})``;
export const DateAuthorWrapper= styled.div.attrs({
    className: "text-gray-600 text-md w-full mx-auto md:inline-flex"
})``;
export const PostTitle= styled.h2.attrs({
    className: "text-3xl font-bold"
})``;
export const Category= styled.p
`
padding: .05rem .8rem;
border-radius: 3rem;
background: #f5f2f2;
color: #e69c24;
border: 2px solid #e69c24;
font-size: 14px;
margin: 0 5px 10px 0;
cursor:pointer;
line-height:1rem;
`;
export const SearchField= styled.input.attrs({
    className: "w-full border border-gray-300 focus:border-transparent bg-white text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
})
`
border-radius: 25px;
`;
export const PaginationWrapper= styled.div        
`
    
    position: absolute;    
    bottom:0px;
    left: 50%;
    transform: translateX(-50%);

    .pagination{
        margin: 15px 0;
        display: flex;
        list-style: none; 
        
    
    li{
        // display: inline !important;
        width: 35px;
        height: 35px;
        border: 2px solid #e69c24;
        border-radius: 50%;
        justify-content:center;
        align-items:center;
        a{
            color: #e69c24;  
            // margin: 1px 10px;     
            outline: none;
            cursor: pointer;
            text-align: center;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size: 20px;
            // svg{
            //     display: inline;
            // }
        }        
        &.active{
            background-color: #e69c24 ;
            a{
                
                
                color: #fff;
            }            
        }
    }    

}   

`;
export const PaginationSection= styled.div.attrs({
    className: "flex flex-wrap"
})
`
#pag-section{
    height: 70vh;
}

`;