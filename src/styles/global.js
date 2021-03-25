import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: radial-gradient(#344b60, #0B1F31);
    min-height: 100vh;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1:before {
    content: '< ';
    color: #00BFD9;
  }

  h1:after {
    content: ' />';
    color: #00BFD9;
  }

  h1 {
    font-weight: 700;
    font-size: 3rem;
  }

  p { 
    color: #FEFEFEAA;
    text-align: center;
  }


`;
