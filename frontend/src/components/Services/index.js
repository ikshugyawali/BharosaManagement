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
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { services } from "./constants";
import "./style.css";

const Services = () => {
  return (
    <Container minW="100%" bgColor={useColorModeValue("white", "#1A202C")}>
      <Container maxW={"8xl"}>
        <Center>
          <Heading
            className="section_title"
            color={useColorModeValue("#042483", "white")}
            fontWeight={"italic"}
          >
            Our Services
          </Heading>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mb={10}>
        {services.map(
              ({  title, image,to, }) => (
          <Box
            as={Link}
            to={to}
            target="_blank"
            p={9}
            boxShadow="md"
            borderRadius={15}
            textAlign={"center"}
            _hover={{
              transform: "scale(1.1)",
              transition: "all 0.2s ease-in-out",
              color: "black",
              textDecoration: "none",
            }}
            cursor="pointer"
          >
           
            <Center>
              {" "}
              <Image
                src={image}
                alt="Article Image"
                width={"40%"}
              />
            </Center>

            <Text mt={5}>{title}</Text>
          </Box>
          
          
          )
          )}
        </SimpleGrid>
      </Container>
    </Container>
  );
};
export default Services;
