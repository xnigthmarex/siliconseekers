import { Inter } from "next/font/google";
import { Victor_Mono } from "next/font/google";
import "./global.css";

const victor_mono = Victor_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "TrackWell",
  description: "Productivity at its finest",
};

export default function RootLayout({ children }) {
  return <body className={victor_mono.className}>{children}</body>;
}
