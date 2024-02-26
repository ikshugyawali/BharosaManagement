import React from "react";
import {
  Container,
  Text,
  Heading,
  Divider,
  Center,
  Box,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy |
          Bharosa Management Consultancy
        </title>
      </Helmet>
      <Container py={12} maxWidth={"4xl"}>
        <Center>
          <Heading mb={4}>Privacy Policy</Heading>
        </Center>
        <Divider mb={4} />
        <Box mb={4}>
          <Heading fontSize={"md"}>Introduction:</Heading>
          <Text align="justify">
            At Bharosa Management Consultancy, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy sets out
            the basis on which any personal information we collect from you, or
            that you provide to us, will be processed by us. By using our
            website, you consent to the collection, use, and disclosure of your
            information in accordance with this Privacy Policy.
          </Text>
        </Box>
        <Box mb={4}>
          <Heading fontSize={"md"}>Information We Collect:</Heading>
          <Text align="justify">
            We may collect information from you when you use our website,
            including but not limited to your name, email address, and any other
            information that you choose to provide to us. We also collect
            information about your use of our website, such as your browser
            type, the pages you visit, and the date and time of your visits.
          </Text>
        </Box>{" "}
        <Box mb={4}>
          <Heading fontSize={"md"}>Use of Your Information:</Heading>
          <Text align="justify">
            We use your information to provide you with a better experience when
            using our website and to improve the quality of our services. We may
            use your information to send you updates and news about our
            services, or to contact you if necessary.
          </Text>
        </Box>{" "}
        <Box mb={4}>
          <Heading fontSize={"md"}>Disclosure of Your Information:</Heading>
          <Text align="justify">
            We may disclose your information to third parties for the purpose of
            providing our services to you. We will never sell your information
            to third parties.
          </Text>
        </Box>{" "}
        <Box mb={4}>
          <Heading fontSize={"md"}>Security: </Heading>
          <Text align="justify">
            We take the security of your information seriously and use
            appropriate measures to protect it from unauthorized access,
            alteration, or disclosure. However, no method of transmission over
            the internet, or method of electronic storage, is 100% secure. While
            we strive to use commercially acceptable means to protect your
            information, we cannot guarantee its absolute security.
          </Text>
        </Box>{" "}
        <Box mb={4}>
          <Heading fontSize={"md"}>Changes to This Privacy Policy:</Heading>
          <Text align="justify">
            We may make changes to this Privacy Policy from time to time. We
            will notify you of any changes by posting the revised Privacy Policy
            on our website. Your continued use of our website following the
            posting of any changes constitutes your acceptance of those changes.
          </Text>
        </Box>{" "}
        <Box mb={4}>
          <Heading fontSize={"md"}>Contact Us:</Heading>
          <Text align="justify">
            If you have any questions about this Privacy Policy, please contact
            us at info@techoresolutions.com.np.
            <br></br>
            <br></br>
            This Privacy Policy is effective as of 01.01.2023.
          </Text>
        </Box>
        <Text align="justify"></Text>
      </Container>
    </>
  );
}
