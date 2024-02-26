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
import Banner4 from '../../Home/image/Banner4.png';

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
              src={Banner4}
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
              Training and Development
            </Heading>
          </Center>
          <Text
            color={useColorModeValue('#242424', 'white')}
            fontSize={'lg'}
            align={'justify'}
          >
            Education is a cornerstone of Bharosa Management Consultancy, and we take pride in offering specialized courses in banking and accounting preparation. Our educational programs are designed to equip individuals with the knowledge and skills necessary to excel in these fields. With experienced instructors and practical training, we ensure that our students receive a comprehensive education that prepares them for successful careers in banking and accounting.
            <Text my={3}>Our education services include:</Text>
            <OrderedList
              color={useColorModeValue('#242424', 'white')}
              spacing={2}
            >
              <ListItem>
              Professional Accounting Course: This course has been designed for accountants, business owners, entrepreneurs, government employees, and accounting students. Bharosa offers quality accounting training in Nepal that will make the trainees familiar with Nepal Government’s taxation laws and accounting rules, Income Tax, VAT, TDS, and popular accounting software.
              </ListItem>
              <ListItem>
              Banking Preparation Course: Financial sector, which comprises of Central Bank, Commercial Banks, Development Banks, Financial Companies and other financial institutions, is arguably the most happening and transparent sector in the country. This sector has been performing as the most organized and profitable segment in the economy since early 90’s.
              </ListItem>
            </OrderedList>
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
