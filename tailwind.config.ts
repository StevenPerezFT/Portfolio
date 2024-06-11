import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColor1: {
          100: '#F2FBFA',
          200: '#E5F6F5',
          300: '#D9F1F0',
          400: '#C1E7E6',
          500: '#CDE8E5',
          600: '#A6D2CE',
          700: '#80BBB6',
          800: '#5AA59E',
          900: '#3F7570',
        },
        customColor2: {
          100: '#FBFDFF',
          200: '#F7FAFF',
          300: '#F3F7FF',
          400: '#E8F1FF',
          500: '#EEF7FF',
          600: '#D1E5FF',
          700: '#B4D2FF',
          800: '#97BFFF',
          900: '#7BAFFF',
        },
        customColor3: {
          100: '#E4F4F4',
          200: '#C9E9E9',
          300: '#AEDDDD',
          400: '#88CBCB',
          500: '#7AB2B2',
          600: '#5D8F8F',
          700: '#476C6C',
          800: '#324A4A',
          900: '#1C2727',
        },
        customColor4: {
          100: '#E5EDF3',
          200: '#CCDAE7',
          300: '#B2C7DC',
          400: '#8FAABE',
          500: '#4D869C',
          600: '#466F86',
          700: '#3F596F',
          800: '#384359',
          900: '#313D44',
        },
        colorHuntHard: {
          500: "#113F67"
        },
        colorhuntSemiHard: {
          500: "#226597"
        }
      },
    },
  },
  plugins: [],
};
export default config;
