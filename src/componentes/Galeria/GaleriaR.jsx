import { Box, Flex, Image, Text,Icon } from "@chakra-ui/react"
import { FlechaL } from "../Flechas/FlechaL"
import { HiOutlineArrowLongDown } from "react-icons/hi2"


let GaleriaR=({h1,p,img, link})=>{
    return(
        <Flex pt={{base:10}}>
        <Box textAlign={{base:"center",md:"start"}}>
            <Text as="h1" 
            pt={{base:2,lg:6,xl:8}}
            fontWeight='bold'
            fontSize={{base:12,md:22,lg:24,xl:26}}>
                {h1}
                
            </Text>
            <Text fontSize={{base:8,sd:10,md:12, lg:15}}>
                {p}
            </Text>
            <Box>
                <FlechaL texto1="Ver " texto2=" Más" enlace={link}/>
            </Box>
            
        </Box>
        
            <Image src={img} boxSize={{md:100,lg:350}}
            display={{base:"none",md:"inline"}}
            pl={{base:2 , sm:4, md:8}}></Image>
    </Flex>
    )
    
    
}

export {GaleriaR} 