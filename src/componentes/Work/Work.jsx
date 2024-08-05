import { Box, Flex, Text } from '@chakra-ui/react'

import { FlechaL } from '../Flechas/FlechaL'
import { MyWork } from '../MyWork/MyWork'

let Work=({imgW1,imgW2,imgW3})=>{
    const colores_W={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Flex bg={colores_W.fondo} color={colores_W.texto}
        pt={{base:20}} 
        pb={{base:20}}>
            <Box
            pt={{base:20}} 
            pr={{base:60}}
            pl={{base:44}}
            >
                <Text as="sup">Mi</Text>
                <Text as={"h1"}>Trabajo</Text>
                <FlechaL texto1="Ver" texto2=" Más" enlace="https://github.com/ybamBogado?tab=repositories"/>
            </Box>
            <Flex>
                <Box as='flex'>
                    <Box mr={8} mb={8}>
                        <MyWork img={imgW1} servicio="Diseño de página" detalle="inicio de sesion" link="https://ybambogado.github.io/image-based-web-project/pages/tripy.html"/>
                    </Box>
                    <MyWork img={imgW2} servicio="Creaciòn de paginas" detalle="Landing page" link="https://github.com/ybamBogado/hospital_menu"/>
                </Box>
                <Box pt={{base:10}}>
                    <MyWork img={imgW3} servicio="Aplicaciones de consola" detalle="Menu hospital" link="https://github.com/ybamBogado/hospital_menu"/>
                </Box>
            </Flex>
        </Flex>
    )
}

export {Work}
