import { Box, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, Image, Button, HStack, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <Flex justify="space-between" align="center" mb={6}>
        <HStack spacing={8}>
          <Heading as="h1" size="lg">RealEstate</Heading>
          <HStack spacing={4}>
            <Link to="/">Explore</Link>
            <Link to="/">List your space</Link>
            <Link to="/">Manage properties</Link>
            <Link to="/">Bookings</Link>
            <Link to="/">Inbox</Link>
            <Link to="/">Help</Link>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <IconButton icon={<FaBuilding />} aria-label="Language" />
          <IconButton icon={<FaBuilding />} aria-label="Profile" />
        </HStack>
      </Flex>
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