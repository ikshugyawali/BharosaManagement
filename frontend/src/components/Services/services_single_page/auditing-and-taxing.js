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
import Banner1 from "../../Home/image/Banner1.png";

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
              Auditing and Taxation
            </Heading>
          </Center>
          <Text
            color={useColorModeValue("#242424", "white")}
            fontSize={"lg"}
            align={"justify"}
          >
           Bharosa Management Consultancy auditing involves the meticulous examination of financial information, ensuring accuracy, reliability, and adherence to established standards. This service provides stakeholders with confidence in financial reporting, detecting and preventing errors or fraud. Taxation services, on the other hand, revolve around efficient revenue collection for governments, encompassing income, sales, and property taxes. This service aids individuals and businesses in navigating tax complexities, optimizing financial strategies through legal means, and ensuring compliance with tax laws. Together, these services contribute to the financial integrity and regulatory compliance of clients, offering assurance in financial practices and facilitating smooth interactions with tax authorities.
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
              src={Banner1}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
