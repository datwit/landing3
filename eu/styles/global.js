import styled from "styled-components"

export const ContentWrapper = styled.div.attrs({
    className: "flex flex-wrap"
})
`
    &.maxHeight{
        height: 100%;
    }    
`;
export const SectionHeader = styled.h2.attrs({
    className: "mt-1"
})``;
export const SectionSubheader = styled.h3.attrs({
    className: "mb-2 md:mb-4"
})``;
export const Button = styled.a
`
    padding: .5rem 1rem;
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);    
    transition: box-shadow 0.3 ease, transform 0.3 ease;
    background-color: #e69c24;
    color: white;
    font-weight: 600;    
    display: inline-flex;
    cursor:pointer;
    border: 3px solid #e69c24;
    
    &:active{
        box-shadow: inset 4px 4px 4px #9cd4e6;
        transform: translate(4px,4px);
    }    
    &:hover {
        color: #00baff;
        border: 3px solid #00baff;        
        background: white;
        svg{
            color: #00baff;  
        }        
    }
    svg{       
        color: white;
        margin-left:8px;      
    } 
    &.submit-button{
        background:#eaebec !important;
        border: 3px solid #a4a7a7 !important;
        color:#a4a7a7 !important;
        box-shadow: none;    
        transition: none;
        margin-right:auto;
        margin-left:auto;
        svg{
            color:#a4a7a7 !important; 
        }
        &:hover{
            cursor:auto !important;
        }
        &:active{
            box-shadow: none;
            transform: none;
        }    
    }  
`;
