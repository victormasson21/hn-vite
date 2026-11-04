import { Stack } from "@chakra-ui/react";
import { Donner } from "./Donner";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => (
  <Stack
    direction="row"
    justify="space-between"
    align="center"
    py={4}
    borderTop="2px solid"
    borderColor="text.dark"
  >
    <SocialLinks />
    <Donner />
  </Stack>
);
