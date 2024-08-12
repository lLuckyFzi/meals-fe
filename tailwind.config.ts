import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      corinthia: ['"Corinthia"'],
      kumbhSans: ['"Kumbh Sans"'],
      lusitana: ['"Lusitana"'],
    },
    extend: {
      colors: {
        primaryBlue: "#1383D2",
        secondaryBlue: "#1798F4",
        grayText: "#5A5A5A",
      },
    },
  },
  plugins: [],
};
export default config;
