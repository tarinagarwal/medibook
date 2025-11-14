import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../../lib/api-client";

interface Step1FormData {
  accountType: "HOSPITAL" | "CLINIC" | "DIAGNOSTIC_CENTER";
  facilityName: string;
  registrationNumber: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const Step1Initial = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1FormData>();

  const password = watch("password");

  const onSubmit = async (data: Step1FormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.post("/hospital/register/step1", {
        accountType: data.accountType,
        facilityName: data.facilityName,
        registrationNumber: data.registrationNumber,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        address: data.address,
        password: data.password,
      });

      if (response.data.success) {
        toast.success("Step 1 completed successfully!");
        navigate(`/register/step2/${response.data.data.id}`);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-olive-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <span className="ml-3 font-semibold text-olive-900">
                Initial Registration
              </span>
            </div>
            <div className="flex items-center opacity-40">
              <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="ml-3 font-semibold text-gray-600">
                Facility Details
              </span>
            </div>
            <div className="flex items-center opacity-40">
              <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="ml-3 font-semibold text-gray-600">
                Documents
              </span>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="h-full w-1/3 bg-olive-600 rounded-full"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-olive-900 mb-2">
            Register Your Facility
          </h2>
          <p className="text-gray-600 mb-6">
            Let's start with basic information about your facility
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Account Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Account Type *
              </label>
              <select
                {...register("accountType", {
                  required: "Account type is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
              >
                <option value="">Select account type</option>
                <option value="HOSPITAL">Hospital</option>
                <option value="CLINIC">Clinic</option>
                <option value="DIAGNOSTIC_CENTER">Diagnostic Center</option>
              </select>
              {errors.accountType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.accountType.message}
                </p>
              )}
            </div>

            {/* Facility Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Facility Name *
              </label>
              <input
                type="text"
                {...register("facilityName", {
                  required: "Facility name is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter facility name"
              />
              {errors.facilityName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.facilityName.message}
                </p>
              )}
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Registration Number *
              </label>
              <input
                type="text"
                {...register("registrationNumber", {
                  required: "Registration number is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter registration number"
              />
              {errors.registrationNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.registrationNumber.message}
                </p>
              )}
            </div>

            {/* Contact Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                {...register("contactEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter email address"
              />
              {errors.contactEmail && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>

            {/* Contact Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Phone *
              </label>
              <input
                type="tel"
                {...register("contactPhone", {
                  required: "Phone number is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter phone number"
              />
              {errors.contactPhone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactPhone.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                {...register("address", { required: "Address is required" })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Enter complete address"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Continue to Step 2"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-olive-600 font-semibold hover:underline"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1Initial;
