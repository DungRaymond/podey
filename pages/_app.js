import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div id="mainbar" className="mainbar">
        this is main bar
      </div>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
