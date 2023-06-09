import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body{
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

#root {        
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #010101;
}


#root > div{        

  background-color:#f5ffee;
  margin: 20px 0;
  padding: 5px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
}

 button:hover{
  cursor: pointer;
 }
`;
