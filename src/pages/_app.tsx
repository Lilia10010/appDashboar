import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDraweContext'
import { makeServer } from '../../services/mirage'

//para inicializar o servidor do mirage
//verificar se está rodando em ambiente de desenvolvimento
//(variável setada de forma automatica pelo next)

if(process.env.NODE_ENV === 'development'){
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
    )
}

export default MyApp
