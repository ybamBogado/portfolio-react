import { ChakraProvider, useDisclosure } from '@chakra-ui/react'

import { Header } from './componentes/Header/Header'
import { Main } from './componentes/Main/Main'
import { Footer } from './componentes/Footer/Footer'
import { ContactModal } from './componentes/ContactModal/ContactModal'

function App() {
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

export { App }