import { Box, Flex, Text } from '@chakra-ui/react'

import { FlechaL } from '../Flechas/FlechaL'
import { MyWork } from '../MyWork/MyWork'

let Work=({imgW1,imgW2,imgW3})=>{
    const colores_W={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Flex 
        id='portfolio'
        bg={colores_W.fondo} color={colores_W.texto}
        pt={{base:10,md:20}} 
        pb={{base:10,md:20}}
        flexDirection={{base:"column",lg:"row"}}
        justifyItems={{base:"center"}}
        alignItems={{base:"center"}}>
            <Box
            pt={{base:20}} 
            pr={{base:20,md:60}}
            pl={{base:10,md:44}}
            >
                <Text as="sup">Mi</Text>
                <Text as={"h1"}>Trabajo</Text>
                <FlechaL texto1="Ver" texto2=" Más" enlace="https://github.com/ybamBogado?tab=repositories"/>
            </Box>
            <Flex pt={{base:2}}
            flexDirection={{base:"column",lg:"row"}}
            >
                <Box as='flex' 
                flexDirection={{base:"column",lg:"row"}}
                display={{base:"none",sm:"revert"}}>
                    <Box mr={{md:8}} mb={{md:8}}>
                        <MyWork img={imgW1} servicio="Diseño de página" detalle="inicio de sesion" link="https://ybambogado.github.io/image-based-web-project/pages/tripy.html"/>
                    </Box>
                    <Box pt={{base:2,sd:0}} 
                    pb={{base:2,sd:0}}>
                        <MyWork img={imgW2} servicio="Creaciòn de paginas" 
                        detalle="Landing page" link="https://github.com/ybamBogado/hospital_menu"/>
                    </Box>
                    
                </Box>
                <Box pt={{base:2,sd:4,md:10}}
                display={{base:"none",sm:"revert"}}>
                    <MyWork img={imgW3} servicio="Aplicaciones de consola" detalle="Menu hospital" link="https://github.com/ybamBogado/hospital_menu"/>
                </Box>
            </Flex>
        </Flex>
    )
}

export {Work}
