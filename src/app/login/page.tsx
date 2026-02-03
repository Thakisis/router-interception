import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="p-5 pt-20 flex flex-col ">
      <h3>Login Page</h3>
      <div>
        <Link href="/register">Go to Register Page</Link>
      </div>
    </div>
  );
}
