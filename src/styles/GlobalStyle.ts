import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
  .App {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    border: 1px solid red;
    width: 200px;
    height: 100vh;
  }
  .right {
    border: 1px solid green;
    width: calc(100% - 210px);
    height: 100vh;
  }
`
