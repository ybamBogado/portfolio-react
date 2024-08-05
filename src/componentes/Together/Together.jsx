import { Box, Icon, Text } from "@chakra-ui/react"
import { HiOutlineArrowLongDown } from "react-icons/hi2"

let Together=({imgT})=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    return(
        <Box bgImage={imgT}
        pl={{base:44}} 
        pr={{base:44}} 
        pt={{base:20}}
        pb={{base:20}}
        color={colores_f.texto}
        textAlign="center">
            <Text >¿Preparado para cambiar tu trabajo?</Text>
            <Box  pt={{base:2,md:6,lg:10}} >
                <Icon as={HiOutlineArrowLongDown}
            transform="scaleY(4)"></Icon>
            </Box>
            
            <Text as="h1" fontWeight='bold'>Vamos A Trabajar Juntos</Text>
            
        </Box>
    )
}
export {Together}