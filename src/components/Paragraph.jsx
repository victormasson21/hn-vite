import { Link, Text } from "@chakra-ui/react";

export const Paragraph = ({ segments }) => (
  <Text>
    {[segments].flat().map((segment, index) =>
      segment.href ? (
        <Link key={index} href={segment.href} isExternal>
          {segment.text}
        </Link>
      ) : (
        segment
      ),
    )}
  </Text>
);
