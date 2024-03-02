import { Inter } from "next/font/google";
import { Victor_Mono } from "next/font/google";
import "./globals.css";
import Experience from "@/app/dashboard/components/Experience";

const inter = Inter({ subsets: ["latin"] });
const victor_mono = Victor_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "TrackWell",
  description: "Productivity at its finest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={victor_mono.className}>
          <div className="h-screen w-screen">
            <Experience>{children}</Experience>
          </div>
        </body>
    </html>
  );
}
