import { Box, Flex, Image,  Text} from '@chakra-ui/react'
import { FlechaL } from '../Flechas/FlechaL'
import { UnderHero } from '../UnderHero/UnderHero'


let Hero=({imgh})=>{
    const colores_H={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Box
        as="section"
        id='inicio'
        color={colores_H.texto}
        bg={colores_H.fondo}
        pl={{base:2,sm:10,md:20,lg:40,xl:44}}
        pr={{base:2,sm:10,md:0}}
        pb={{base:2,md:5, lg:20}}
        >
        <Flex 
        
        flexDirection={{base:"column",md:"row"}}
        
        >
            <Box as="div" text
            pt={{base:15,md:36, lg:44}}
            textAlign={{base:"center",md:"start"}}>
                <Text
                    fontSize={{base:20,lg:30}}>
                    Sobre Ivan Bogado</Text>
                    <Text as={"h1"}
                    fontWeight='bold'
                    fontSize={{base:22,lg:32}}
                    >Diseñador Web Full Stack</Text>
                    <Text as={"p"}
                    fontSize={{base:15,md:16}}
                    >Perfeccionándome como diseñador web, camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                    <Box
                    pt={{base:1,lg:4}}>
                        <FlechaL texto1="CONTRATA" texto2="ME" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                    </Box>
                </Box>
                <Image src={imgh}
                
                pt={{base:0,sm:10,md:30, lg:38}}
                pr={{base:20,lg:40,xl:44}}
                pl={{base:20, md:40}}
                w={{md:"60%"}}
                >
                </Image>
                
        </Flex>
        <UnderHero/>
        </Box>
        
    )
}
export {Hero}
