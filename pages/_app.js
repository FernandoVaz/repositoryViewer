import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2F4F4F;
    color: #ffffff;
  }

  .repository-component {
    display: grid;
    color: #000000;
    @media(min-width: 860px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width: 450px) {
      grid-template-columns: 1fr;
    }
    @media(max-width: 250px) {
      grid-template-columns: 1fr;
    }
    padding: 5px;
    grid-gap: 5px;
    word-wrap: break-word;
    font-size: 12px;
    list-style: none;
    li {
      margin-left: 0px;
      a {
        padding: 5px;
        display: block;
        min-width: 200px;
        min-height: 35px;
        border: 1px solid black;
        background-color: white;
        color: black;
        text-align: center;
        text-decoration: none;
      }
      a:hover, visited {
        background-color: #FAFAD2;
      }
    }
  }

  .repo-owner-image {
    max-width: 12px;
    max-height: 12px;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
