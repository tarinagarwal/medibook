import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../lib/api-client";
import { useAuthStore } from "../stores/authStore";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await apiClient.post("/hospital/login", data);

      if (response.data.success) {
        const { user, accessToken, refreshToken } = response.data.data;

        setAuth(user, accessToken, refreshToken);
        toast.success("Login successful!");

        // Redirect based on verification status
        if (user.verificationStatus === "PENDING") {
          navigate("/verification-pending");
        } else if (user.verificationStatus === "APPROVED") {
          navigate("/dashboard");
        } else if (user.verificationStatus === "REJECTED") {
          navigate("/verification-rejected");
        } else if (user.registrationStep < 3) {
          navigate(`/register/step${user.registrationStep + 1}/${user.id}`);
        }
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-olive-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-olive-600 to-olive-800 rounded-2xl mb-4">
            <span className="text-white font-bold text-2xl">M</span>
          </div>
          <h1 className="text-3xl font-bold text-olive-900">Hospital Portal</h1>
          <p className="text-gray-600 mt-2">Sign in to manage your facility</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-olive-600 hover:text-olive-700 font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register/step1"
                className="text-olive-600 font-semibold hover:underline"
              >
                Register Now
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-gray-600 hover:text-olive-600 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
