import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechasR } from '../Flechas/FlechasR'


let BoutMe=({imgBm})=>{
    const colores_bm={
        fondo:"#252525",
        texto:"#d1d1d0"
    }

    return(
        <Flex bg={colores_bm.fondo} color={colores_bm.texto}>
            <Image src={imgBm} 
            mt="95px" ml="177px" mb="80px" mr="50px" 
            w={"17%"}></Image>
            <Box>
                <Text as="sup">Sobre</Text>
                <Text as={"h1"}>Mi</Text>
                <Text>
                    Hola! Soy Iván Bogado, programador web full stack. Tengo bastantes proyectos que puedes visitar. Sobresalgo por el conocimiento que tengo sobre distintos campos. Mis habilidades incluyen Python, C#, MySQL, HTML y CSS
                </Text>
                <FlechasR texto1="Descar" texto2="ga cv" enlace="https://drive.usercontent.google.com/u/1/uc?id=1I3J6AwZ10S4nL3eq5dRT7mXm0o-L0BMN&export=download" />
            </Box>
        </Flex>
    )
}
export {BoutMe}
