import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        background: "#f3e5d7",
        stone150: "#e3ddd7",
        stone600: "#5f564e",
        stone900: "#302d2b",
        brown800: "#854532",
        rose800: "#7b274e",
        rose50: "#fff4f9",
      },
      fontFamily: {
        "young-serif": ["var(--font-young-serif)"],
        outfit: ["var(--font-outfit)"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
} satisfies Config;
