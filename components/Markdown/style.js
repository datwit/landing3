import styled from 'styled-components'

export const MarkdownContent = styled.div.attrs({
    className: "prose text-justify"
})
`
h2{
    margin-top: 1rem;
    margin-bottom: .8rem;
    font-size: 25px;
    
}
p{
    color: #413f3f;
    opacity: .72;
    margin-top:10px;
    font-size: 18px;
}
ul{
    list-style-type: square;
    color: #413f3f;
    opacity: .72;
    margin: 20px 0px 20px 20px;
    
}
blockquote {
    margin: 20px 0;
    padding-left: 1.5rem;
    border-left: 5px solid #e69c24;
}
`;