import { Heading, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { Fragment, useContext } from "react";
import { LanguageContext } from "../languageContext";
import { Gallery } from "./Gallery";
import { Paragraph } from "./Paragraph";

const renderers = {
  heading: (block, locale) => (
    <Heading as="h3" size="md">
      {block[locale]}
    </Heading>
  ),
  text: (block, locale) => <Paragraph segments={block[locale]} />,
  list: (block, locale) => (
    <UnorderedList>
      {block.items.map((item, index) => (
        <ListItem key={index} textAlign="justify">
          <Paragraph segments={item[locale]} />
        </ListItem>
      ))}
    </UnorderedList>
  ),
  image: (block, locale) => (
    <Image src={block.src} alt={block.alt[locale]} my={4} borderRadius="10px" />
  ),
  gallery: (block, locale) => (
    <Gallery images={block.images} altPrefix={block.altPrefix[locale]} />
  ),
};

export const Section = ({ blocks }) => {
  const locale = useContext(LanguageContext);
  return blocks.map((block, index) => (
    <Fragment key={index}>{renderers[block.type](block, locale)}</Fragment>
  ));
};
