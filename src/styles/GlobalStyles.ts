import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --light-blue: rgb(230,236,245);
    --dark-pink: rgb(244,187,183);
    --light-pink: rgb(243,236,233);
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
/*
colors:
background blue: rgb(199,210,225)
folder dark blue: rgb(150,169,208)
light blue: rgb(230,236,245)
header blue: rgb(195,210,234)
header background dark pink: rgb(244,187,183)
medium pink: rgb(241,221,216)
light pink: rgb(243,236,233)
*/

export default GlobalStyles;