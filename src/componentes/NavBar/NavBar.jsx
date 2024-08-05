import { Flex,Link, textDecoration } from "@chakra-ui/react"



function NavBar() {
    return(
        <Flex
        as="nav" 
        ml={{base:"25",xl:"30",lg:"35"}} 
        
        color="#d1d1d0"
        fontSize={{base:"40",lg:"20"}}>
            <Link as={"a"} href="#inicio" mr={8}
            textDecoration={"none"}
            position={"relative"}
            _hover={{_after:{
                textDecoration:"none",
                content: '"•"',
                position: "absolute", 
                top: "10px", 
                left: "25%",
                transform:"translateX(50%)"
            }
                
            }}
            >
                    Inicio
            </Link>
            <Link href="#sobre" mr={8}
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
            <Link href="#portfolio" mr={8} 
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
            <Link href="#servicios" mr={8} 
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


