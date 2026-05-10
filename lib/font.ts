import {
  JetBrains_Mono as FontMono,
  Lato as FontSans,
  Lora as FontSerif,
} from "next/font/google";
import localFont from "next/font/local";
// import { GeistMono } from "geist/font/mono"

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = FontSerif({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "latin",
    "latin-ext",
    "symbols",
    "vietnamese",
  ],
  variable: "--font-serif",
});
