import React from "react";
import {
  Box,
  Container,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
  Image,
  HStack,
  Divider,
  Heading
} from "@chakra-ui/react";
import logo from "../Navbar/image/logo_2.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const user = {
  website: "https://ikshugyawali.com.np/"
};
export default function Footer() {
  return (
    <Box bg="#E0F8FA" color="black" zIndex={1} bottom={0}>
      <Container
        as={Stack}
        maxW={"8xl"}
        px={{ base: 5, md: 12 }}
        paddingTop={10}
        paddingBottom={5}
      >
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "3fr 3fr 3fr  3fr",
            md: "3fr 2fr  2fr 4fr"
          }}
          spacing={10}
        >
          <Stack spacing={3}>
            <Box>
              <Image
                alt={"Bharosa"}
                fit={"cover"}
                align={"center"}
                width={"250px"}
                objectFit={"cover"}
                src={logo}
                mt={-10}
                ml={{ base: -5, md: 5 }}
              />
              <Text fontSize={"md"} fontWeight={"bold"} mt={-4}>
                Auditing. Digital Marketing. Education.
              </Text>{" "}
              <HStack spacing={10} mt={5} ml={{ base: 0, md: 6 }}>
                <ChakraLink
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/profile.php?id=100093153309918",
                      "_blank"
                    );
                  }}
                  _hover={{ transform: "scale(1.1)", color: "#0F8BCA" }}
                >
                  <FaFacebook fontSize={"25px"} />
                </ChakraLink>
                <ChakraLink
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/bharosamanagement/",
                      "_blank"
                    );
                  }}
                  _hover={{ transform: "scale(1.1)", color: "hotpink" }}
                >
                  <FaInstagram fontSize={"25px"} />
                </ChakraLink>
              </HStack>
            </Box>
          </Stack>
          <Stack ml={{ base: 0, xl: 10 }}>
            <HStack>
              <Heading fontSize={"20"} mb={2}>
                Company
                <Divider borderColor="#0F8BCA" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <ChakraLink
              as={Link}
              to="/"
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/about-us"}
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              About Us
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/team"}
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Members
            </ChakraLink>
          </Stack>
          <Stack ml={{ base: 0, xl: 10 }}>
            <HStack>
              {" "}
              <Heading fontSize={"20"} mb={2}>
                Services
                <Divider borderColor="#0F8BCA" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <ChakraLink
              as={Link}
              to="/services/auditing-and-taxing"
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Auditing
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/services/finincial-advice"
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Financial Advisory
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/digital-marketing"}
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Digital Marketing
            </ChakraLink>
            <ChakraLink
              as={Link}
              to={"/services/training-and-development"}
              fontWeight={"bold"}
              _hover={{ color: "#0F8BCA" }}
            >
              Training and Development
            </ChakraLink>
          </Stack>
          <Stack ml={{ base: 0, md: "7rem" }}>
            <HStack>
              <Heading fontSize={"20"} mb={2} alignContent={"center"}>
                Contact <Divider borderColor="#0F8BCA" mt={1} borderWidth={2} />
              </Heading>
            </HStack>
            <HStack>
              <ChakraLink
                fontWeight={"bold"}
                color={"black"}
                href="mailto:bharosamanagement@gmal.com"
                _hover={{ color: "#0F8BCA" }}
                
              >
                bharosamanagement@gmal.com
              </ChakraLink>
            </HStack>
              <HStack>
                <ChakraLink fontWeight={"bold"}
                color={"black"}
                href="mailto:bharosamanagement@.com"
                _hover={{ color: "#0F8BCA" }}
                >
                  Nepalgunj, Banke
                </ChakraLink>
                </HStack>
                <HStack>
                <ChakraLink
                  fontWeight={"bold"}
                  color={"black"}
                  href="tel:+9779802512661"
                  _hover={{ color: "#0F8BCA" }}
                  
                >
                  081-531618 | 9802512661
                </ChakraLink>
                </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider />
      <HStack justifyContent={"center"} bg={"green"} color={"white"} p={2}>
        <Text>
          &copy; Copyright 2023 | Bharosa Management Consultancy Pvt. Ltd. | All
          Rights Preserved | Made By{" "}
          <a href={user.website} target={'_blank'}>
            <b style={{ color: "hotpink", fontWeight: "1200" }}>
              Ikshu Gyawali
            </b>
          </a>
        </Text>
      </HStack>
    </Box>
  );
}
