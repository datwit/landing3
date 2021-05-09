import styled from "styled-components"

export const MapWrapper = styled.div.attrs({
    className: "w-full md:w-1/2 lg:w-2/3 relative"
})``;
export const FormBlock = styled.div.attrs({
    className: "w-full md:w-1/2 lg:w-1/3 pl-10"
})``;
export const FormIntro = styled.p.attrs({
    className: "leading-relaxed m-0 text-gray-600"
})``;
export const InputWrapper = styled.div.attrs({
    className: "relative mb-2"
})``;
export const ExplanationForm = styled.p.attrs({
    className: "text-xs text-gray-500 mt-3"
})``;
export const FInput = styled.input.attrs({
    className: "w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
})``;
export const TInput = styled.textarea.attrs({
    className: "w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
})``;
export const FormLabels = styled.label.attrs({
    className: "leading-7 text-sm text-gray-600"
})``;


