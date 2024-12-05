import { Box, Flex, Image, Text,Icon } from "@chakra-ui/react"
import { FlechaL } from "../Flechas/FlechaL"
import { HiOutlineArrowLongDown } from "react-icons/hi2"


let GaleriaR=({h1,p,img, link})=>{
    return(
        <Flex pt={{base:10}}
        flexDirection={{base:"column",sm:"row"}}
        >
        <Box textAlign={{base:"center",md:"start"}}
        pr={{base:4, md:10}}
        pt={{base:2,lg:6,xl:8}}>
            <Text as="h1" 
            
            fontWeight='bold'
            fontSize={{base:18,lg:28}}>
                {h1}
                
            </Text>
            <Text fontSize={{base:15, lg:16}}
            pb={{base:8,md:10,lg:40}}>
                {p}
            </Text>
            <Box>
                <FlechaL texto1="Ver " texto2=" Más" enlace={link}/>
            </Box>
            
        </Box>
        
            <Image src={img} boxSize={{sm:200,lg:400}}
            
            ></Image>
    </Flex>
    )
    
    
}

export {GaleriaR} 