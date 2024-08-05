
import { Box, Flex, Icon, Link } from "@chakra-ui/react"
import { CgArrowLongRight } from "react-icons/cg";

let FlechaL=({texto1,texto2,enlace})=>{
    const colores={
        fondo:"#212121",
        texto:"#d1d1d0",
        marron:"#a7734a"
    }
    return(
        <Flex cursor={"pointer"} alignItems={"center"}
        color={colores.texto}
        mt={{base:8}}
        mb={{base:2}}>
            <Link href={enlace}
            _hover={{textDecoration:"none", color:"white"}}>
                <Box bg={colores.marron} as={"a"} href={enlace}
                pt={{base:4}}
                pb={{base:4}}
                pl={{base:4}}>
                    {texto1}
            </Box>
            {texto2}
            <Icon as={CgArrowLongRight} w={6} h={2}  
            transform="scaleX(10)" 
            ml={10}></Icon>
            
            </Link>
            
        </Flex>
    )
}

export {FlechaL}
