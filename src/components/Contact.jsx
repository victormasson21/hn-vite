import { Heading, Link, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const Contact = () => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Text>
        {
          {
            FR: "N'hésitez pas à nous contacter si vous avez plus de questions.",
            EN: "Please do not hesitate to contact us if you have more questions.",
          }[locale]
        }
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
      {
        {
          FR: (
            <>
              <Text>
                Vous pouvez retrouver{" "}
                <Link href="https://bit.ly/HorizonsNepalDonate" isExternal>
                  notre campagne de financement ici
                </Link>{" "}
                si vous souhaitez nous rejoindre dans notre aventure !
              </Text>
              <Text>
                Suivez le New Sauraha Day Care Centre{" "}
                <Link href="https://www.facebook.com/people/New-sauraha-daycare-centre/100067792186502/">
                  sur Facebook
                </Link>
                .
              </Text>
            </>
          ),
          EN: (
            <>
              <Text>
                You can find{" "}
                <Link href="https://bit.ly/HorizonsNepalDonate" isExternal>
                  our fundraising campaign here
                </Link>{" "}
                if you want to join us on our adventure!
              </Text>
              <Text>
                Follow the New Sauraha Day Care Centre{" "}
                <Link href="https://www.facebook.com/people/New-sauraha-daycare-centre/100067792186502/">
                  on Facebook
                </Link>
                .
              </Text>
            </>
          ),
        }[locale]
      }
      <Text>
        {
          {
            FR: "Derahai Danayabad (Merci beaucoup).",
            EN: "Derahai Danayabad (Thank you very much).",
          }[locale]
        }
      </Text>
      <Heading as="p" size="sm">
        धेरै धन्यवाद
      </Heading>
    </>
  );
};
