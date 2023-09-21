import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { singIn, singOut } from "next-auth/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ul className="nav">
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
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/products"}>singIn</Link>
            </li>
            <li>
              <Link href={"/products"}>singOut</Link>
            </li>
          </ul>

          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
