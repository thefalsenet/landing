import {
  JetBrains_Mono as FontMono,
  Lora as FontSerif,
} from "next/font/google";

// Body text uses the platform system font (the iOS app's body token is
// unset, which resolves to SF there); --font-sans in globals.css carries
// the equivalent web stack, so no sans webfont is loaded.

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
