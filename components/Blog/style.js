import styled from 'styled-components'

export const SearchWrapper = styled.div.attrs({
    className: "flex items-center justify-center w-full pb-4"
})``;
export const BlogCardWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3 w-full"
})``;
export const BlogCardBlock = styled.div.attrs({
    className: "p-3"
})``;
export const CardSummary = styled.p.attrs({
    className: "mt-0 text-base leading-6 text-gray-500"
})``;
export const BlogCardBorder = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in overflow-hidden mx-4 md:mx-0"
})``;
export const RespBlock = styled.div.attrs({
    className: "p-2 w-full"
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
    className: "flex justify-center"
})``;
export const DateAuthorWrapper= styled.div.attrs({
    className: "text-gray-600 text-md flex justify-between lg:w-2/4 mx-auto"
})``;
export const PostTitle= styled.h2.attrs({
    className: "text-3xl font-bold"
})``;
export const Category= styled.a
`
padding: .05rem .8rem;
border-radius: 3rem;
background: #f5f2f2;
color: #e69c24;
border: 2px solid #e69c24;
font-size: 14px;
margin-right: 5px;
cursor:pointer;
`;
export const SearchField= styled.input.attrs({
    className: "w-1/2 border border-gray-300 bg-white text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
})
`
border-radius: 25px;
`;
export const PaginationWrapper= styled.div.attrs({
    className:""
})        
`
.pagination{
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform:translateX(-50%);    
    
    li{
        display: inline !important;
        width: 40px;
        height: 40px;
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
}
@-webkit-keyframes slidel {
    100% { left: 0; }
}

@keyframes slidel {
    100% { left: 0; }
}
`;



