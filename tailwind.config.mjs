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
            lighthover: '#E8F5FD',
            darkhover: '#657786',
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
    }
  },
  plugins: []
};

export default config;
