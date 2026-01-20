/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#657786',
            darkTheme: '#15202B',
            primary: '#1DA1F2',
            secondary: '#14171A',
            accent: '#F5F8FA',
            error: '#E0245E',
            warning: '#FFAD1F',
            info: '#AAB8C2',
        },
        fontFamily: {
            Outfit: ['Outfit', 'sans-serif'],
            Ovo: ['Ovo', 'serif'],
        },
        boxShadow: {
          'black': '4px 4px 0 #000',
          'white': '4px 4px 0 #fff',
        },
    }
  },
  plugins: []
};

export default config;
