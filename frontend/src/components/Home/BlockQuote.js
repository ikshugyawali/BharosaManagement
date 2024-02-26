import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BsFillChatLeftQuoteFill } from 'react-icons/bs';

const ModernBlockquote = ({ quote, author }) => {
  return (
    <Box d="flex" borderLeftWidth="4px" borderLeftColor="#232323" p={5} my={10}>
      <BsFillChatLeftQuoteFill size="40px" color="#232323" mr={5} />
      <Text fontSize="xl" fontWeight="medium" color="#232323" mt={5}>
        {quote}
      </Text>
      <Box as="footer" mt={5}>
        <Text fontSize="sm" fontWeight="medium" color="black">
          {author}
        </Text>
      </Box>
    </Box>
  );
};

export default ModernBlockquote;
