import '../styles/globals.css'
import { ChakraProvider, Box, Flex, Grid } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex align="center" justify="space-between" gridGap={2} h={82} fontFamily={['Rubik', 'sans-serif']}>
        <Flex align='center' justify='center' width={200} fontStyle='italic' fontWeight={900} fontSize={26} height='80px'color='#1b331c'>
          <Link href='/'>
            Pode Corn
          </Link>
        </Flex>
        <Flex align='center' justify='center' width={400} height='80px' color='#1b331c'>
          
        </Flex>
        
        <Flex align='center' justify='center' width={160} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='/techlog'>
            Tech-log
          </Link>
        </Flex>
        <Flex align='center' justify='center' width={160} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='/collections'>
            Collections
          </Link>
        </Flex>
        <Flex align='center' justify='center' width={160} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='/about'>
            About
          </Link>
        <Flex align='center' justify='center' width={24} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='https://mail.google.com' passHref>
            <Image width={24} height={24} src='/../public/Gmail_icon_(2020).svg.png' alt='Send me an email' />
          </Link>
        </Flex>
        </Flex>
        <Flex align='center' justify='center' width={24} height='80px' fontWeight={700} fontSize={18} color='#1b331c'>
          <Link href='https://www.upwork.com/freelancers/~0164c3e4997c91f31f' passHref>
            <Image width={24} height={24} src='/../public/upwork.ico' alt='Have some work needs to be done?' />
          </Link>
        </Flex>
      </Flex>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
