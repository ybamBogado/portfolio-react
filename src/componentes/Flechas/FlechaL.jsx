import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Flex, Link } from "@chakra-ui/react"

let FlechaL=({texto1,texto2,enlace})=>{
    const colores={
        fondo:"#212121",
        texto:"#d1d1d0",
        marron:"#a7734a"
    }
    return(
        <Flex cursor={"pointer"} alignItems={"center"}
        color={colores.texto}>
            <Link href={enlace}
            _hover={{textDecoration:"none", color:"white"}}>
                <Box bg={colores.marron} as={"a"} href={enlace}>
                    {texto1}
            </Box>
            {texto2}
            <ArrowForwardIcon/>
            </Link>
            
        </Flex>
    )
}

export {FlechaL}
// .contratame{
//     display: flex;
//     justify-items: start;
//     align-items: center;
//     flex-direction: row;
//     padding-top: 10px;
//     width: 50%;
//     cursor:pointer;
// }

// .fondo_contrateme{
//     background-color:var(--fondos_marrones);
//     padding: 20px 0px 20px 10px;
// }
// .me{
//     padding-top: 20px;
//     padding-bottom: 20px;
// }
// .contratame i{
//     /* padding-top: 10px;
//     padding-bottom: 10px; */
//     padding-left: 20px;
//     padding-right: 10px;
//     /* transform: scale(20,-11); Esto duplicará el ancho del icono */
//     transform: scaleX(5);
// }