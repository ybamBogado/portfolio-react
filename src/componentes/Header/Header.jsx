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
      pr={{base:"0",md:"20",lg:"40",xl:"44"}} 
      pl={{base:"0",md:"20",lg:"40",xl:"44"}}
      pt={{base:"1",md:2,lg:"3"}}       
      flexDirection={{base:"column",lg:"row"}}
      >
      <Box color="white" 
      fontSize={{base:30,md:40,lg:50}}
      fontFamily={logo}
      textAlign="center"
      pl={{base:8,md:0}}
      >
        IB
      </Box>
      <NavBar/>
    </Flex>
  )
}