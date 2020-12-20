import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    }

    body{
      background:#F5F5F5;
      color: #100802;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
    }
`;