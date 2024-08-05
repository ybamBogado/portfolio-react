import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { LiaTelegramPlane,LiaInstagram  } from "react-icons/lia";
import "@fontsource/protest-guerrilla"

let Footer=()=>{
    const colores_f={
        fondo:"#0c0c0c",
        texto:"#d1d1d0"
    }
    const logo="'Protest Guerrilla', sans-serif"
    return(
        
        <Flex 
        id='a_contacto'
        as={"footer"}
        flexDirection={'row'}
        bg={colores_f.fondo}
        color={colores_f.texto}
        pl={{base:"10",md:"20",lg:"40",xl:"44"}} 
        pr={{base:"10",md:"20",lg:"40",xl:"44"}}
        pt={{base:5,md:10,lg:20}}
        pb={{base:5,md:10,lg:20}}
        alignContent={'space-between'}
        flexDirection={{base:"column",lg:"row"}}
        >
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <Text>
                <Text fontFamily={logo}
                fontSize={{base:20,lg:50}}
                >IB</Text>
            Comprometido a sorprender superando espectativas. Me especializo en crear experiencia web para el usuario. Explora mi portfolio para sorprenderte con mi implementación de ideas a la realidad. Te invito a una nueva experiencia de usuario.
            </Text>
            <Box as='div' border={"2px solid"} borderStyle={{base:"solid none none none",lg:"none none none solid"}}
            pl={{base:"60px"}}
            pr={{base:"10px"}}
            textAlign={{base:"center",lg:"end"}}
            
            >
                <Text as={"h1"}
                fontWeight='bold'
                
                >
                Contacto
                </Text>
                <Text>Direccion: Argentina</Text>
                <Text>Mail:bogadoivan52@gmail.com</Text>
                <Flex
                justifyContent={{base:"center",lg:"flex-end"}}
                flexDirection={{base:"column",lg:"row"}}>
                    <Link href='http://t.me/ybamsas'>
                        <Icon as={LiaTelegramPlane}
                        w={{base:6}} h={{base:6}}></Icon>
                    </Link>
                    <Link href='https://www.instagram.com/ybamsas?igsh=MTNqYW81bnB0b2R6Mw=='>
                        <Icon as={LiaInstagram}
                        w={{base:6}} h={{base:6}}></Icon>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}
export {Footer}



