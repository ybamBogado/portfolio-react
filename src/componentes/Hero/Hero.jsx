import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { FlechaL } from '../Flechas/FlechaL'


let Hero=({imgh})=>{
    const colores_H={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
        <Flex id='inicio'
        color={colores_H.texto}
        bg={colores_H.fondo}>
            <Box as="div" text
            ml={{base:"177px"}} mr={{base:"225px"}} mt="149px">
                <Text as={"sup"}
                fontSize={"35px"}
                pt="10px">
                    Sobre Ivan Bogado</Text>
                <Text as={"h1"}>Diseñador Web Full Stack</Text>
                <Text as={"p"}>Perfeccionándome como diseñador web, camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad</Text>
                <Box
                pt={{base:"20px"}}>
                    <FlechaL texto1="contrata" texto2="me" enlace="https://github.com/ybamBogado?tab=repositories" color={colores_H.flecha}/>
                </Box>
            </Box>
            <Image src={imgh} 
            mt="95px" mr="177px" mb="80px" ml="50px" 
            w={"17%"}></Image>
        </Flex>
    )
        
        //seccion 1 hero
        // <section class="hero" id="inicio">
        
        //     <div class="presentacion">
        //         <div class="herotext">
        //             <sup>Sobre Ivan Bogado </sup>
        //             <h1><b>Diseñador Web Full Stack</b></h1>
        //             <p>Perfeccionándome como diseñador web, camino a ser analista programador. Recorre mi portafolio para ver mi capacidad de traer tus ideas a la realidad.</p>
        //             <a class="contratame" href="https://github.com/ybamBogado?tab=repositories">
        //                 <h3 class="fondo_contrateme">contrata</h3>
        //                 <h3 class="me">me </h3>
        //                 <i class=" bi bi-arrow-right"></i>
        //             </a> 

        //         </div>

        //         <div class="hero-inferior">
        //             <div class="hero_contacto">
        //                 <h2>Contacto</h2>
        //                 <a href="bogadoivan52@gmail.com">bogadoivan52@gmail.com</a>
        //             </div>
        //             <div class="hero_sigueme">
        //                 <h2>Sigueme</h2>
        //                 <div class="vinculos">
        //                     <a class="bordea" href="https://www.linkedin.com/in/ivan-bogado-40b03422b/">Linkedin</a>
        //                     <a class="git_a" href="https://github.com/ybamBogado">Github</a>
        //                 </div>
                        
        //             </div>
                    
        //             <i class="header_icon bi bi-arrow-down"></i>
        //         </div>
        //     </div>  
        //     <img src={imgh} alt="foto ybam" />
                
        // </section>
  
}
export {Hero}
