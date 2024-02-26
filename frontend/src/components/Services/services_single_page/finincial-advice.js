import React from 'react';
import {
  Center,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Box,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import Banner2 from '../../Home/image/Banner2.png';

export default function ProcessAutomation() {
  return (
    <Container
      minW="100%"
      bgColor={useColorModeValue('white', '#1A202C')}
      mb={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} ba>
      <Flex>
          <Box
            boxSize={{ base: '100%', lg: '550px', xl: '550px' }}
            ml={{ base: 0, lg: 12, xl: 12 }}
            mt={{ base: '0rem', md: '8rem' }}
          >
            {' '}
            <Image
              width={'100%'}
              rounded={'md'}
              alt={'feature image'}
              src={Banner2}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Stack
          id="process-automation"
          spacing={4}
          mr={{ base: 0, lg: 12, xl: 12 }}
          ml={{ base: 0, md: '3rem' }}
          order={{ base: 1, md: 0 }}
          mt={{ base: '-5rem', md: '2rem' }}
        >
          <Center>
            <Heading
              fontWeight={'italic'}
              className="section_title"
              color={useColorModeValue('#042483', 'white')}
              mt={{ base: '2rem' }}
            >
              Financial Advice
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            Bharosa Management Consultancy stands out in the financial advisory sector, offering a holistic range of services encompassing financial planning, risk management, and investment analysis. Our seasoned team of financial experts utilizes their extensive knowledge to provide tailored advice, empowering clients to make informed decisions for long-term financial stability. We excel in developing comprehensive financial plans, proactive risk mitigation, and strategic investment analysis. At Bharosa, our commitment is to guide clients on a path to lasting financial prosperity through transparent, client-centric, and trustworthy collaboration.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
