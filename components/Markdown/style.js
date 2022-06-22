import styled from 'styled-components'

export const MarkdownContent = styled.div.attrs({
    className: "prose text-justify mb-8"
})
`
h2{
    margin-top: 1rem;
    margin-bottom: .8rem;
    font-size: 25px;
    text-align: left;
    
}
h3{
    margin-top: 1rem;
    margin-bottom: .8rem;
    font-size: 20px;
    color:#1e4158;
    text-align: left;
    
}
h4{
    margin-top: 1rem;
    margin-bottom: .8rem;
    font-size: 20px;
    text-align:left;    
}
p{
    color: #334155;    
    margin-top:10px;
    font-size: 18px;
}
ul{
    list-style-type: square;
    color: #334155;    
    margin: 20px 0px 20px 20px;
    
}
blockquote {
    margin: 20px 0;
    padding-left: 1.5rem;
    border-left: 5px solid #e69c24;
}
pre {
   /*  white-space: pre-wrap; */
    width: 100%;
    overflow: auto;
}
em{
    &.caption{
        font-size:10px;
    }
}

img{
    @media (min-width: 1024px){  
    width:70%;
    height: 70%;
    margin-left:auto;
    margin-right: auto;
    }
}
a{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #334155; 
    &:hover{
        color: #00baff;
    }
}
code{
    background: #eaebec;    
}

`;