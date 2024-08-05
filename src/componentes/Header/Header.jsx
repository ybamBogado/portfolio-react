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
      pr={{base:"30",lg:"40",xl:"44"}} 
      pl={{base:"30",lg:"40",xl:"44"}}
      pt={{base:"1",xl:"3",lg:"4"}}       
      flexDirection={{base:"column",lg:"row"}}
      >
      <Box color="white" 
      fontSize={{base:20,lg:50}}
      fontFamily={logo}
      >
        IB
      </Box>
      <NavBar/>
    </Flex>
  )
}