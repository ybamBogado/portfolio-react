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
        justifyContent="flex-end"
        mt={{base:8}}
        mb={{base:2}}
        >
            <Link href={enlace}
            
            _hover={{textDecoration:"none", color:"white"}}
            >
                <Icon as={CgArrowLongLeft} w={6} h={2}  transform="scaleX(10)" mr={10}></Icon>
                {texto1}
                <Box a bg={colores.marron} as={"a"} 
                href={enlace} 
                pt={{base:4}}
                pb={{base:2}}
                pr={{base:4}}>
                {texto2}
            </Box>
            </Link>
            
        </Flex>
    )
}

export {FlechasR}
