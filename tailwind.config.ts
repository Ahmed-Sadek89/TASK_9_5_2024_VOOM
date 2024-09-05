import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "custom-green": "#01939c",
        "custom-green2": "#025c61",
        "custom-black": "#12141d",
        "custom-gray": "rgba(160, 179, 176, .25)",
        "custom-white": "#a0b3b0"
      }
    },
  },
  plugins: [],
};
export default config;
