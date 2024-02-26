import React from "react";
import {
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Center,
  SimpleGrid,
  Flex,
  Image,
  Box
} from "@chakra-ui/react";
import Banner from "./image/banner.jpg";

const AboutHome = () => {
  return (
    <Container id="about" maxW={"8xl"}>
      <Center>
        <Heading
          fontWeight={"italic"}
          className="section_title"
          color={useColorModeValue("#042483", "white")}
        >
          Who we are
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Box
            boxSize={{ base: "100%", lg: "500px", xl: "500px" }}
            ml={{ base: 0, lg: 12, xl: "15%" }}
          >
            {" "}
            <Image
              width={"100%"}
              rounded={"md"}
              alt={"feature image"}
              src={Banner}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
        <Stack spacing={4} mr={{ base: 0, lg: 12, xl: 12 }}>
          <Text
            color={useColorModeValue("#242424", "white")}
            fontSize={"lg"}
            align={"justify"}
          >
            Bharosa Management Consultancy is a reputable management consulting
            firm located in Nepalgunj, Dhamboji 2, in the Lumbini Province of
            Nepal. Our comprehensive business services aim to empower
            organizations and individuals with strategic solutions and
            professional guidance. With expertise in business consulting,
            financial advisory, auditing, digital marketing, and education,
            Bharosa Management Consultancy provides personalized solutions to
            meet clients' specific needs.
          </Text>
          <Text
            color={useColorModeValue("#242424", "white")}
            fontSize={"lg"}
            align={"justify"}
          >
            Our business consulting services help businesses develop
            strategies, optimize operations, and foster growth. In financial
            advisory, we offer financial planning, risk management, and
            investment analysis. As auditors, we ensure regulatory compliance
            and maintain accurate financial records. Our digital marketing
            services include SEO, SMM, content creation, and online advertising
            to enhance brand visibility and drive targeted traffic. Bharosa
            Management Consultancy also offers specialized courses in banking
            and accounting preparation, equipping individuals with the skills
            needed for successful careers. Our client-centric approach and
            industry expertise have established them as a trusted consultancy
            firm. Contact Bharosa Management Consultancy to unlock your
            organization's full potential.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default AboutHome;
