
import { Vollkorn_SC } from "next/font/google";
import "./global.css";

const vc = Vollkorn_SC({ subsets: ["latin"]});

export const metadata = {
  title: "TrackWell",
  description: "Productivity at its finest",
};

export default function RootLayout({ children }) {
  return <body className={vc.className}>{children}</body>;
}
