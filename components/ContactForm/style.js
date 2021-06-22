import styled from "styled-components"

export const MapWrapper = styled.div.attrs({
    className: "w-full sm:w-1/2"
})``;
export const FormBlock = styled.div.attrs({
    className: "w-full sm:w-1/2 sm:pl-6"
})``;
export const FormIntro = styled.p.attrs({
    className: "text-base m-0 text-gray-600 text-justify"
})``;
export const InputWrapper = styled.div.attrs({
    className: "relative mb-2"
})``;
export const ExplanationForm = styled.p.attrs({
    className: "text-xs text-gray-600 mt-3 text-center"
})``;
export const FInput = styled.input.attrs({
    className: "w-full border border-gray-300 focus:border-transparent bg-white text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
})
`
border-radius: 25px;
`;
export const TInput = styled.textarea.attrs({
    className: "w-full border border-gray-300 focus:border-transparent bg-white text-base outline-none text-gray-700 px-3 leading-8 focus:ring-2 focus:ring-secondary2 transition-colors duration-200 ease-in-out"
})
`
border-radius: 20px;
`;
export const FormLabels = styled.label.attrs({
    className: "leading-7 text-sm text-gray-400"
})``;


