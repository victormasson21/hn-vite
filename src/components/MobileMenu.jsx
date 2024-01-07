import { Stack } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <Stack align="flex-end" spacing={8}>
      {menuOpen ? (
        <CloseIcon
          onClick={() => {
            setMenuOpen(false);
          }}
          color="text.dark"
          fontSize="2xl"
          cursor="pointer"
        />
      ) : (
        <HamburgerIcon
          onClick={() => {
            setMenuOpen(true);
          }}
          color="text.dark"
          fontSize="2xl"
          cursor="pointer"
        />
      )}
    </Stack>
  );
};
