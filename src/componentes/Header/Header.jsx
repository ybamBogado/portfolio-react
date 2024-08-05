import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { NavBar } from '../NavBar/NavBar'
import "@fontsource/protest-guerrilla"

export const Header = () => {
  const logo="'Protest Guerrilla', sans-serif"
  return(
    <Flex 
      as="header"
      align="center"
      justify={"space-between"}
      
      bg="#212121"
      pr={{base:"10",md:"20",lg:"40",xl:"44"}} 
      pl={{base:"20",md:"20",lg:"40",xl:"44"}}
      pt={{base:"1",md:2,lg:"3"}}       
      flexDirection={{base:"column",lg:"row"}}
      >
      <Box color="white" 
      fontSize={{base:20,md:30,lg:50}}
      fontFamily={logo}
      textAlign="center"
      >
        IB
      </Box>
      <NavBar/>
    </Flex>
  )
}