import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-300": `#FFFFFF0D`,
        "white-200": `#FFFFFF33`,
        "white-100": `#FFFFFF80`,
        "dark-100": `#333234`,
        dark: `#1C1C1E`,
        "gray-100": `#9D9C9C`,
        gray: `#D8D3CC`,
        "orange-300": `#e6590d`,
        "orange-200": `#FFE0CE`,
        "orange-100": `#F25D23`,
        orange: `#FF630B`,
      },
      screens: {
        desktop: {min: "1920px"},
      },
    },
  },
  plugins: [],
};
export default config;
