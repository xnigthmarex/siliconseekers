import { Inter } from "next/font/google";
import { Vollkorn } from "next/font/google";
import "./globals.css";
import Experience from "@/app/dashboard/components/Experience";

const vollkorn = Vollkorn({ subsets: ["latin"] });

export const metadata = {
  title: "TrackWell",
  description: "Productivity at its finest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
        <body className={vollkorn.className}>
          <div className="h-screen w-screen">
            <Experience>{children}</Experience>
          </div>
        </body>
    </html>
  );
}
