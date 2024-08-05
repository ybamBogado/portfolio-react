import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FlechaL } from "../Flechas/FlechaL"


let GaleriaR=({h1,p,img, link})=>{
    return(
        <Flex pt={{base:10}}>
        <Box textAlign="start">
            <Text as="h1" 
            pt={{base:2,lg:6,xl:8}}
            fontWeight='bold'
            fontSize={{base:22,lg:24,xl:26}}>
                {h1}
            </Text>
            <Text fontSize={{base:10, lg:15}}>
                {p}
            </Text>
            <Box>
                <FlechaL texto1="Ver " texto2=" Más" enlace={link}/>
            </Box>
            
        </Box>
            <Image src={img} boxSize={{base:350}}
            pl={{base:2 , sm:4, md:8}}></Image>
    </Flex>
    )
    
    
}

export {GaleriaR} 