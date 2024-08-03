import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FlechasR } from "../Flechas/FlechasR"

let GaleriaL=({h1,p,img})=>{
    return(
        <Flex>
        <Image src={img} boxSize={{base:350}}></Image>
        <Box textAlign="end">
            <Text>
                {h1}
            </Text>
            <Text>
                {p}
            </Text>
            <FlechasR texto1="ver" texto2=" más" enlace="#"/>
        </Box>
    </Flex>
    )
    
    
}
export {GaleriaL} 