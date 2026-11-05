const donate = "https://bit.ly/HorizonsNepalDonate";
const schoolFacebook =
  "https://www.facebook.com/people/New-sauraha-daycare-centre/100067792186502/";

export const contact = {
  email: "horizons.nepal34@gmail.com",
  phone: { href: "tel:0033630407786", label: "+33 6 30 40 77 86" },
  intro: [
    {
      type: "text",
      FR: "N'hésitez pas à nous contacter si vous avez plus de questions.",
      EN: "Please do not hesitate to contact us if you have more questions.",
    },
  ],
  outro: [
    {
      type: "text",
      FR: [
        "Vous pouvez retrouver ",
        { text: "notre campagne de financement ici", href: donate },
        " si vous souhaitez nous rejoindre dans notre aventure !",
      ],
      EN: [
        "You can find ",
        { text: "our fundraising campaign here", href: donate },
        " if you want to join us on our adventure!",
      ],
    },
    {
      type: "text",
      FR: [
        "Suivez le New Sauraha Day Care Centre ",
        { text: "sur Facebook", href: schoolFacebook },
        ".",
      ],
      EN: [
        "Follow the New Sauraha Day Care Centre ",
        { text: "on Facebook", href: schoolFacebook },
        ".",
      ],
    },
    {
      type: "text",
      FR: "Derahai Danayabad (Merci beaucoup).",
      EN: "Derahai Danayabad (Thank you very much).",
    },
    { type: "heading", FR: "धेरै धन्यवाद", EN: "धेरै धन्यवाद" },
  ],
};
