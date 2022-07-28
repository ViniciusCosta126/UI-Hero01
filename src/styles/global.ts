import { createGlobalStyle } from "styled-components";
import Bkg1 from '../assets/bg1.png'
import Bkg2 from '../assets/bg2.png'
const globalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body, #root{
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        background-image: url(${Bkg2});
        background-repeat: no-repeat;
        background-position-x: 600px;
        background-size: cover;
        font-family: 'Poppins', sans-serif;
    }
    button {
        background-color: transparent;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }
`;
export default globalStyle