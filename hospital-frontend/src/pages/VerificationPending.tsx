import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import apiClient from "../lib/api-client";

const VerificationPending = () => {
  const navigate = useNavigate();
  const { user, clearAuth } = useAuthStore();
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    fetchStatus();
    // Poll every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchStatus = async () => {
    try {
      const response = await apiClient.get("/hospital/verification-status");
      if (response.data.success) {
        setStatus(response.data.data);

        // Redirect if approved
        if (response.data.data.verificationStatus === "APPROVED") {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Failed to fetch status:", error);
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-olive-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-olive-900">MediBook</span>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-gray-700 hover:text-olive-600 font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-olive-900 mb-4">
            Verification Pending
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            Thank you for registering with MediBook! Your application is
            currently under review.
          </p>

          {/* Status Info */}
          <div className="bg-olive-50 border border-olive-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-olive-900 mb-4">
              Application Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Facility Name:</span>
                <span className="font-semibold text-olive-900">
                  {user?.facilityName}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Status:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                  {status?.verificationStatus || "PENDING"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Registration Complete:</span>
                <span className="font-semibold text-olive-900">
                  {status?.isComplete ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              What happens next?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Document Review
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our team will verify your license and certifications
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Facility Verification
                  </h4>
                  <p className="text-sm text-gray-600">
                    We'll review your facility details and photos
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Approval & Activation
                  </h4>
                  <p className="text-sm text-gray-600">
                    You'll receive an email once approved (1-3 business days)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex gap-3 text-left">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Need Help?</h4>
                <p className="text-sm text-blue-800">
                  If you have any questions, contact us at{" "}
                  <a href="mailto:support@medibook.com" className="underline">
                    support@medibook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPending;
