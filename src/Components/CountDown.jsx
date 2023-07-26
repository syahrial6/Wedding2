import { Box, Text,Flex } from '@chakra-ui/react'

const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Teks yang ditampilkan setelah countdown selesai
      return <span>Countdown Selesai</span>;
    } else {
      // Teks yang ditampilkan selama countdown berjalan
      return (
        <Flex align="center" justify="center" direction="column">
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Countdown
      </Text>
      <Flex>
        <Box bg="gray.700" p={4} borderRadius="md" mx={2}>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            {days}
          </Text>
          <Text fontSize="md" color="white" opacity={0.8}>
            Days
          </Text>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md" mx={2}>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            {hours}
          </Text>
          <Text fontSize="md" color="white" opacity={0.8}>
            Hours
          </Text>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md" mx={2}>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            {minutes}
          </Text>
          <Text fontSize="md" color="white" opacity={0.8}>
            Minutes
          </Text>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md" mx={2}>
          <Text fontSize="3xl" fontWeight="bold" color="white">
            {seconds}
          </Text>
          <Text fontSize="md" color="white" opacity={0.8}>
            Seconds
          </Text>
        </Box>
      </Flex>
    </Flex>
      );
    }
  };

  export default countdownRenderer;