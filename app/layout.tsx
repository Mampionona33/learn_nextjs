"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { getSession, SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ul className="nav">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/conference">Conference</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              {session ? (
                <Link href="/logout">Logout</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
