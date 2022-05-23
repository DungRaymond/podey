import '../styles/globals.css'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex align="center" justify="space-between" h={82}>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Pode Corn
        </Flex>
        <Flex align='center' justify='center' width={360} height='80px' bg='gray.500' color='#fff'>
          
        </Flex>
        
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Tech-log
        </Flex>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Collection
        </Flex>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          About
        </Flex>
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
