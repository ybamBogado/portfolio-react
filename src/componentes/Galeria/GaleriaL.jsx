import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FlechasR } from "../Flechas/FlechasR"

let GaleriaL=({h1,p,img,link})=>{
    return(
        <Flex pt={{base:10}}>
        <Image src={img} boxSize={{base:300}}
        
        ></Image>
        <Box textAlign="end">
            <Text as="h1" 
            pt={{base:2,lg:6,xl:8}}
            fontWeight='bold'
            fontSize={{base:22,lg:24,xl:26}}>
                {h1}
            </Text>
            <Text fontSize={{base:10, lg:15}}>
                {p}
            </Text>
            <FlechasR texto1="ver" texto2=" más" enlace={link}/>
        </Box>
    </Flex>
    )
    
    
}
export {GaleriaL} 