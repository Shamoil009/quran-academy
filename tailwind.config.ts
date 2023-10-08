import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#146C94",
        primaryHover: "#19A7CE",
        secondaryColor: "#19A7CE",
        secondaryHover: "#3493ad",
        tertiaryColor: "#AFD3E2",
        backgroundColor: "#F6F1F1",

        textPrimaryColor: "#153060",
        textSecondaryColor: "#22022B",
        textTertiaryColor: "#2C292C",
        FooterColor: "#4D4D4D",

        courseBgColor: "#F9FAFF",
        moduleCard: "#ADB2C0",
      },
      backgroundColor: {
        moduledropdownContent: "#BEBEBE",
        senderbg: "#EDEDED",
        closeTag: "#830D0D",
        inputColor: "#FAFAFA",
        "bg-footer": "#FCFCFC",
      },
      backgroundImage: {
        "home-student": "linear-gradient(180deg, #17005E 0%, #340FA6 100%);",
        "header-select":
          "linear-gradient(90deg, #FFF 46.81%, rgba(217, 217, 217, 0.00) 70%);",
        BackgroundImage: "url('/images/landing-background.jpg')",
        courseDetail: "url('/images/course-detail-image.jpg')",
      },
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"],

        Roboto: ["'Roboto', sans-serif"],

        Inter: ["'Inter',sans-serif"],
      },
      boxShadow: {
        "login-signup": "0px 4px 52px rgba(0, 0, 0, 0.13)",
        modal: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
export default config;
