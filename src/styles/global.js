import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  } 

  body {
    background: #eee
  }

  input,
  button {
    border: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`