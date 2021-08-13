import styled from "styled-components"

export const ColWrapper = styled.div.attrs({
    className: "border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in relative overflow-hidden"
})``;

export const ColName = styled.h2.attrs({
    className: "font-bold text-lg text-primary"
})``;

export const ColRol = styled.h4.attrs({
    className: "text-gray-500 mb-3"
})``;
export const SocialLinkItem = styled.a.attrs({
    className: "ml-2"
})
`
svg{
    width: 32px;
    height: 32px;
    color: #e69c24;
    margin: 16px 0;

    &:hover{
        color:#00baff;
    }
}
`;
export const CarouselWrapper = styled.div.attrs({
    className: ""
})
`
.rec{
    .rec-arrow {
    border-radius: 0;
    background-color: white;
    color: #e69c24;
    box-shadow: none;
    border: 3px solid #e69c24;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;  
        &:hover:enabled{
            border-radius: 50%;
            background-color: #e69c24;
        }
        &:focus:enabled {
            border-radius: 50%;
            background-color: #e69c24;
        }
        &:disabled{
            background-color: #eaebec !important;
            border: 3px solid transparent;
            color: #cdcdce;
        } 
        &:disabled::before{
            border-radius: 0;
            background: none;  
        }
    }
    .rec-item-wrapper{
        padding: 15px !important;
    } 
    .rec-dot{
        width: 25px;
        height: 5px;
        border-radius:0;            
        background: #00baff;
        box-shadow:none;
        opacity: 0.3;
        &_active{
            background: #00baff;
            opacity: 1;
        }
    } 
}
@media (max-width: 400px){
  .rec{
        .rec-arrow {
        display: none;
        }
    } 
}
`;


