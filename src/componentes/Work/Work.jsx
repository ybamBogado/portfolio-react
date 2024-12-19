import { Box, Flex, Text } from '@chakra-ui/react'

import { FlechaL } from '../Flechas/FlechaL'
import { MyWork } from '../MyWork/MyWork'

let Work=({imgW1,imgW2,imgW3,imgW4})=>{
    const colores_W={
        fondo:"#212121",
        texto:"#d1d1d0"
    }
    return(
    <Flex
      id="portfolio"
      bg="#212121"
      color="#d1d1d0"
      pt={10}
      pb={10}
      flexDirection={{ base: "column", md: "row" }}
      justifyItems={{ base: "center" }}
      alignItems={{ base: "center" }}
    >
      <Box
        pt={{ base: 10, sm: 8, md: 0 }}
        pr={{ base: 0, md: 20, lg: 44, xl: "300px" }}
        pl={{ base: 0, md: 20, lg: 44 }}
        textAlign={{ base: "center", md: "start" }}
      >
        <Text color="white" fontSize={{ base: "28px", lg: "36px", xl: "40px" }} lineHeight={1.2}>
          Mi
        </Text>
        <Text as="h1" fontWeight="extrabold" color="white" fontSize={{ base: "28px", lg: "36px", xl: "40px" }} lineHeight={1.2}>
          Trabajo
        </Text>
        <FlechaL texto1="Ver" texto2="Más" enlace="https://github.com/ybamBogado?tab=repositories" />
      </Box>
        {/* grupo de columna imagenes 1 y 2 */}
      <Box as="flex">
          <Box mr={{ base: 2, md: 4 }} mb={{ md: 4 }}>
            <MyWork
              img={imgW1}
              servicio="Diseño de página"
              detalle="inicio de sesion"
              link="https://ybambogado.github.io/image-based-web-project/pages/tripy.html"
              bgGradient="linear(to-t, blackAlpha.800, transparent)"
            />
          </Box>
          <Box mr={{ base: 2, md: 4 }} mb={{ md: 4 }} pt={{ base: 4, md: 0 }}>
            <MyWork
              img={imgW2}
              servicio="Creaciòn de paginas"
              detalle="Landing page"
              link="https://ybambogado.github.io/tp_opcional_2/"
              bgGradient="linear(to-t, blackAlpha.800, transparent)"
            />
          </Box>
      </Box>

      {/* grupo de columna imagenes 3 y 4 */}
      
      <Flex
      flexDirection={{ base: "column"}}>
        <Box pt={{ base: 4, md: 10 }}>
          <MyWork
          img={imgW3}
          servicio="Aplicaciones de consola"
          detalle="Menu hospital"
          link="https://github.com/ybamBogado/hospital_menu"
          bgGradient="linear(to-t, blackAlpha.800, transparent)"
        />
        </Box>
        <Box 
            mr={{ base: 2, md: 4 }} 
            mb={{ md: 4 }} 
            pt={{ base: 4, md: 0 }}>
              <MyWork
              img={imgW4}
              servicio="Creaciòn de Ecommerce"
              detalle="Página para ventas"
              link="https://tpf-e-commerce.onrender.com/tienda/"
              bgGradient="linear(to-t, blackAlpha.800, transparent)"
              />
          </Box>
      </Flex>
    
  </Flex>
    )
}

export {Work}
