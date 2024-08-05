import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { CgArrowRightO } from "react-icons/cg"
let MyWork=({img,servicio,detalle, link, })=>{

    return(
        <Box boxSize={{base:250}}
        bgImage={img} backgroundSize={"cover"}
        position="relative"
        borderRadius={{base:10}}
        >
            <Box bg={"black"} w={"100%"} 
            opacity={0.5}
            position='absolute' bottom={0} 
            >
                <Link as="a" href={link}
                _hover={{textDecoration:"none",
                    color:"white"
                }}
                >
                    <Flex>
                        <Box pr={{base:4,lg:12}}>
                            <Text opacity={1} pl={{base:2}}>•{servicio}</Text>
                        <Text opacity={1} pl={{base:2}}>{detalle} </Text>
                        </Box>
                        <Box pt={2}>
                            <Icon as={CgArrowRightO} ></Icon>
                        </Box>
                    </Flex>
            </Link>
            </Box> 
        </Box>  
    )
}

export {MyWork}