import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { GaleriaR } from '../Galeria/GaleriaR'
import { GaleriaL } from '../Galeria/GaleriaL'


let Services=({imgS1,imgS2})=>{
    const colores_S={
        fondo:"#252525",
        texto:"#d1d1d0"
    }
    return(
    <Box bg={colores_S.fondo} 
    color={colores_S.texto}
    pr={{base:"44"}}
    pl={{base:"44"}}>
        <Flex>
            <Box>
                mis servicios
            </Box>
            icono flecha abajo
        </Flex>
        <GaleriaR h1="Diseño de páginas web" 
        p="Puedo plasmar tu idea de página en la realidad con mis habilidades en css y html" 
        img={imgS1}/>
        <Box pt={{base:20}}>
            <GaleriaL
        h1="Creación de aplicaciones de consola" 
        p="Puedo crearte la aplicaciones sencillas de consola para simplificar tu día a día y optimizar tareas rutinarias" 
        img={imgS2}
        />    
        </Box>
        
        </Box>
        
    )
}
export {Services}

