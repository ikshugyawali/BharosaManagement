import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Center,
  Heading,
  HStack,
  Container,
  UnorderedList,
  Link as ChakraLink
} from "@chakra-ui/react";
import "./styles.css";
import { Link } from "react-router-dom";
import NewListToBr from "../../../newList";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Helmet } from "react-helmet";

export default function Team(email) {
  const auditmanagement = [
    { name: "Rajesh Kumar Rawal", position: "Co-ordinator" },
    { name: "Upendra Pratap Singh", position: "Member" },
    { name: "Ajita Gyawali", position: "Member" }
  ];
  const dititalmarketing = [
    { name: "Samir Paudel", position: "Co-ordinator" },
    { name: "Shaket Agrawal", position: "Member" },
    { name: "Mina Kumari Bogati", position: "Member" },
    { name: "Kamala Oli", position: "Member" }
  ];
  const training = [
    { name: "Tej Bahadur Rawal", position: "Co-ordinator" },
    { name: "Jhalak Gaire", position: "Member" },
    { name: "Bikash Bhattrai", position: "Member" }
  ];
  return (
    <>
      <Helmet>
        <title>Members | Bharosa Management Consultancy</title>
      </Helmet>
      <Box>
        <Center mb={"50px"} mt={12}>
          <Heading color="#45940F" mb={4}>
            Board of Committee
          </Heading>
        </Center>
        <Center mb={4} mt={12}>
          <Heading color="#0F8BCA" as="h2" size="md" mb={4}>
            Audit Management Team
          </Heading>
        </Center>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          {auditmanagement.map((member, index) => (
            <Box key={index} mr={20} mb={4}>
              <Text>
                <strong>Name:</strong> {member.name}
              </Text>
              <Text>
                <strong>Position:</strong> {member.position}
              </Text>
            </Box>
          ))}
        </Flex>
        <Center mb={4} mt={12}>
          <Heading color="#0F8BCA" as="h2" size="md" mb={4}>
            Digital Marketing Team
          </Heading>
        </Center>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          {dititalmarketing.map((member, index) => (
            //bg={'#e0f8fe'} to add color
            <Box key={index} mr={20} mb={4}>
              <Text>
                <strong>Name:</strong> {member.name}
              </Text>
              <Text>
                <strong>Position:</strong> {member.position}
              </Text>
            </Box>
          ))}
        </Flex>
        <Center mb={4} mt={12}>
          <Heading color="#0F8BCA" as="h2" size="md" mb={2}>
            Training and Development Team
          </Heading>
        </Center>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          {training.map((member, index) => (
            <Box key={index} mr={20} mb={4}>
              <Text>
                <strong>Name:</strong> {member.name}
              </Text>
              <Text>
                <strong>Position:</strong> {member.position}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}
