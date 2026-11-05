import { Heading, Image, Link, SimpleGrid, useTheme } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LanguageContext } from "../languageContext";
import { contact } from "../content/contact";
import { Section } from "./Section";

const PressLogos = () => {
  const locale = useContext(LanguageContext);
  const {
    colors: { text },
  } = useTheme();
  return (
    <>
      <Heading as="h3" size="md" mt={8}>
        {contact.pressTitle[locale]}
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing={3}>
        {contact.press.map(({ name, logo, href }) => (
          <Link
            key={name}
            href={href}
            isExternal
            p={4}
            border="2px solid"
            borderColor="text.dark"
            borderRadius="10px"
            _hover={{ boxShadow: `5px 5px ${text.dark}` }}
          >
            <Image
              src={logo}
              alt={{ FR: `Logo de ${name}`, EN: `${name} logo` }[locale]}
              width="100%"
              borderRadius="10px"
            />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export const Contact = () => (
  <>
    <Section blocks={contact.intro} />
    <Heading as="p" size="sm">
      <EmailIcon mr={4} />
      <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
    </Heading>
    <Heading as="p" size="sm">
      <PhoneIcon mr={4} />
      <Link href={contact.phone.href}>{contact.phone.label}</Link>
    </Heading>
    <Section blocks={contact.outro} />
    <PressLogos />
  </>
);
