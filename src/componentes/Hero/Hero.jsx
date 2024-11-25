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
        
        flexDirection={{base:"row"}}
        
        >
            <Box as="div" text
            pt={{base:15,md:26, lg:34}}
            textAlign={{base:"start"}}>
                <Text
                    pt={{base:10}}
                    fontSize={{base:20,lg:30}}>
                    Sobre Ivan Bogado
                </Text>
                <Text as={"h1"}
                    fontWeight='bold'
                    fontSize={{base:22,lg:32}}>
                    Diseñador Web Full Stack
                </Text>
                    <Text as={"p"}
                    fontSize={{base:16}}
                    >Perfeccionándome como desarrolador web y en camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                    <Box
                    pt={{base:1,lg:4}}>
                        <FlechaL texto1="CONTRATA" texto2="ME" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                    </Box>
                </Box>
                <Image src={imgh}
                
                pt={{base:0,sm:10,md:30, lg:38}}
                pr={{base:10,lg:40,xl:44}}
                pl={{base:20, md:40}}
                h={{base:"300px",md:"400px"}}
                w={{base:"400px",md:"600px"}}
                fit="contain"
                >
                </Image>
                
        </Flex>
        <UnderHero/>
        </Box>
        
    )
}
export {Hero}
