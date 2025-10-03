import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/features">Features</Link>
    </nav>
  );
}
