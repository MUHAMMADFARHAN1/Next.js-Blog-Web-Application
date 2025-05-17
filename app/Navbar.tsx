import Link from "next/link";

export default function Nav() {
  return (
    <nav className="py-8 bg-gray-400 space-x-6 mx-auto">
      <div className="px-10 space-x-6">
        <Link href="/main">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
