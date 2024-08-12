import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechasR } from '../Flechas/FlechasR'


let BoutMe=({imgBm})=>{
    const colores_bm={
        fondo:"#252525",
        texto:"#d1d1d0"
    }

    return(
        <Flex 
        id='sobre'
        bg={colores_bm.fondo} 
        color={colores_bm.texto}
        pl={{base:"10",md:"20",lg:"40",xl:"44"}} 
        pr={{base:"10",md:"20",lg:"40",xl:"44"}}
        pt={{base:5,md:10,lg:20}}
        pb={{base:5,md:10,lg:20}}
        flexDirection={{base:"column",md:"row"}}
        >
            <Image src={imgBm} 
            pt={{base:5,md:10, lg:15}}
            pr={{md:"25",lg:"40",xl:"44"}}
            w={{sm:"90%",md:"50%"}}
            display={{base:"none",md:"inline"}}>
            </Image>
            <Box textAlign={{base:"center",md:"end"}}>
                <Text
                fontSize={{base:20,lg:30}}
                >Sobre
                </Text>
                <Text as="h1"
                fontWeight='bold'
                fontSize={{base:22,lg:32}}
                >Mi
                </Text>
                <Text as="p"
                fontSize={{base:15, lg:16}}>
                Hola! Soy Iván Bogado, programador web full stack. Tengo bastantes proyectos que puedes visitar. Sobresalgo por el conocimiento que tengo sobre distintos campos. Mis habilidades incluyen Python, C#, MySQL, HTML y CSS
                </Text>
                <Box
                pt={{base:8,md:10,lg:40}}>
                    <FlechasR 
                    texto1="DESCAR"
                    texto2="GA CV" 
                    enlace="https://drive.usercontent.google.com/u/1/uc?id=1I3J6AwZ10S4nL3eq5dRT7mXm0o-L0BMN&export=download" />
                </Box>
                
            </Box>
        </Flex>
    )
}
export {BoutMe}
