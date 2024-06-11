import { Box, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, Image, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaBuilding } from "react-icons/fa";

const buildings = [
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
  { name: "Building Name", address: "Address", image: "https://via.placeholder.com/50" },
];

const BuildingDirectory = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="xl" mb={2}>Building Directory</Heading>
      <Text fontSize="lg" mb={6}>Find a building by name or location</Text>
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="text" placeholder="Search by name, address or city..." />
      </InputGroup>
      <VStack spacing={4} align="stretch">
        {buildings.map((building, index) => (
          <Flex key={index} align="center" justify="space-between" p={4} borderWidth="1px" borderRadius="md">
            <Flex align="center">
              <Image src={building.image} alt={building.name} boxSize="50px" borderRadius="md" mr={4} />
              <Box>
                <Text fontWeight="bold">{building.name}</Text>
                <Text>{building.address}</Text>
              </Box>
            </Flex>
            <Button variant="outline">View</Button>
          </Flex>
        ))}
      </VStack>
    </Container>
  );
};

export default BuildingDirectory;