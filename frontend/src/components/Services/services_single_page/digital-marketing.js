import React from "react";
import {
  Center,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Box,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  OrderedList,
  ListItem,
  Link
} from "@chakra-ui/react";
import Banner3 from "../../Home/image/Banner3.png";

export default function WebDevelopment() {
  return (
    <Container
      minW="100%"
      bgColor={useColorModeValue("white", "#1A202C")}
      mb={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} ba>
        <Stack
          id="web-development"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          ml={{ base: 0, md: "3rem" }}
          order={{ base: 1, md: 0 }}
        >
          <Center>
            <Heading
              fontWeight={"italic"}
              className="section_title"
              color={useColorModeValue("#042483", "white")}
              mt={{ base: "1rem", md: "2rem" }}
            >
              Digital Marketing
            </Heading>
          </Center>
          <Text
            color={useColorModeValue("#242424", "white")}
            fontSize={"lg"}
            align={"justify"}
          >
            At Bharosa Management Consultancy, we understand the importance of
            having a strong online presence in today's digital world. That's why
            we offer comprehensive web development services to help our clients
            build and maintain a professional, user-friendly website that
            showcases their brand and reaches their target audience. Members of
            experts has extensive experience in developing high-quality,
            responsive websites that provide a great user experience for our
            clients' customers. Whether you're looking to build a new website or
            revamp an existing one, we have the skills and experience to help
            you achieve your goals.
          </Text>
        </Stack>
        <Flex>
          <Box
            boxSize={{ base: "100%", lg: "550px", xl: "550px" }}
            ml={{ base: 0, lg: 12, xl: 12 }}
            mt={{ base: "2rem", md: "10rem" }}
          >
            {" "}
            <Image
              width={"100%"}
              rounded={"md"}
              alt={"feature image"}
              src={Banner3}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
