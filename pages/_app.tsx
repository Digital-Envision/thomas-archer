import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'styles/theme'
import '../public/styles/fonts.css'
import '../public/styles/scrollbox.css'
import '../public/styles/hubspot.scss'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export default function App({ Component, pageProps }: AppProps) {
  const GTMId = process.env.NEXT_PUBLIC_GTM_ID

  useEffect(() => {
    if (GTMId) {
      TagManager.initialize({ gtmId: GTMId })
    }
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
