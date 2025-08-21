import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import update01 from "../assets/update-2025/2025-update-01.webp";
import update02 from "../assets/update-2025/2025-update-02.webp";
import update03 from "../assets/update-2025/2025-update-03.webp";
import update04 from "../assets/update-2025/2025-update-04.webp";
import update05 from "../assets/update-2025/2025-update-05.webp";
import update06 from "../assets/update-2025/2025-update-06.webp";
import update07 from "../assets/update-2025/2025-update-07.webp";
import update08 from "../assets/update-2025/2025-update-08.webp";
import update09 from "../assets/update-2025/2025-update-09.webp";
import update10 from "../assets/update-2025/2025-update-10.webp";
import update11 from "../assets/update-2025/2025-update-11.webp";
import update12 from "../assets/update-2025/2025-update-12.webp";
import update13 from "../assets/update-2025/2025-update-13.webp";
import update14 from "../assets/update-2025/2025-update-14.webp";
import update15 from "../assets/update-2025/2025-update-15.webp";
import update16 from "../assets/update-2025/2025-update-16.webp";

const defaultImages = [
  update01,
  update02,
  update03,
  update04,
  update05,
  update06,
  update07,
  update08,
  update09,
  update10,
  update11,
  update12,
  update13,
  update14,
  update15,
  update16,
];

export const Gallery = ({ images = defaultImages, altPrefix = "Update" }) => {
  return (
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
};

