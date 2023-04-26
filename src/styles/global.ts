import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html{
  max-width: 1440px;
  margin: 0 auto;
  
  @media(max-width: 1300px){
   margin: 0 80px;
   
  }
 }

 body{
  background: #FAFAFA;
 }
`;
