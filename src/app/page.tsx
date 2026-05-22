import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-8 text-center w-[300px]">
        <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
        <p className="text-gray-500 mb-6">
          Please login to continue
        </p>

        <Link
          href="/login"
          className="inline-block w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}