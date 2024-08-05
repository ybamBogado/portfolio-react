import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechaL } from '../Flechas/FlechaL'


let Hero=({imgh})=>{
    const colores_H={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Flex id='inicio'
        color={colores_H.texto}
        bg={colores_H.fondo}
        flexDirection={{base:"column",lg:"row"}}
        pl={{base:44}}
        pb={{base:5, lg:10}}
        >
            <Box as="div" text
            pt={{base:36, lg:44}}
            >
                <Text as={"sup"}
                fontSize={{base:20,lg:30}}
                textTransform='uppercase'>
                Sobre Ivan Bogado</Text>
                <Text as={"h1"}
                fontWeight='bold'
                fontSize={{base:22,lg:32}}
                >Diseñador Web Full Stack</Text>
                <Text as={"p"}
                fontSize={{base:10, lg:15}}
                >Perfeccionándome como diseñador web, camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                <Box
                pt={{base:4}}>
                    <FlechaL texto1="CONTRATA" texto2="ME" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                </Box>
            </Box>
            <Image src={imgh}
            pt={{base:38, lg:38}}
            pr={{base:44}}
            pl={{base:56}}
            w={{base:"60%"}}
            display={{base:"none", lg:"inline"}}></Image>
        </Flex>
    )
}
export {Hero}
