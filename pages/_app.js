import '../styles/globals.css'
import { ChakraProvider, Box, Flex, Grid } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex align="center" justify="space-around" gridGap={2} h={82} fontFamily={['Rubik', 'sans-serif']}>
        <Flex align='center' justify='center' width={240} fontStyle='italic' fontFamily={['Gabriela', 'cursive']} fontWeight={900} fontSize={38} height='80px'color='#1b331c'>
          <Link href='/'>
            Pode Corn
          </Link>
        </Flex>
        <Flex align='center' justify='center' width={400} height='80px' color='#1b331c'>
          
        </Flex>
        
        <Flex align='center' justify='center' width={520} gridGap={10} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='/techlog'>
            Tech-log
          </Link>

          <Link href='/collections'>
            Collections
          </Link>
        
          <Link href='/about'>
            About
          </Link>
        </Flex>

        <Flex align='center' justify='center' width={80} gridGap={4} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='https://mail.google.com' passHref>
            <Image width={32} height={32} src='/classicGmail.png' alt='Send me an email' />
          </Link>
          <Link href='https://www.upwork.com/freelancers/~0164c3e4997c91f31f' passHref>
            <Image width={32} height={32} src='/upwork.png' alt='Have some work needs to be done?' />
          </Link>
        </Flex>

      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
