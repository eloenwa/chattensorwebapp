import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin-ext */
      @font-face {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("../fonts/ARIAL.ttf") format('truetype');;
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Haffer-Light';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/Haffer-Light.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Haffer-Meduim';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/Haffer-Medium.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Haffer-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/Haffer-Regular.eot");
        src: url("./fonts/Haffer-Regular.ttf") format('truetype');
        src: url("./fonts/Haffer-Regular.woff") format('woff');
        src: url("./fonts/Haffer-Regular.woff2") format('woff2');
        src: url("./fonts/Haffer-Regular.svg") format('svg');
        src: url("./fonts/Haffer-Regular.otf") format('opentype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'Haffer-SemiBold';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/Haffer-SemiBold.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'HafferSQ-Light';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/HafferSQ-Light.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'HafferSQ-Medium';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/HafferSQ-Medium.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'HafferSQ-Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/HafferSQ-Regular.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'HafferSQ-SemiBold';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/HafferSQ-SemiBold.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'TT Commons Pro Mono Regular';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/TT Commons Pro Mono Regular.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'TT Commons Pro Mono Medium';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./fonts/TT Commons Pro Mono Medium.ttf") format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      `}
  />
)



export default Fonts