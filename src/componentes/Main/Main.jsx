import { Hero } from '../Hero/Hero'
import { BoutMe } from '../BoutMe/BoutMe'
import { Work } from '../Work/Work'
import { Together } from '../Together/Together'
import { Services } from '../Services/Services'
import "@fontsource-variable/anek-devanagari"
import { Box } from '@chakra-ui/react'

let Main=()=>{
    const imagenes={
        "img_hero":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/ivan-hero.jpeg",
        "img_about":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/ivan-s2.jpeg",
        "img_inicio_sesion":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/inicio_de_sesion.jpg",
        "img_python":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/proyecto_py.jpg",
        "img_landing":"https://github.com/ybamBogado/portfolio-web/blob/main/img/proyecto_sobre_mi.jpg?raw=true",
        "img_Diseno":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/servicios_1.jpeg",
        "img_Creacion":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/servicios_2.jpeg",
        "img_Together":"https://raw.githubusercontent.com/ybamBogado/portfolio-web/main/img/trabajemos_juntos.jpeg",
        "Img_ecommerce":"https://github.com/ybamBogado/portfolio-web/blob/main/img/ecomerce.jpg?raw=true",
        "fuente":"'Anek Devanagari', sans-serif, serif"
    }
    return(
        <main>
            <Box fontfamily={imagenes.fuente}>
                <Hero imgh={imagenes.img_hero}/>
                <BoutMe imgBm={imagenes.img_about}/>
                <Work imgW1={imagenes.img_inicio_sesion} imgW2={imagenes.img_landing} imgW3={imagenes.img_python} imgW4={imagenes.Img_ecommerce}/>
                <Services imgS1={imagenes.img_Diseno} imgS2={imagenes.img_Creacion}/>
                <Together imgT={imagenes.img_Together}/>
            </Box>
            
        </main>
    )
}

export {Main}