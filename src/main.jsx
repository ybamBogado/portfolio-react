import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
//componentes
import { Header } from './componentes/Header/Header'
import { Main } from './componentes/Main/Main'
import { Footer } from './componentes/Footer/Footer'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChakraProvider>
      <Header/>
      <Main/>
      <Footer/>
    </ChakraProvider>
  </React.StrictMode>,
)
