import '../styles/globals.css'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex align="center" justify="space-between" h={82}>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Logo
        </Flex>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Logo
        </Flex>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Logo
        </Flex>
        <Flex align='center' justify='center' width={180} height='80px' bg='gray.500' color='#fff'>
          Logo
        </Flex>
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
