import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css");
.spoka * {
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800;900&display=swap");
@font-face {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  src: url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
  font-style: normal;
}

@font-face {
  font-family: "Montserrat", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;700;800;900&display=swap")
    format("ans-serif");
  font-style: normal;
  unicode-range: U+0041-005A, U+0061-007A;
}
html {
  font-family: "Spoqa Han Sans Neo";
  font-family: "Montserrat";
  width: 100vw;
}
  body {
    width: 90%;
    margin: 0 auto;
  }
 .GstInputWarpper {
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
 } 
 button {
  transition: all 0.3s;
  font-weight: 4000;
  border-radius: 50px;
  cursor: pointer;
 }
 
`;

export default GlobalStyle;
