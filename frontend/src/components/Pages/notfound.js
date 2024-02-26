import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import NotFoundImage from "./images/error.png";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Bharosa Management Consultancy</title>
      </Helmet>
      <Center mt={20}>
        <Box boxSize={"800px"}>
          <Image src={NotFoundImage} />
        </Box>
      </Center>
    </>
  );
}
