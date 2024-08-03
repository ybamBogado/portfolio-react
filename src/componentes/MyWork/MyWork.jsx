import { Box, Flex, Link, Text, textDecoration } from "@chakra-ui/react"

let MyWork=({img,servicio,detalle, link, })=>{

    return(
        <Box boxSize={{base:250}}
        bgImage={img} backgroundSize={"cover"}
        position="relative"
        borderRadius={{base:10}}>
            <Box bg={"black"} w={"100%"} 
            opacity={0.5}
            position='absolute' bottom={0} 
            >
                <Link as="a" href={link}
                _hover={{textDecoration:"none",
                    color:"white"
                }}
                
                >
                    <Text opacity={1} pl={{base:2}}>•{servicio}</Text>
                    <Text opacity={1} pl={{base:2}}>{detalle}</Text>
            </Link>
            </Box> 
        </Box>  
    )
}

export {MyWork}