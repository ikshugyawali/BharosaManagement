import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { testimonials } from './constants';
import React from 'react';
import { Carousel } from 'react-bootstrap';
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'white.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};
const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const TestimonialMain = () => {
  return (
    <Box backgroundColor={useColorModeValue('#F9F9F9', '#19202b')}>
      <Container maxW={'7xl'} mt={10} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
            >
              Testimonials
            </Heading>
          </Center>
          <Text>Some Words of Appreciation</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Carousel indicators={true} controls={false} variant="dark">
            {testimonials.map(
              ({ heading, message, avatar, name, title, location }) => (
                <Carousel.Item>
                  <Box minH={{ base: '400px', xl: '350px' }}>
                    <Testimonial>
                      <TestimonialContent>
                        <TestimonialHeading>
                          <Text>{heading}</Text>
                        </TestimonialHeading>
                        <Text style={{ fontWeight: 'bold', fontSize: '0.8em' }}>
                          {location}
                        </Text>
                        <TestimonialText>“{message}”</TestimonialText>
                      </TestimonialContent>
                      <TestimonialAvatar
                        src={avatar}
                        name={name}
                        title={title}
                      />
                    </Testimonial>
                  </Box>
                </Carousel.Item>
              )
            )}
          </Carousel>
        </Stack>
      </Container>
    </Box>
  );
};
export default TestimonialMain;
