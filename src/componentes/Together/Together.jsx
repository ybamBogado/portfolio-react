import { Box, Icon, Text } from "@chakra-ui/react"
import { HiOutlineArrowLongDown } from "react-icons/hi2"

let Together=({imgT})=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    return(
        <Box bgImage={imgT}
        pl={{base:"8",md:"15",lg:"40",xl:"44"}} 
        pr={{base:"8",md:"15",lg:"40",xl:"44"}} 
        pt={{base:5,md:10,lg:20}}
        pb={{base:5,md:10,lg:20}}
        color={colores_f.texto}
        textAlign="center">
            <Text fontSize={{base:18,lg:28}}>
            ¿Preparado para cambiar tu trabajo?
            </Text>
            <Box pt={{base:4,md:6,lg:10}} >
                <Icon as={HiOutlineArrowLongDown}
            transform={{base:"scaleY(2)",lg:"scaleY(4)"}}></Icon>
            </Box>
            
            <Text as="h1" fontWeight='bold'
            fontSize={{base:20,sm:30,lg:40}}
            >Vamos A Trabajar Juntos</Text>
            
        </Box>
    )
}
export {Together}