import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/conference"}>Conference</Link>
          </li>
          <li>
            <Link href={"/settings"}>Settings</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
