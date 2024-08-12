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
        bg={colores_f.fondo}
        color={colores_f.texto}
        pl={{base:"10",md:"20",lg:"40",xl:"44"}} 
        pr={{base:"10",md:"20",lg:"40",xl:"44"}}
        pt={{base:5,md:10,lg:20}}
        pb={{base:5,md:10,lg:20}}
        alignContent={'space-between'}
        flexDirection={{base:"column",md:"row"}}
        textAlign={{base:"center",md:"start"}}
        >
            {/*izquierda*/}
            <Box
            pr={{base:0,md:15,lg:20}}>
            
                <Flex as={"p"}
                fontSize={{base:15,md:16}}
                flexDirection={{base:"column",sm:"row",md:"column"}}>
                    <Text fontFamily={logo}
                    fontSize={{base:30,md:40,lg:50}}
                    >IB
                    </Text>
                    Comprometido a sorprender superando espectativas. Me especializo en crear experiencia web para el usuario. Explora mi portfolio para sorprenderte con mi implementación de ideas a la realidad. Te invito a una nueva experiencia de usuario.
                </Flex>
            
            </Box>
            
            
            {/*Derecha*/}
            <Box as='div' border={"2px solid"} borderStyle={{base:"solid none none none",md:"none none none solid"}}
            pl={{base:0,md:15,lg:20}}
            pr={{base:0,md:2}}
            textAlign={{base:"center",md:"end"}}
            >
                <Text as={"h1"}
                fontWeight='bold'
                fontSize={{base:22,lg:32}}
                >
                Contacto
                </Text>
                <Text>Direccion: Argentina</Text>
                <Text>Mail:bogadoivan52@gmail.com</Text>
                <Flex
                justifyContent={{base:"center",lg:"flex-end"}}
                flexDirection={{base:"column",sd:"row"}}>
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



