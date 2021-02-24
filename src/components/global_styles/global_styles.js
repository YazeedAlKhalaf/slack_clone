import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvitca, Arial, Roboto, sans-serif;
        transition: all 0.5a linear;
    }
`;
