import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /** Colors */
    --orange: 236, 100, 137;
    --purple: 100, 37, 236;
    --green: 37, 236, 100;
    --red: 236, 37, 85;
    --white-rgb: 255, 255, 255;
    --black-rgb: 0, 0, 0;
    --gray: 100, 100, 100;

    --primary-color: #6425ec;
    --secondary-color: #ec6425;
    --sky-blue: #3299cb;
    --bright-red: #ec2555;
    --bright-green: #25ec64;
    
    --primary-light: #f5f5f5;
    --light-gray: #bebebe;
    --median-gray: #666666;
    --dark-gray: #2e2c2c;
    
    --white: #ffffff;
    --dark: #000000;

    /** Typography */
    font-family: "Roboto Slab", "Lato", sans-serif, serif;
    font-size: var(--primary-font-size);

    --primary-font-face: "Roboto Slab";
    --secondary-font-face: "Lato";
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    min-width: auto;
    padding: 0;
    margin: 0;
    background-color: var(--primary-light);
  }

  a {
    text-decoration: none;
    color: var(--median-gray);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--sky-blue);
    }
  }
`;

export default GlobalStyle;
