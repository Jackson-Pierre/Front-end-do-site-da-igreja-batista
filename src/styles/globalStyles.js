import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: var(--primary-color);
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
    cursor: default;
    }

    button, a {
        cursor: pointer;
    }

    :root {
        --primary-color: #46220F;
        --secondary-color: #AA7444;
        --background-color: #ECD9C5;
        --white: rgba(255, 255, 255, 0.8);
        --secondary-background-color: #F0C095;
        --input-color: rgba(255, 255, 255, 0.48);
        --main-button: #5F84A2;
        --secondary-button: rgba(244, 219, 219, 0.2);
        --filter: rgba(70, 34, 15, 0.5);
        --styled-font-color: #E6AA77;
        --shadow: 0px 4px 16px 0 rgba(0, 0, 0, 0.16);
    }

    html {
        background-color: var(--background-color);
        overflow-x: hidden;
        font-size: 100%; 

        @media (max-width: 1224px) {
        font-size: 90%;
        }

        @media (max-width: 1080px) {
        font-size: 74%;
        }

        @media (max-width: 900px) {
        font-size: 60%; 
        }

        @media (max-width: 768px) {
        font-size: 50%;
        }

        @media (max-width: 480px) {
        font-size: 48%;
        }
    }

    html{
    ::-webkit-scrollbar {
        width: 12px;
        height: 0px;     
    }

    ::-webkit-scrollbar-track {
        background: var(--background-color);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--secondary-color);
        border-radius: 10px; 
        border: 3px solid var(--background-color);
    }
}
`

export default GlobalStyle;