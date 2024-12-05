import { Box, Flex, Link, Text} from '@chakra-ui/react'

let UnderHero=()=>{
    return(
        <Flex
        pt={{base:4,md:12,lg:20}}
        flexDirection={{base:"column",md:"row"}}
        textAlign={{base:"center"}}
        mx={{base:0,xl:40}}
        >
            <Box pr={{base:2,md:8,lg:10}}
            >
                <Text as={"h1"}
                    fontWeight='bold'
                    fontSize={{base:8,md:12,lg:22}}
                    >Contacto</Text>
                <Text
                fontSize={{base:15, lg:18}}
                >bogadoivan52@gmail.com</Text>
            </Box>
            <Box>
                <Text 
                as={"h1"}
                fontWeight='bold'
                fontSize={{base:8,md:12,lg:22}}
                >Sigueme</Text>
                <Link href='https://www.linkedin.com/in/ivan-bogado-40b03422b/'
                pr={{base:2,md:6,lg:10}}
                border={"2px solid"} 
                borderStyle={{base:"none solid none none"}}
                _hover={{textDecoration:"none",
                    color:"white"
                }}>Linkedin</Link>
                <Link href='https://github.com/ybamBogado'
                pl={{base:2,md:6,lg:10}}
                fontSize={{base:15, lg:18}}
                _hover={{textDecoration:"none",
                    color:"white"
                }}>Github</Link>
            </Box>
        </Flex>
    )
}
export {UnderHero}