import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <Link href={"/home"}>Home</Link>
    </>
  );
}
