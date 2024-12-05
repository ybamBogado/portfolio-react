import { Box, Center, Flex, Image, Text } from "@chakra-ui/react"
import { FlechasR } from "../Flechas/FlechasR"

let GaleriaL=({h1,p,img,link})=>{
    return(
        <Flex 
        flexDirection={{base:"column-reverse",sm:"row"}}>
        <Image src={img} boxSize={{sm:200,lg:350}}
            
            
        ></Image>
        <Box textAlign={{base:"center",md:"end"}}>
            <Text as="h1" 
            pt={{base:2,lg:6,xl:8}}
            fontWeight='bold'
            fontSize={{base:18,lg:28}}>
                {h1}
            </Text>
            <Text fontSize={{base:15, lg:16}}
            pb={{base:8,md:10,lg:40}}>
                {p}
            </Text>
            <FlechasR texto1="ver" texto2=" más" enlace={link}/>
        </Box>
    </Flex>
    )
    
    
}
export {GaleriaL} 