import React, { useState } from "react";
import {
  Box,
  HStack,
  Flex,
  Image,
  Link as ChakraLink,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon
} from "@chakra-ui/icons";
import logo from "./image/logo_2.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navbar_option_color = useColorModeValue("white", "#1a202c");

  const navigate = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("white", "#1A202C")}
        boxShadow="base"
        zIndex={999}
      >
        <Center py={5}>
          <Flex
            id="navbar"
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack spacing={8} alignItems={"center"}>
              {/* Logo starts here */}
              <Box>
                <Link to="/">
                  <Image
                    alt={"Bharosa Management Consultancy"}
                    fit={"cover"}
                    height={"100"}
                    objectFit={"cover"}
                    src={logo}
                    marginRight={80}
                    id="main-logo"
                  />
                </Link>
              </Box>
              {/* Logo ends here */}
              <HStack
                as={"nav"}
                spacing={9}
                display={{ base: "none", md: "flex" }}
              >
                <ChakraLink
                  as={Link}
                  fontWeight={"bold"}
                  px={2}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "#0F8BCA"),
                    color: useColorModeValue("black", "white")
                  }}
                  to={"/"}
                >
                  Home
                </ChakraLink>
                <Menu closeOnSelect placement="auto">
                  <MenuButton
                    as={Button}
                    rightIcon={
                      <ChevronDownIcon
                        ml={{ base: "0rem", md: "1rem", xl: "0" }}
                      />
                    }
                    bg={useColorModeValue("white", "#1a202c")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "#0F8BCA"),
                      color: useColorModeValue("black", "white")
                    }}
                  >
                    About Us
                  </MenuButton>

                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        navigate("/about-us");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Introduction
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/about/mission");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Mission and Vision
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu closeOnSelect placement="auto">
                  <MenuButton
                    as={Button}
                    rightIcon={
                      <ChevronDownIcon
                        ml={{ base: "0rem", md: "1rem", xl: "0" }}
                      />
                    }
                    bg={useColorModeValue("white", "#1a202c")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "#0F8BCA"),
                      color: useColorModeValue("black", "white")
                    }}
                  >
                    Services
                  </MenuButton>

                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/auditing-and-taxing");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Auditing and Taxation
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/finincial-advice");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Financial Advisory
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/digital-marketing");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Digital Marketing
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/services/training-and-development");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Training and Development
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Menu closeOnSelect placement="auto">
                  <MenuButton
                    as={Button}
                    rightIcon={
                      <ChevronDownIcon
                        ml={{ base: "0rem", md: "1rem", xl: "0" }}
                      />
                    }
                    bg={useColorModeValue("white", "#1a202c")}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "#0F8BCA"),
                      color: useColorModeValue("black", "white")
                    }}
                  >
                    Members
                  </MenuButton>

                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        navigate("/team");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Board of Director
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/Team/Comitte");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Comitte Member
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/Team/Management");
                      }}
                      style={{ paddingLeft: "30px" }}
                    >
                      Management Team
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Button
                  as={Link}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"bold"}
                  color="white"
                  px={6}
                  backgroundColor="#0F8BCA"
                  _hover={{ transform: "scale(1.1)", color: "white" }}
                  to={"/footer"}
                >
                  Contact us
                </Button>
              </HStack>
            </HStack>
            <Flex
              ml={{ lg: 10, base: 5 }}
              mr={{ base: 5 }}
              alignItems={"center"}
            >
              <HStack>
                <IconButton
                  size={"lg"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </HStack>
            </Flex>
          </Flex>
        </Center>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} mr={"60%"} ml={7} mt={5}>
            <Stack as={"nav"} spacing={3}>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none"
                }}
                to={"/"}
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none"
                }}
                to={"/about-us"}
                onClick={isOpen ? onClose : onOpen}
              >
                About Us
              </ChakraLink>
              <Menu closeOnSelect>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bgColor={navbar_option_color}
                  fontWeight="normal"
                  variant="text"
                  justifyContent="flex-start"
                  left={"-6"}
                >
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/website-development");
                    }}
                  >
                    Web Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/mobile-development");
                    }}
                  >
                    Mobile Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/software-development");
                    }}
                  >
                    Software Development
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/it-outsourcing");
                    }}
                  >
                    IT Outsourcing
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/digital-marketing-and-seo");
                    }}
                  >
                    Digital Marketing
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/services/data-analytics-and-visualization");
                    }}
                  >
                    Data Analytics
                  </MenuItem>
                </MenuList>
              </Menu>
              <ChakraLink
                as={Link}
                py={1}
                _hover={{
                  textDecoration: "none"
                }}
                to={"/team"}
                onClick={isOpen ? onClose : onOpen}
              >
                Team
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                _hover={{
                  textDecoration: "none"
                }}
                to={"/blogs"}
                onClick={isOpen ? onClose : onOpen}
              >
                Blogs
              </ChakraLink>
              <ChakraLink
                as={Link}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none"
                }}
                to={"/careers"}
                onClick={isOpen ? onClose : onOpen}
              >
                Careers
              </ChakraLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
