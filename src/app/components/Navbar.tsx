import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex space-x-6">
      <Link href="/" className="text-gray-800 font-semibold hover:text-teal-600">
        Home
      </Link>
      <Link href="/about" className="text-gray-800 font-semibold hover:text-teal-600">
        About
      </Link>
      <Link href="/features" className="text-gray-800 font-semibold hover:text-teal-600">
        Features
      </Link>
    </nav>
  );
}
