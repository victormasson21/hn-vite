import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Salsa';
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Salsa-Regular-400.ttf') format('truetype');
      }
      `}
  />
);
