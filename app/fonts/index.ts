import { Cookie, Open_Sans, Sono } from "next/font/google";

export const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
});

export const sono = Sono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
