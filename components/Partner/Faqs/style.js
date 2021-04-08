import styled from 'styled-components';

export const QuestionWrapper = styled.div.attrs({
    className: "mb-4"
})
`
box-shadow: 0px 2px 5px rgba(0,0,0,0.16), 0px 2px 10px rgba(0,0,0,0.12);
border-radius:25px;
`;
export const QuestionText = styled.h1.attrs({
    className: "text-base mt-4 text-center"
})
`
cursor:pointer;
&:hover{
    color: #e69c24;
}
`;