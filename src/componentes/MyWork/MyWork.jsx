import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { CgArrowRightO } from "react-icons/cg"
let MyWork=({img,servicio,detalle, link, })=>{

    return(
        <Box

        h={{ base: "200px",sm:"300px", xl:"300px" ,"2xl":"500px"}}
        w={{ base: "200px",sm:"200px", xl:"250px","2xl":"500px"}}
bgImage={img}
backgroundSize="cover"
backgroundRepeat="no-repeat"
position="relative"
borderRadius={{ base: 4, md: 8 }}
overflow="hidden"
>
<Box
  bgGradient="linear(to-t, blackAlpha.800, transparent)"
  w="100%"
  h={{ base: "100px", md: "150px" }}
  position="absolute"
  bottom="0"
  left="0"
  display="flex"
  flexDirection="column"
  justifyContent="center"
  p={{ base: 4, md: 6 }}
>
  <Link
    as="a"
    href={link}
    _hover={{
      textDecoration: "none",
      color: "white"
    }}
  >
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" mb={1}>
        • {servicio}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} opacity={0.8}>
          {detalle}
        </Text>
      </Box>
      <Icon as={CgArrowRightO} fontSize={{ base: "2xl", md: "3xl" }} />
    </Flex>
  </Link>
</Box>
</Box>

    )
}

export {MyWork}