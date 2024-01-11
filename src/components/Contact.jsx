import { Heading, Link, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export const Contact = () => (
  <>
    <Text>
      N&apos;hésitez pas à nous contacter si vous avez plus de questions.
    </Text>
    <Heading as="p" size="sm">
      <EmailIcon mr={4} />
      <Link href="mailto:horizons.nepal34@gmail.com">
        horizons.nepal34@gmail.com
      </Link>
    </Heading>
    <Heading as="p" size="sm">
      <PhoneIcon mr={4} />
      <Link href="tel:0033630407786">+33 6 30 40 77 86</Link>
    </Heading>
    <Text>
      Vous pouvez retrouver{" "}
      <Link
        href="https://www.helloasso.com/associations/horizons-nepal"
        isExternal
        as="b"
      >
        notre campagne de financement ici
      </Link>{" "}
      si vous souhaitez nous rejoindre dans notre aventure !
    </Text>
    <Text>Derahai Danayabad (Merci beaucoup).</Text>
    <Heading as="p" size="sm">
      धेरै धन्यवाद
    </Heading>
  </>
);
