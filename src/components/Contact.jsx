import { Heading, Link } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { contact } from "../content/contact";
import { Section } from "./Section";

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
  </>
);
