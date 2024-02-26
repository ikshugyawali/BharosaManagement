import React from "react";
import {
  Box,
  Image,
  Text,
  Container,
  Heading,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import founderImg from "./founder.png";
import "./styles.css";
import ModernBlockquote from "./BlockQuote";

const FounderMessage = () => {
  return (
    <Container
      className="founder-message"
      minW="90%"
      minH={"100 px"}
      mt={"60px"}
    >
      <Container maxW={"8xl"}>
        <Flex
          display="grid"
          style={{ backgroundColor: "#8CBF69" }}
          gridTemplateColumns={{
            base: "repeat(1, 2fr)",
            sm: "repeat(1, 2fr)",
            md: "repeat(1, 2fr)",
            lg: "repeat(1, 1.5fr)",
            xl: "1fr 1.5fr"
          }}
          marginLeft={{ base: "0%", xl: "5%" }}
          mb={{ base: "5px", lg: "20px" }}
          mt={{ base: "5px", lg: "50px" }}
        >
          <Box mt={{ base: 5, md: 0, lg: 0, xl: 0 }}>
            <Image src={founderImg} alt="Founder" width="450px" />
          </Box>
          <Box mt={{ base: 5, md: 0, lg: 0, xl: 0 }}>
            <Box>
              <Heading mt={5} color="#232323">
                Message from the Founder
              </Heading>
              <Text
                color={"black"}
                fontSize={20}
                mt={5}
                mr={5}
                align={"justify"}
              >
                Dear professionals and business enthusiasts, I introduce you
                Bharosa Management Consultancy, a trusted consulting firm
                located in Nepalgunj, Banke, Nepal. We provide comprehensive services
                in business consulting, financial advisory, auditing, digital
                marketing, and education. Our personalized solutions empower
                organizations and individuals to achieve your goals.
              </Text>
              <Text
                color={"black"}
                fontSize={20}
                mt={5}
                mr={5}
                align={"justify"}
              >
                Our business consulting services optimize operations and foster
                growth. As financial advisors, we offer planning, risk
                management, and investment analysis. As auditors, we ensure
                compliance and accurate financial records. Our digital marketing
                services enhance brand visibility and drive targeted traffic. We
                also provide specialized courses in banking and accounting.
              </Text>
            </Box>
            <Box>
              <ModernBlockquote author="Tej Bahadur Rawal, Founder of Bharosa Management Consultancy"  />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default FounderMessage;
