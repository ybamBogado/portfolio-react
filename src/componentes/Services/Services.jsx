import { Box, Flex, Icon, Text} from '@chakra-ui/react'
import { GaleriaR } from '../Galeria/GaleriaR'
import { GaleriaL } from '../Galeria/GaleriaL'



let Services=({imgS1,imgS2})=>{
    const colores_S={
        fondo:"#252525",
        texto:"#d1d1d0"
    }
    return(
    <Box 
    id='servicios'
    bg={colores_S.fondo} 
    color={colores_S.texto}
    pl={{base:"10",md:"20",lg:"40",xl:"44"}}
    pr={{base:"10",md:"20",lg:"40",xl:"44"}}
    pt={{base:5,md:10,lg:20}}
    pb={{base:5,md:10,lg:20}}>
        <Flex 
        flexDirection={{base:"column",lg:"row"}}
        textAlign={{base:"center",md:"start"}}>
            <Box
            >
                <Text
                color={'white'}
                fontSize={{base:"22px",lg:"30px",xl:"40px"}}>
                Mis
                </Text>
                <Text
                as={"h1"}
                fontWeight='bold'
                color={'white'}
                fontSize={{base:"22px",lg:"30px",xl:"40px"}}>
                Servicios
                </Text>
            </Box>

        </Flex>
        <GaleriaR h1="Diseño de páginas web" 
        p="Puedo plasmar tu idea de página en la realidad
        con mis habilidades en css y html" 
        img={imgS1} link="https://ybambogado.github.io/image-based-web-project/"/>
        <Box pt={{base:20}}>
            <GaleriaL
        h1="Creación de aplicaciones de consola" 
        p="Puedo crearte la aplicaciones sencillas de consola
        para simplificar tu día a día y optimizar tareas rutinarias" 
        img={imgS2}
        link="https://github.com/ybamBogado/hospital_menu"
        />    
        </Box>
                
        </Box>
        
    )
}
export {Services}

