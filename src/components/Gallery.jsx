import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export const Gallery = ({ images, altPrefix }) => (
  <Box my={8}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${altPrefix} ${index + 1}`}
          width="100%"
          height="auto"
          objectFit="cover"
          borderRadius="10px"
        />
      ))}
    </SimpleGrid>
  </Box>
);
