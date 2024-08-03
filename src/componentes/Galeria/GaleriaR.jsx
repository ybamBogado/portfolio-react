import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FlechaL } from "../Flechas/FlechaL"


let GaleriaR=({h1,p,img})=>{
    return(
        <Flex>
        <Box>
            <Text>
                {h1}
            </Text>
            <Text>
                {p}
            </Text>
            <FlechaL texto1="ver " texto2=" mas" enlace="#"/>
        </Box>
            <Image src={img} boxSize={{base:350}}></Image>
    </Flex>
    )
    
    
}

export {GaleriaR} 