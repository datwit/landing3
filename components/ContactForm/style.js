import styled from "styled-components"

export const MapWrapper = styled.div.attrs({
    className: "w-full md:w-1/2"
})``;
export const FormBlock = styled.div.attrs({
    className: "w-full md:w-1/2 md:pl-6"
})``;
export const FormIntro = styled.p.attrs({
    className: "text-base m-0 text-gray-600 text-justify"
})``;
export const InputWrapper = styled.div.attrs({
    className: "relative mb-2"
})``;
export const ExplanationForm = styled.p.attrs({
    className: "text-xs text-gray-600 mt-3 text-center"
})
`
height: 33px;
`;
export const MessageConfirmation = styled.p.attrs({
    className: "text-xs text-gray-600 mt-3 text-center text-green-700 bg-green-50"
})
`
display:flex;
align-items:center;
justify-content: center;
border-radius:20px;
height: 33px;

svg{
    font-size:20px;
}
`;
export const Counter = styled.p.attrs({
    className: "text-xs text-gray-600 mt-1 text-right"
})
``;
export const FInput = styled.input.attrs({
    className: "w-full border border-gray-300 focus:border-transparent bg-white text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-300"
})
`
border-radius: 25px;
&:focus{
    border-width: 2px;
    border-color:${props => props.error ? "red" : "#e69c24"};
}
`;
export const TInput = styled.textarea.attrs({
    className: "w-full border border-gray-300 focus:border-transparent bg-white text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-300"
})
`
border-radius: 20px;
&:focus{
    border-width: 2px;
    border-color:${props => props.error ? "red" : "#e69c24"};
}
`;
export const FormLabels = styled.label.attrs({
    className: "leading-7 text-sm text-gray-400"
})``;
export const ConnectionWarning = styled.div.attrs({
    className: ""
})
`
text-align:center;
svg{
    font-size: 40px;
    color: #e69c24;
    margin-left: auto;
    margin-right: auto;
}
`;
export const Loader = styled.label.attrs({
    className: ""
})
`
&.sk-circle {    
    width: 30px;
    height: 30px;
    position: relative;
    margin-left: 20px;

    .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
            &::before {
                content: '';
                display: block;
                margin: 0 auto;
                width: 15%;
                height: 15%;
                background-color: #7A7A7A;
                opacity:0.7;
                border-radius: 100%;
                -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
            }        
    }
    .sk-circle2 {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg); 
        &::before {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s; 
        }
    }
    .sk-circle3 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg); 
        &::before {
            -webkit-animation-delay: -1s;
            animation-delay: -1s; 
        }
    }
   .sk-circle4 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        &::before {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s; } 
        }
   .sk-circle5 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg);
        &::before {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s; 
        }
    }
   .sk-circle6 {
        -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        transform: rotate(150deg); 
        &::before {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s; 
        }
    }
   .sk-circle7 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        &::before {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s; 
        }
    }
   .sk-circle8 {
        -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
        transform: rotate(210deg);
        &::before {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s; 
        } 
    }
   .sk-circle9 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg); 
        &::before {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s; 
        }
    }
   .sk-circle10 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg); 
        &::before {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s; 
        }
    }
   .sk-circle11 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg); 
        &::before {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s; 
        }
    }
   .sk-circle12 {
        -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
        transform: rotate(330deg); 
        :before {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s; 
        }
  
    }
}
@-webkit-keyframes sk-circleBounceDelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    } 40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  
@keyframes sk-circleBounceDelay {
    0%, 80%, 100% {
        -webkit-transform: scale(0);
                transform: scale(0);
    } 40% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
}
`;  
