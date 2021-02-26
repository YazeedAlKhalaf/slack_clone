import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvitca, Arial, Roboto, sans-serif;
        transition: all 0.5a linear;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background: ${({ theme }) => theme.body};
        border-radius: 10px;
      }
    
      ::-webkit-scrollbar {
        width: 6px;
        background: ${({ theme }) => theme.body};
        border-radius: 10px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.headerBgColor};
        border-radius: 10px;
      }
`;
