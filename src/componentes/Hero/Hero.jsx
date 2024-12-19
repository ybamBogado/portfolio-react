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
        pl={{base:8,md:20,lg:40,xl:44}}
        pr={{base:8,sm:10,md:0}}
        pb={{base:2,md:5, lg:20}}
        
        >
        <Flex 
        
        flexDirection={{base:"column",md:"row"}}
        
        >
            <Box as="div" text
            pt={{base:15,md:26, lg:34}}
            mx={{base:0, xl:0 }}
            textAlign={{base:"center",sm:"start"}}>
                
                <Text
                    pt={{base:10,lg:12}}
                    color={'white'}
                    fontSize={{base:"22px",lg:"30px",xl:"40px"}}>
                    Sobre Ivan Bogado
                </Text>
                <Text as={"h1"}
                color={'white'}
                fontSize={{base:"22px",lg:"30px",xl:"40px"}}
                    fontWeight='bold'
                    
                    >
                    Desarrollador Web Full Stack
                </Text>
                    <Text as={"p"}
                    fontSize={{base:"16px",xl:"25px"}}
                    textAlign={{base:"center",sm:"start"}}
                    >Perfeccionándome como desarrolador web y en camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                    <Box
                    pt={{base:1,lg:4}}>
                        <FlechaL texto1="CONTRATA" texto2="ME" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                    </Box>
                </Box>
                <Image src={imgh}
                
                pt={{base:10,sm:10,md:20, lg:38}}
                pr={{base:0,md:20,lg:40,xl:44}}
                pl={{base:0, md:40}}
                ml={{base:"auto",md:0,xl:20}}
                mr={{base:"auto",md:0}}
                h={{base:"200px",md:"400px",lg:"500px",xl:"600px"}}
                w={{base:"200px",sm:"300px",md:"600px", xl:"800px"}}
                fit="contain"
                >
                </Image>
                
        </Flex>
        <UnderHero/>
        </Box>
        
    )
}
export {Hero}
