import { Flex } from '@chakra-ui/react'
import Footer from '@inverse/components/Footer'
import { Navbar, Banner, Products, Stats } from '@inverse/components/Landing'

export const Landing = () => (
  <Flex w="full" bgColor="purple.900" direction="column" align="center">
    <Navbar />
    <Banner />
    <Stats />
    <Products />
    <Footer />
  </Flex>
)

export default Landing
