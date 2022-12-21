import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('${props => props.theme.fontSource}');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: ${props => props.theme.backgroundColor};
        font-family: ${props => props.theme.fontFamily};
        font-size: ${props => props.theme.defaultFontSize};
    }
`;

export default GlobalStyles;