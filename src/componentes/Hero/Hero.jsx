import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechaL } from '../Flechas/FlechaL'


let Hero=({imgh})=>{
    const colores_H={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Flex 
        as="section"
        id='inicio'
        color={colores_H.texto}
        bg={colores_H.fondo}
        flexDirection={{base:"column",md:"row"}}
        pl={{base:"10",md:"20",lg:"40",xl:"44"}}
        pb={{base:2,md:5, lg:20}}
        >
            <Box as="div" text
            pt={{base:15,md:36, lg:44}}
            textAlign={{base:"center",md:"start"}}>
                <Text as={"sup"}
                fontSize={{base:10,md:20,lg:30}}
                textTransform='uppercase'>
                Sobre Ivan Bogado</Text>
                <Text as={"h1"}
                fontWeight='bold'
                fontSize={{base:12,md:22,lg:32}}
                >Diseñador Web Full Stack</Text>
                <Text as={"p"}
                fontSize={{base:15, lg:18}}
                >Perfeccionándome como diseñador web, camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                <Box
                pt={{base:1,lg:4}}>
                    <FlechaL texto1="CONTRATA" texto2="ME" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                </Box>
            </Box>
            <Image src={imgh}
            pt={{base:20,md:30, lg:38}}
            pr={{md:"30",lg:"40",xl:"44"}}
            pl={{base:56}}
            w={{md:"40%",lg:"60%"}}
            display={{base:"none", md:"inline"}}></Image>
        </Flex>
    )
}
export {Hero}
