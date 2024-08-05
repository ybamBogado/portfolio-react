import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FlechasR } from "../Flechas/FlechasR"

let GaleriaL=({h1,p,img,link})=>{
    return(
        <Flex pt={{base:10}}>
        <Image src={img} boxSize={{md:100,lg:350}}
            display={{base:"none",md:"inline"}}
        ></Image>
        <Box textAlign={{base:"center",md:"end"}}>
            <Text as="h1" 
            pt={{base:2,lg:6,xl:8}}
            fontWeight='bold'
            fontSize={{base:12,md:22,lg:24,xl:26}}>
                {h1}
            </Text>
            <Text fontSize={{base:8,sd:10,md:12, lg:15}}>
                {p}
            </Text>
            <FlechasR texto1="ver" texto2=" más" enlace={link}/>
        </Box>
    </Flex>
    )
    
    
}
export {GaleriaL} 