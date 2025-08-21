import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import update01 from "../assets/update-2025/2025-update-01.jpg";
import update02 from "../assets/update-2025/2025-update-02.jpg";
import update03 from "../assets/update-2025/2025-update-03.jpg";
import update04 from "../assets/update-2025/2025-update-04.jpg";
import update05 from "../assets/update-2025/2025-update-05.jpg";
import update06 from "../assets/update-2025/2025-update-06.jpg";
import update07 from "../assets/update-2025/2025-update-07.jpg";
import update08 from "../assets/update-2025/2025-update-08.jpg";
import update09 from "../assets/update-2025/2025-update-09.jpg";
import update10 from "../assets/update-2025/2025-update-10.jpg";
import update11 from "../assets/update-2025/2025-update-11.jpg";
import update12 from "../assets/update-2025/2025-update-12.jpg";
import update13 from "../assets/update-2025/2025-update-13.jpg";
import update14 from "../assets/update-2025/2025-update-14.jpg";
import update15 from "../assets/update-2025/2025-update-15.jpg";
import update16 from "../assets/update-2025/2025-update-16.jpg";

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

