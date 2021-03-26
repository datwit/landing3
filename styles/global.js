import styled from "styled-components"

export const ContentWrapper = styled.div.attrs({
    className: "flex flex-wrap -m-4"
})``;
export const SectionHeader = styled.h2.attrs({
    className: "fmt-4"
})``;
export const SectionSubheader = styled.h4.attrs({
    className: "mb-6"
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

    &:active{
        box-shadow: inset 4px 4px 4px #BD7300;
        transform: translate(4px,4px);
    }
    
    &:hover {
        color: #1e4158;
        border-color: white;
        svg{
            color: #1e4158;  
        }
        
    }
     
`;