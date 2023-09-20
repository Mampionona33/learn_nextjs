import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <ul>
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
    </>
  );
}
