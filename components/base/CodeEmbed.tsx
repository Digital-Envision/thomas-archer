import { Box } from '@chakra-ui/react'
import React from 'react'

const CodeEmbed = ({ code, marginTop, marginBottom }) => {
  const createMarkup = (context) => {
    return {
      __html: context,
      context,
    }
  }

  return (
    <Box
      marginTop={marginTop}
      marginBottom={marginBottom}
      paddingX={{
        base: '1rem',
        md: '4rem',
      }}
    >
      {code && <Box dangerouslySetInnerHTML={createMarkup(code)}></Box>}
    </Box>
  )
}

export default CodeEmbed
