import styled from 'styled-components'

export const UpperRowBlog = styled.div.attrs({
    className: "grid grid-cols-2 gap-4 mb-4"
})``;
export const DropdownWrapper = styled.div.attrs({
    className: "w-full flex items-center"
})``;
export const SearchWrapper = styled.div.attrs({
    className: "flex items-center justify-end"
})``;
export const BlogCardWrapper = styled.div.attrs({
    className: "p-4 md:w-1/3 w-full hidden md:block"
})``;
export const BlogCardBlock = styled.div.attrs({
    className: "p-3"
})``;
export const CardSummary = styled.p.attrs({
    className: "mt-0 text-base leading-6 text-gray-500"
})``;
export const BlogCardBorder = styled.div.attrs({
    className: "h-full border border-gray-300 shadow hover:shadow-lg transition duration-200 ease-in overflow-hidden mx-4 md:mx-0"
})``;


