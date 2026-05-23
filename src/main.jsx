import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import './index.css'


// componentes
import { Header } from './componentes/Header/Header'
import { Main } from './componentes/Main/Main'
import { Footer } from './componentes/Footer/Footer'
import { ContactModal } from './componentes/ContactModal/ContactModal'
function PortafolioApp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <Header onContactClick={onOpen} />
      <Main onContactClick={onOpen} />
      <Footer onContactClick={onOpen} />
      <ContactModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortafolioApp />
  </React.StrictMode>,
)