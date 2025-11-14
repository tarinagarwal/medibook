import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../lib/api-client";
import { useAuthStore } from "../stores/authStore";

interface Stats {
  totalHospitals: number;
  pendingHospitals: number;
  approvedHospitals: number;
  rejectedHospitals: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, clearAuth } = useAuthStore();
  const [stats, setStats] = useState<Stats>({
    totalHospitals: 0,
    pendingHospitals: 0,
    approvedHospitals: 0,
    rejectedHospitals: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchStats();
  }, [user]);

  const fetchStats = async () => {
    try {
      const response = await apiClient.get("/admin/stats");
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error: any) {
      toast.error("Failed to fetch statistics");
      if (error.response?.status === 401) {
        clearAuth();
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-olive-50">
      <header className="bg-gradient-to-r from-olive-700 to-olive-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-olive-700 font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {import.meta.env.VITE_APP_NAME}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto px-4 py-2 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition font-semibold"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-8 border border-olive-200/50">
          <h2 className="text-2xl md:text-3xl font-bold text-olive-900 mb-3 md:mb-4">
            Welcome to Admin Dashboard
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
            Manage hospitals, appointments, and users from this central hub
          </p>

          {/* Stats Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-olive-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading statistics...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="bg-gradient-to-br from-olive-50/90 to-olive-100/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-olive-200/50 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-olive-900">
                      Total Hospitals
                    </h3>
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-olive-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-olive-600">
                    {stats.totalHospitals}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Registered facilities
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br from-yellow-50/90 to-yellow-100/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-yellow-200/50 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate("/hospitals?status=PENDING")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-yellow-900">
                      Pending
                    </h3>
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-yellow-600"
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
                  <p className="text-3xl md:text-4xl font-bold text-yellow-600">
                    {stats.pendingHospitals}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Awaiting verification
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br from-green-50/90 to-green-100/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-green-200/50 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate("/hospitals?status=APPROVED")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-green-900">
                      Approved
                    </h3>
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-green-600">
                    {stats.approvedHospitals}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Active facilities
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br from-red-50/90 to-red-100/70 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-red-200/50 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate("/hospitals?status=REJECTED")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-red-900">
                      Rejected
                    </h3>
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-red-600">
                    {stats.rejectedHospitals}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Rejected applications
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <button
              onClick={() => navigate("/hospitals")}
              className="p-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition shadow-md text-sm md:text-base font-semibold"
            >
              Manage Hospitals
            </button>
            <button
              onClick={() => navigate("/hospitals?status=PENDING")}
              className="p-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition shadow-md text-sm md:text-base font-semibold"
            >
              Verification Queue
            </button>
            <button
              onClick={() => navigate("/hospitals?status=APPROVED")}
              className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md text-sm md:text-base font-semibold"
            >
              Approved Hospitals
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
