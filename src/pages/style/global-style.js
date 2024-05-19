import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        line-height: 1.2;
    }
    html{
        font-size: 62.5%;
        padding: 0;
        margin: 0;
        font-size: 62.5%;

    }
    html, body, #root {
        
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    #root .main-layout > main{
        min-height: calc(100vh - 96px);
    }
    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    span, strong{
        display: inline-block;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: inherit;
    }
    /* input 기본 스타일 초기화 */
    input {
        -webkit-border-radius: 0;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    input:focus { outline: none; }

    input::placeholder{
        color: #737373;
    }

    button {
        padding: 0;
        color: inherit;
        font-size: inherit;
        cursor: pointer;
    }
    
    /* select 기본 스타일 초기화 */
    select {
        /*webkit browsers */
        -webkit-appearance: none;
        /*Firefox */
        -moz-appearance: none;
        /* modern browsers */
        appearance: none;
        background: #fff;
        color: inherit;
    }

    /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
    input::-ms-clear { display: none; }

    /* input[type=number]에서 화살표 제거 */
    /* Chrome, Safari, Edge, Opera */
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    ::-webkit-scrollbar,
    ::-moz-scrollbar {
        display: none;
        height: 0;
    }

    b {
        font-weight: bold;
    }

    textarea {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, helvetica,
            Apple SD Gothic Neo, sans-serif;
    }

    img{
        display: block;
        max-width: 100%;
    }
`;
