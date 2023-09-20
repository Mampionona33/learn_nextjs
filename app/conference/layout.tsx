export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <h1>GROBOMATICS MANIACALLY TAKING TECH</h1>
      <section>{children}</section>
    </>
  );
}
