import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: 0;
box-sizing:border-box
}
html,body, #root{
  min-height:100%;
}

body{
  background: #EFEFBB;
	background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  -webkit-font-smoothing: antialiased !important;
}


body,input , button {
  color:#222;
  font-size: 14px;
  font-family: rubik;
}

button {
  cursor: pointer
}
`;