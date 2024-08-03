import { Box, Text } from "@chakra-ui/react"


let Together=({imgT})=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    return(
        <Box bgImage={imgT}
        p={{base:"50px 40px"}}
        color={colores_f.texto}>
            <Text>¿Preparado para cambiar tu trabajo?</Text>
            <Text>vamos a trabajar juntos</Text>
            
        </Box>
    )
}
export {Together}