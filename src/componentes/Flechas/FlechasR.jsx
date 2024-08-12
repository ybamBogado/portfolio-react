import { CgArrowLongLeft } from "react-icons/cg";
import { Box, Flex, Icon, Link} from "@chakra-ui/react"

let FlechasR=({texto1,texto2,enlace})=>{
    const colores={
        fondo:"#212121",
        texto:"#d1d1d0",
        marron:"#a7734a"
    }
    return(
        <Flex cursor="pointer"
        
        color={colores.texto}
        justifyContent={{base:"center",md:"flex-end"}}
        >
            <Link href={enlace}
            
            _hover={{textDecoration:"none", color:"white"}}
            >
                <Icon as={CgArrowLongLeft} w={{base:2,lg:6}} h={2}
                transform={{sm:"scaleX(5)",md:"scaleX(10)",lg:"scaleX(14)"}} 
                mr={{base:4,sm:6,md:10,lg:12}}
                display={{base:"none",sm:"inline"}}
                >
                </Icon>
                {texto1}
                <Box a bg={colores.marron} as={"a"} 
                href={enlace} 
                pt={{base:0,sm:4}}
                pb={{base:0,sm:2}}
                pr={{base:0,sm:4}}>
                {texto2}
                </Box>
            </Link>
            
        </Flex>
    )
}

export {FlechasR}
