import React from "react";
import {
  Container,
  Text,
  Heading,
  HStack,
  Image,
  Box,
  Divider,
  Center,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import one from "./images/1.jpg";
import two from "./images/4.jpg";
import three from "./images/2.jpg";
import four from "./images/3.jpg";
import { Helmet } from "react-helmet";

export default function Mission() {
  return (
    <>
      <Helmet>
        <title>Mission and Vision | Bharosa Management Consultancy</title>
      </Helmet>
      <Container py={12} maxWidth={"4xl"}>
        <Divider mb={2} />
        {/* <Center>
          <Image
            src={blog_5_a}
            objectFit="cover"
            w={"100%"}
            h={{ base: "100%", md: "100%" }}
            mb={5}
          />
        </Center> */}
        <Heading mb={2} color={"green"}>
          Mission and Vision
        </Heading>
        <Divider my={2} />

        <Text style={{ marginTop: "30px" }} mb={2}>
          <b style={{ fontSize: "20px", color: "#0F8BCA" }}>
            Our Mission
          </b>
          <p style={{ marginTop: "10px" }}>
          At Bharosa Management Consultancy, our mission is to empower businesses and individuals in Nepalgunj, Lumbini Province, and beyond with comprehensive business services, including business consulting, financial advisory, auditing, digital marketing, and education. Our goal is to provide strategic solutions, professional guidance, and high-quality education that drive the success and growth of our clients.
          </p>
          <UnorderedList spacing={3}>
            <ListItem>
            We aim to enhance the competitiveness of businesses by offering strategic insights, innovative solutions, and tailored strategies. Our financial advisory services focus on sound financial planning, risk management, and investment analysis, ensuring long-term financial stability and growth for our clients.
            </ListItem>
            <ListItem>
            As a trusted auditing service provider, we prioritize accuracy, transparency, and compliance, providing thorough evaluations of financial records to enhance credibility and regulatory compliance.
            </ListItem>
            <ListItem>
            Our digital marketing services utilize search engine optimization (SEO), social media marketing, content creation, and online advertising to establish a strong online presence for businesses, increase brand visibility, and drive targeted traffic to their websites.
            </ListItem>
            <ListItem>
            Education is a key component of our mission, and we offer specialized courses in banking and accounting preparation. Through experienced instructors and practical training, we aim to equip individuals with the knowledge and skills needed for successful careers in these fields.
            </ListItem>
          </UnorderedList>
        </Text>

        <Center>
          {/* <Image
            src={one}
            objectFit="cover"
            w={"90%"}
            h={{ base: "100%", md: "100%" }}
            mb={7}
            mt={5}
          /> */}
        </Center>

        <Text style={{ marginTop: "30px" }} mb={2}>
          <b style={{ fontSize: "20px", color: "#0F8BCA" }}>Our Vision</b>
          <p style={{ marginTop: "10px" }}>
          Our vision is to become a leading management consultancy firm in Nepalgunj and the Lumbini Province, known for our excellence, innovation, and commitment to client success. We strive to be the go-to resource for businesses seeking comprehensive solutions, trusted advice, and expert guidance. By contributing to the growth and prosperity of businesses and individuals, we aim to foster a vibrant and sustainable business ecosystem in our community and beyond.
          </p>
        </Text>

        <Center>
          {/* <Image
            src={two}
            objectFit="cover"
            w={"90%"}
            h={{ base: "100%", md: "100%" }}
            mb={7}
            mt={5}
          /> */}
        </Center>
      </Container>
    </>
  );
}
