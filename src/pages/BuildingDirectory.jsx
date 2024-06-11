import { Box, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Text, VStack, Image, Button, HStack, IconButton, Link } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaGlobe, FaUserCircle } from "react-icons/fa";

const buildings = [
  { name: "Building Name", address: "Address", image: "/images/building1.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building2.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building3.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building4.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building5.jpg" },
  { name: "Building Name", address: "Address", image: "/images/building6.jpg" },
];

const BuildingDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBuildings, setFilteredBuildings] = useState(buildings);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBuildings(
      buildings.filter((building) =>
        building.name.toLowerCase().includes(query) ||
        building.address.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justify="space-between" align="center" mb={6} bg="teal.500" p={4} borderRadius="md">
        <HStack spacing={8}>
          <Heading as="h1" size="lg">RealEstate</Heading>
          <HStack spacing={4}>
            <Link href="/">Explore</Link>
            <Link href="/">List your space</Link>
            <Link href="/">Manage properties</Link>
            <Link href="/">Bookings</Link>
            <Link href="/">Inbox</Link>
            <Link href="/">Help</Link>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <IconButton icon={<FaGlobe />} aria-label="Language" />
          <IconButton icon={<FaUserCircle />} aria-label="Profile" />
        </HStack>
      </Flex>
      <Heading as="h1" size="xl" mb={2}>Building Directory</Heading>
      <Text fontSize="lg" mb={6}>Find a building by name or location</Text>
      <InputGroup mb={6}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
          type="text"
          placeholder="Search by name, address or city..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <VStack spacing={4} align="stretch">
        {filteredBuildings.map((building, index) => (
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