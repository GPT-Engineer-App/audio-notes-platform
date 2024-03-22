import { Box, Button, Container, Heading, Input, Stack, Text, VStack, Image, HStack, Icon, useColorModeValue, IconButton, Divider } from "@chakra-ui/react";
import { FaPlay, FaPause, FaPlus, FaFolder, FaTrashAlt, FaMusic } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6}>
        <Heading>AudiNote</Heading>
        <Text>Welcome to AudiNote - your audio recording and note-taking platform.</Text>
        <HStack>
          <Input placeholder="Search for notes, playlists, albums…" size="md" />
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            New Note
          </Button>
        </HStack>

        <Stack direction={{ base: "column", md: "row" }} spacing={6} w="full">
          <VStack spacing={4} flex={1} bg={bgColor} p={4} borderRadius="md">
            <Heading size="md">Playlists</Heading>
            <HStack justifyContent="space-between" w="full">
              <Text>My Playlist</Text>
              <IconButton aria-label="Play" icon={<FaPlay />} />
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
              <Text>Work Tunes</Text>
              <IconButton aria-label="Play" icon={<FaPlay />} />
            </HStack>
            <Divider />
            <Button leftIcon={<FaPlus />} variant="ghost" justifyContent="start">
              New Playlist
            </Button>
          </VStack>

          <VStack spacing={4} flex={2} bg={bgColor} p={4} borderRadius="md">
            <Heading size="md">Albums</Heading>
            <Box w="full" bg="white" borderRadius="md" p={4} shadow="base">
              <HStack justifyContent="space-between">
                <Text>My First Album</Text>
                <Icon as={FaMusic} />
              </HStack>
            </Box>
            <Box w="full" bg="white" borderRadius="md" p={4} shadow="base">
              <HStack justifyContent="space-between">
                <Text>Focus Album</Text>
                <Icon as={FaMusic} />
              </HStack>
            </Box>
            <Button leftIcon={<FaPlus />} variant="ghost" justifyContent="start">
              New Album
            </Button>
          </VStack>

          <VStack spacing={4} flex={1} bg={bgColor} p={4} borderRadius="md">
            <Heading size="md">Notes</Heading>
            <Box w="full" bg="white" borderRadius="md" p={4} shadow="base">
              <HStack justifyContent="space-between">
                <Text>Meeting with Team</Text>
                <IconButton aria-label="Play" icon={<FaPlay />} />
              </HStack>
            </Box>
            <Box w="full" bg="white" borderRadius="md" p={4} shadow="base">
              <HStack justifyContent="space-between">
                <Text>Interview Notes</Text>
                <IconButton aria-label="Play" icon={<FaPlay />} />
              </HStack>
            </Box>
            <Button leftIcon={<FaPlus />} variant="ghost" justifyContent="start">
              New Note
            </Button>
          </VStack>
        </Stack>

        <HStack spacing={4}>
          <Button leftIcon={<FaFolder />} colorScheme="yellow">
            Your Library
          </Button>
          <Button leftIcon={<FaTrashAlt />} colorScheme="red">
            Trash
          </Button>
        </HStack>

        <Box w="full" bg={bgColor} p={4} borderRadius="md" shadow="base">
          <Heading size="md">Now Playing</Heading>
          <HStack justifyContent="space-between" p={4}>
            <VStack alignItems="start">
              <Text fontWeight="bold">Album: Focus Album</Text>
              <Text>Track: Deep Work Groove</Text>
            </VStack>
            <IconButton aria-label="Play" icon={<FaPlay />} size="lg" />
          </HStack>
        </Box>

        <Image src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHJlY29yZGluZyUyMHN0dWRpb3xlbnwwfHx8fDE3MTExMjg2MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      </VStack>
    </Container>
  );
};

export default Index;
