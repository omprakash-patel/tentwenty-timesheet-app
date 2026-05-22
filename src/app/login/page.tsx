"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    // VALIDATION
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const result = await signIn(
        "credentials",
        {
          email,
          password,
          redirect: false,
        }
      );

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center bg-[#f7f7f7] px-6 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md"
        >
          <h1 className="mb-10 text-4xl font-bold text-black">
            Welcome back
          </h1>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-black">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-black">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="h-14 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* REMEMBER */}
          <div className="mb-6 flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600"
            >
              Remember me
            </label>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              "Sign in"
            )}
          </button>

          {/* DEMO LOGIN */}
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-2 text-sm font-semibold text-blue-700">
              Demo Credentials
            </p>

            <p className="text-sm text-gray-700">
              Email: admin@test.com
            </p>

            <p className="text-sm text-gray-700">
              Password: 123456
            </p>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden bg-blue-600 px-16 text-white md:flex md:flex-col md:justify-center">
        <div className="max-w-md">
          <h2 className="mb-6 text-6xl font-bold tracking-tight">
            ticktock
          </h2>

          <p className="text-lg leading-9 text-blue-100">
            Introducing ticktock, our cutting-edge
            timesheet web application designed to
            revolutionize how you manage employee
            work hours. With ticktock, you can
            effortlessly track and monitor employee
            attendance and productivity from
            anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
}