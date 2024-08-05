import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { LiaTelegramPlane,LiaInstagram  } from "react-icons/lia";
import "@fontsource/protest-guerrilla"

let Footer=()=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    const logo="'Protest Guerrilla', sans-serif"
    return(
        
        <Flex 
        id='a_contacto'
        as={"footer"}
        flexDirection={'row'}
        bg={colores_f.fondo}
        color={colores_f.texto}
        p={{base:"100px 177px"}}
        alignContent={'space-between'}
        >
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <Text>
                <Text fontFamily={logo}
                fontSize={{base:20,lg:50}}
                >IB</Text>
            Comprometido a sorprender superando espectativas. Me especializo en crear experiencia web para el usuario. Explora mi portfolio para sorprenderte con mi implementación de ideas a la realidad. Te invito a una nueva experiencia de usuario.
            </Text>
            <Box as='div' border={"2px solid"} borderStyle={"none none none solid"}
            pl={{base:"60px"}}
            pr={{base:"10px"}}
            textAlign={'end'}>
                <Text as={"h1"}
                fontWeight='bold'
                justifyContent="end"
                >
                Contacto
                </Text>
                <Text>Direccion: Argentina</Text>
                <Text>Mail:bogadoivan52@gmail.com</Text>
                <Flex
                justifyContent="flex-end"
                flexDirection={"row"}>
                    <Link href='http://t.me/ybamsas'>
                        <Icon as={LiaTelegramPlane}
                        w={{base:6}} h={{base:6}}></Icon>
                    </Link>
                    <Link href='https://www.instagram.com/ybamsas?igsh=MTNqYW81bnB0b2R6Mw=='>
                        <Icon as={LiaInstagram}
                        w={{base:6}} h={{base:6}}></Icon>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}
export {Footer}



