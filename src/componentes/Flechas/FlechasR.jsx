import { ArrowBackIcon} from "@chakra-ui/icons"
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
        >
            <Link href={enlace}
            
            _hover={{textDecoration:"none", color:"white"}}
            >
                <Icon as={ArrowBackIcon}></Icon>
                {texto1}
                <Box a bg={colores.marron} as={"a"} href={enlace}>
                {texto2}
            </Box>
            </Link>
            
        </Flex>
    )
}

export {FlechasR}
