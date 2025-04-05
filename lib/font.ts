import {
  JetBrains_Mono as FontMono,
  Manrope as FontSans,
  Playfair_Display as FontSerif,
} from "next/font/google";
// import { GeistMono } from "geist/font/mono"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});
