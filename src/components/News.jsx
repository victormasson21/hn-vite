import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { LanguageContext } from "../languageContext";
import { newsletters } from "../content/newsletters";
import { Paragraph } from "./Paragraph";

const dateLocale = { FR: "fr-FR", EN: "en-GB" };

const formatDate = (date, locale) =>
  new Date(date).toLocaleDateString(dateLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const News = () => {
  const locale = useContext(LanguageContext);
  const {
    colors: { text },
  } = useTheme();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Stack spacing={3}>
        {newsletters.map((newsletter) => (
          <Box
            as="button"
            key={newsletter.date}
            onClick={() => setSelected(newsletter)}
            textAlign="left"
            p={4}
            border="2px solid"
            borderColor="text.dark"
            borderRadius="10px"
            _hover={{ boxShadow: `5px 5px ${text.dark}` }}
          >
            <Text fontWeight="bold" mb={0}>
              {formatDate(newsletter.date, locale)}
            </Text>
            <Text mb={0}>{newsletter.title}</Text>
          </Box>
        ))}
      </Stack>
      {selected ? (
        <Modal
          isOpen
          onClose={() => setSelected(null)}
          scrollBehavior="inside"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent
            border="2px solid"
            borderColor="text.dark"
            borderRadius="10px"
            boxShadow={`3px 3px ${text.dark}`}
          >
            <ModalHeader color="text.dark" pr={12}>
              {selected.title}
              <Text fontSize="sm" fontWeight="normal" mb={0}>
                {formatDate(selected.date, locale)}
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {selected.paragraphs.map((paragraph, index) => (
                <Paragraph key={index} segments={paragraph} />
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};
