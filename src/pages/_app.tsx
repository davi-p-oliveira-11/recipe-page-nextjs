import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Metadata } from "next";
import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/outfit/static/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/outfit/static/Outfit-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

const youngSerif = localFont({
  src: [
    {
      path: "../../public/fonts/young-serif/YoungSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-young-serif",
});

export const metadata: Metadata = {
  title: "Omelette Recipe",
  description: "Learn to cook an omelette !",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
