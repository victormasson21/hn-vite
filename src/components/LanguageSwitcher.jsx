import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../App";

export const LanguageSwitcher = ({ setLocale }) => {
  const locale = useContext(LanguageContext);
  return (
    <Button
      onClick={() => setLocale(locale === "EN" ? "FR" : "EN")}
      variant="link"
      mr={-2}
    >
      {locale === "EN" ? "FR" : "EN"}
    </Button>
  );
};
