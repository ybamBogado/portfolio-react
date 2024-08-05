import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechasR } from '../Flechas/FlechasR'


let BoutMe=({imgBm})=>{
    const colores_bm={
        fondo:"#252525",
        texto:"#d1d1d0"
    }

    return(
        <Flex bg={colores_bm.fondo} 
        color={colores_bm.texto}
        fontSize={{base:"40",lg:"20"}}
        pl={{base:44}} 
        pr={{base:44}} 
        pt={{base:20}}
        pb={{base:20}}
        >
            <Image src={imgBm} 
            pt={{base:10, lg:15}}
            pr={{base:44}}
            w={{base:"50%"}}
            display={{base:"none", lg:"inline"}}></Image>
            <Box
            textAlign="end">
                <Text
                fontSize={{base:20,lg:30}}
                textTransform='uppercase'
                >Sobre</Text>
                <Text as="h1"
                fontWeight='bold'
                fontSize={{base:22,lg:32}}
                >Mi</Text>
                <Text as="p"
                fontSize={{base:10, lg:15}}>
                    Hola! Soy Iván Bogado, programador web full stack. Tengo bastantes proyectos que puedes visitar. Sobresalgo por el conocimiento que tengo sobre distintos campos. Mis habilidades incluyen Python, C#, MySQL, HTML y CSS
                </Text>
                <Box
                pt={{base:40}}>
                    <FlechasR texto1="DESCAR" texto2="GA CV" enlace="https://drive.usercontent.google.com/u/1/uc?id=1I3J6AwZ10S4nL3eq5dRT7mXm0o-L0BMN&export=download" />
                </Box>
                
            </Box>
        </Flex>
    )
}
export {BoutMe}
