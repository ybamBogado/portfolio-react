import { Box, Flex, Text } from '@chakra-ui/react'
import { px } from 'framer-motion'


let Footer=()=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    
    return(
        <Flex as={"footer"}
        flexDirection={'row'}
        bg={colores_f.fondo}
        color={colores_f.texto}
        p={{base:"100px 177px"}}
        alignContent={'space-between'}>
            icono
            <Text>
            Comprometido a sorprender superando espectativas. Me especializo en crear experiencia web para el usuario. Explora mi portfolio para sorprenderte con mi implementación de ideas a la realidad. Te invito a una nueva experiencia de usuario.
            </Text>
            <Box as='div' border={"2px solid"} borderStyle={"none none none solid"}
            pl={{base:"60px"}}
            pr={{base:"10px"}}>
                <Text as={"h1"}>
                Contacto
                </Text>
                <Text>Direccion: Argentina</Text>
                <Text>Mail:bogadoivan52@gmail.com</Text>
                <Box>
                    iconos redes sociales
                    {/*telegram http://t.me/ybamsas
                    insta https://www.instagram.com/ybamsas?igsh=MTNqYW81bnB0b2R6Mw== */}
                </Box>
            </Box>
        </Flex>
    )
}
export {Footer}



