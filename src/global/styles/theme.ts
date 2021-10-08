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
    primary_light: '#405F87',
    secondary: '#03B57F',
    background: '#EDEDED',
    gray_light: '#D9DCE0',
    white: '#FFFFFF'
}