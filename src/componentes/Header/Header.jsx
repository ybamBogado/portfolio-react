import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { NavBar } from '../NavBar/NavBar'


export const Header = () => {
  return(
    <Flex 
      as="header"
      align="center"
      justify={"space-between"}
      p={4}
      bg="#212121"
      >
      <Box color="white" pl="155px">
        IB
      </Box>
      <NavBar/>
    </Flex>
  )
}