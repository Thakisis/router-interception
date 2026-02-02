import Link from "next/link";

function NavBar() {
  return (
    <div className="fixed inset-x-0 top-0 flex  px-6 py-4 justify-between">
      <div>logo</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/login">login</Link>
      </div>
    </div>
  );
}

export default NavBar;
