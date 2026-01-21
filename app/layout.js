import { Outfit, Ovo } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Oyku Sahin - Portfolio",
  description: "Portfolio website of Oyku Sahin, a Machine Learning Engineer.",
  icons: {
    icon: "/robot.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
     {children}
      </body>
    </html>
  );
}
