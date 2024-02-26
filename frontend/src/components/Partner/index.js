import {
  Center,
  useColorModeValue,
  Container,
  Heading,
  Box,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import './styles.css';
import '../../index.css';
import { our_partners } from './constants/constants';

const Partner = () => {
  return (
    <Container maxW={'8x1'} mb={10} id="partners">
      <Center>
          <Heading
            fontWeight={'italic'}
            className="section_title"
            color={'#042483'}
          >
            Our Trusted Partners
        </Heading>
        </Center>
        <Center>
        <Box maxW={'2'} py={12} allign={'center'}>
          {' '}
          <List className="logogrid">
            {our_partners.map(({ image, name }) => (
              <ListItem
              >
                <Image src={image} className="logogrid__Image" alt={name} />
              </ListItem>
            ))}{' '}
          </List>
        </Box>
      </Center>

    </Container>
  );
};

export default Partner;
