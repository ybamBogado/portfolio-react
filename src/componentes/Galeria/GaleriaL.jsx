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
            color={"white"}
            fontWeight='bold'
            >
                {h1}
            </Text>
            <Text 
            fontSize={{base:"16px",xl:"25px"}}
            ml={{base:0,md:8}}
            pb={{base:8,md:10,xl:"130px"}}>
                {p}
            </Text>
            <FlechasR texto1="ver" texto2=" más" enlace={link}/>
        </Box>
    </Flex>
    )
    
    
}
export {GaleriaL} 