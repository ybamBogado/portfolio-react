import { Center, Flex,Link, textDecoration } from "@chakra-ui/react"



function NavBar() {
    return(
        <Flex
        as="nav" 
        ml={{base:0,sm:"25",lg:"35"}}
        
        
        color={"#d1d1d0"}
        fontSize={{base:15,md:20, lg:22}}
        flexDirection={{base:"row"}}
        justify={"space-between"}
        textAlign={"Center"}>
            <Link as={"a"} href="#inicio" 
            mr={{base:2,sm:4,lg:8}}
            textDecoration={"none"}
            position={"relative"}
            _hover={{_after:{
                textDecoration:"none",
                content: '"•"',
                position: "absolute", 
                top: "10px", 
                left: "25%",
                transform:"translateX(50%)",
                color:"#ffffff"
            }
                
            }}
            >
                    Inicio
            </Link>
            <Link href="#sobre" 
            mr={{base:2,sm:4,lg:8}}
            position={"relative"} 
            _hover={{_after:{ 
                content: '"•"',position: "absolute", 
                top: "10px", 
                left: "25%",
                transform: "translateX(50%)"} 
                }}
                >
                Sobre
            </Link>
            <Link href="#portfolio" 
            mr={{base:2,sm:4,lg:8}}
            position={"relative"} 
            _hover={{_after:{ 
                content: '"•"',position: "absolute", 
                top: "10px", 
                left: "25%",
                transform: "translateX(50%)"} 
                }}
            >
                Portfolio
            </Link>
            <Link href="#servicios" 
            mr={{base:2,sm:4,lg:8}}
            position={"relative"} 
            _hover={{_after:{ 
                content: '"•"',position: "absolute", 
                top: "10px", 
                left: "25%",
                transform: "translateX(50%)"} 
                }}>
                Servicios
            </Link>
            <Link href="#a_contacto"
            mr={{base:0}}
            position={"relative"} 
            _hover={{_after:{ 
                content: '"•"',position: "absolute", 
                top: "10px", 
                left: "25%",
                transform: "translateX(50%)"} 
                }}>
                Contacto
            </Link>
        </Flex>
    )
}

export {NavBar}


