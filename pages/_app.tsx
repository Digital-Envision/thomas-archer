import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'styles/theme'
import '../public/styles/fonts.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
