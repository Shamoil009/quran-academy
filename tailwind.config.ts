import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00008B",
        primaryHover: "#17005E",
        secondaryColor: "#17005E",
        secondaryHover: "#17009E",
        // bgTertiaryColor: "#F2F7F4",

        textPrimaryColor: "#153060",
        textSecondaryColor: "#22022B",
        textTertiaryColor: "#2C292C",
        FooterColor: "#4D4D4D",
        correctAnswer:"#009D19",
        incorrectAnswer:"#DC493A",
        moduletextColor: "#474747",
        moduleCard:"#ADB2C0",
       
      },
      backgroundColor: {
        moduledropdownContent: "#BEBEBE",
        senderbg: "#EDEDED",
        closeTag: "#830D0D",
        inputColor: "#FAFAFA",
        'bg-footer':  "#FCFCFC",
      },
      backgroundImage: {
        "home-student": "linear-gradient(180deg, #17005E 0%, #340FA6 100%);",
        "header-select":"linear-gradient(90deg, #FFF 46.81%, rgba(217, 217, 217, 0.00) 70%);",       
        BgImage: "url('/images/creator-dashboard-bg-image.svg')",
      },
      fontFamily: {
        SFProText: ["SFPro"],

        MavenProText: ["MavenPro"],
      },
      boxShadow: {
        "login-signup": "0px 4px 52px rgba(0, 0, 0, 0.13)",
        modal: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
      
    },
  },
  plugins: [],
}
export default config
