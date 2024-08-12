
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
        mb={{base:2}}
        fontSize={18}
        justifyContent={{base:"center",md:"start"}}>
            <Link href={enlace}
            _hover={{textDecoration:"none", color:"white"}}>
                <Box bg={colores.marron} as={"a"} href={enlace}
                pt={{base:onabort,md:4}}
                pb={{base:0,sm:4}}
                pl={{base:0,sm:4}}>
                    {texto1}
                </Box>
                {texto2}
                <Icon as={CgArrowLongRight} w={{base:2,lg:6}} h={2}  
                transform={{sm:"scaleX(5)",md:"scaleX(10)",lg:"scaleX(14)"}}
                rotate={{base:"180"}}
                ml={{base:4,sm:6,md:10,lg:12}}
                display={{base:"none",sm:"inline"}}>
                </Icon>
            
            </Link>
            
        </Flex>
    )
}

export {FlechaL}
