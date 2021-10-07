import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;

        font-family: 'Saira Condensed', Arial, Helvetica, sans-serif;

        background-color: ${ ({ theme }) => theme.background };
    }
`;

export const colors = {
    primary: '#26456C',
    secondary: '#03B57F',
    background: '#EDEDED'
}