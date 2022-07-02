import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";
import "@fontsource/abhaya-libre";
import "@fontsource/suranna";
import "@fontsource/karla";
import "@fontsource/libre-baskerville";
import "@fontsource/archivo-narrow";
const GlobalStyles = createGlobalStyle`

${
  "" /* 
*{
    outline: 1px solid red !important;
} */
}


.roto{
    cursor: pointer;
      transition: all 0.2s ease;
}


.roto :hover {
   transform: scale(1.1);
  transition: all 0.2s ease;
 }


*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: "Libre Baskerville";
    overflow-x: hidden;
}

h1{
      font-family: "montserrat", 900;
      font-size:12rem;
}

h1,h2,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-family: "montserrat", 900;
    
}

h3{
    font-family: "karla";
    
}

.prod-bit{
    font-family: "karla";
font-weight: 200 ;
letter-spacing: 4px;
font-size:.8rem;

}



.notice-bit{
    font-family: "karla";
font-weight: bold ;
letter-spacing: 2px;
font-size:.8rem;
color: #0d6389;
margin-top: 1rem;
}

a{
    font-family: "karla", bold;
    color: inherit;
    text-decoration:none;
}

p{
    font-family: "Archivo Narrow";
    color: #73848b;
}
`;
export default GlobalStyles;
