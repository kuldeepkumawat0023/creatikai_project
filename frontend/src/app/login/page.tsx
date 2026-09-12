"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrSend } from "react-icons/gr";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      swal("Error", "Please enter both email and password.", "error");
      return;
    }

    try {
      setLoading(true);

      // ✅ Send login request to backend
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 👈 allows JWT cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data.success) {
        // ✅ Save token & admin info
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminData", JSON.stringify(data.admin));


         window.dispatchEvent(new Event("authChange"));

        swal("Success", "Login successful!", "success").then(() => {
          router.push("/home"); // redirect after login
        });
      } else {
        swal("Error", data.message || "Invalid email or password.", "error");
      }
    } catch (err: any) {
      swal("Error", err.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 text-white py-[120px]">
      <div className="w-full sm:w-[90%] md:w-[500px] border bg-gray-950 p-6 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-green-400">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="w-full relative">
            <div className="flex items-center w-full py-3 relative">
              <TfiEmail className="text-3xl text-gray-500 absolute left-0 top-6" />
              <label
                htmlFor="email"
                className="w-full pl-10 relative group cursor-text"
              >
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Email Address"
                />
                <p
                  className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                >
                  Email Address
                </p>
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="w-full relative">
            <div className="flex items-center w-full py-3 relative">
              <RiLockPasswordLine className="text-3xl text-gray-500 absolute left-0 top-6" />
              <label
                htmlFor="password"
                className="w-full pl-10 relative group cursor-text"
              >
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="peer text-gray-300 text-[18px] outline-none w-full bg-transparent border-b border-gray-500 
                    focus:border-gray-300 transition-all duration-300 placeholder-transparent pb-3"
                  placeholder="Password"
                />
                <p
                  className="absolute left-[40px] top-2 text-gray-500 text-[18px] transition-all duration-300 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-[18px]
                    peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-300 
                    peer-valid:-top-6 peer-valid:text-sm peer-valid:text-gray-300 px-1"
                >
                  Password
                </p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-[180px] bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all duration-300"
            >
              <GrSend className="text-xl" />
              <span className="text-[16px]">
                {loading ? "Please wait..." : "Login"}
              </span>
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-400 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}



