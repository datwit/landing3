import styled from 'styled-components'

export const IconWrapper = styled.div.attrs({
    className: "md:p-4 sm:w-1/3"
})
`
    svg.sizing{
        width:50%;
        height:50%;
        margin-left: auto;
        margin-right: auto;
    }
    #yes{
        animation: sign-anime  1.9s linear infinite alternate; 
        -webkit-animation: sign-anime  1.9s linear infinite alternate;
    }
    #heart{
        animation: sign-anime  1.7s linear infinite alternate; 
        -webkit-animation: sign-anime  1.7s linear infinite alternate;
    }
    #bill{
        animation: bill-anime  1.9s linear infinite alternate; 
        -webkit-animation: bill-anime 1.9s linear infinite alternate;
        transform-origin:bottom;
        transform-box: fill-box;
    }
    @keyframes sign-anime {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(5px);
        }
    }
    @keyframes bill-anime {
        0%{
            transform: rotateZ(0);
        }
        100%{
            transform: rotateZ(10deg);
        }  
    }
`;