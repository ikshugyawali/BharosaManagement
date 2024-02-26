import React from "react";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Center,
  Heading,
  HStack,
  Container,
  UnorderedList,
  Link as ChakraLink
} from "@chakra-ui/react";
import { leaders } from "./constant";
import "./styles.css";
import { Link } from "react-router-dom";
import NewListToBr from "../../newList";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Tej from "./images/tej_rawal.jpg";

import { Helmet } from "react-helmet";

export default function Team(email) {
  return (
    <>
      <Helmet>
        <title>Members | Bharosa Management Consultancy</title>
      </Helmet>
      <Center mb={"50px"} mt={12}>
        <Heading color="#45940F">Board of Directors</Heading>
      </Center>
      <Box id="model4">
        <Box className="members">
          <Box className="member">
            <Image width={350} height={350} src={Tej} />
            <Box className="description">
              <Heading
                fontSize={"24px"}
                fontWeight={600}
                textAlign="center"
                fontFamily={"Poppins"}
                color="#45940F"
              >
                Tej Bahadur Rawal
              </Heading>
              <Heading
                fontSize={"18px"}
                fontWeight={600}
                textAlign="center"
                fontFamily={"Poppins"}
                color="#0F8BCA"
              >
                Chairman
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>

      <Container maxW={"8xl"} mb={6} id="teams">
        <Box id="model4">
          <Box className="members">
            {leaders.map(({ name, title, image }) => (
              <Box className="member">
                <Image width={350} height={350} src={image} />
                <Box className="description">
                  <Heading
                    fontSize={"24px"}
                    fontWeight={600}
                    textAlign="center"
                    fontFamily={"Poppins"}
                    color="#45940F"
                  >
                    {name}
                  </Heading>
                  <Heading
                    fontSize={"18px"}
                    fontWeight={600}
                    textAlign="center"
                    fontFamily={"Poppins"}
                    color="#0F8BCA"
                  >
                    {title}
                  </Heading>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
