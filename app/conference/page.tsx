import Link from "next/link";

export default function Conference() {
  return (
    <>
      <h1>Welcome to Conference Page</h1>
      <ul>
        <li>
          <Link href={"/conference/speakers"}>Speakers</Link>
        </li>
        <li>
          <Link href={"/conference/sessions"}>Sessions</Link>
        </li>
      </ul>
    </>
  );
}
