import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../lib/api-client";
import { useAuthStore } from "../stores/authStore";

interface Hospital {
  id: string;
  facilityName: string;
  accountType: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  verificationStatus: string;
  createdAt: string;
}

const HospitalList = () => {
  const navigate = useNavigate();
  const { clearAuth } = useAuthStore();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHospitals();
  }, [filter]);

  const fetchHospitals = async () => {
    setIsLoading(true);
    try {
      const params: any = {};
      if (filter !== "ALL") params.status = filter;
      if (search) params.search = search;

      const response = await apiClient.get("/admin/hospitals", { params });
      if (response.data.success) {
        setHospitals(response.data.data);
      }
    } catch (error: any) {
      toast.error("Failed to fetch hospitals");
      if (error.response?.status === 401) {
        clearAuth();
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchHospitals();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "APPROVED":
        return "bg-green-100 text-green-800";
      case "REJECTED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-olive-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-olive-700 to-olive-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-olive-700 font-bold text-xl">M</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 bg-olive-600 hover:bg-olive-500 rounded-lg transition font-semibold"
            >
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-olive-700 rounded-lg hover:bg-olive-50 transition font-semibold"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-olive-900 mb-6">
            Hospital Management
          </h2>

          {/* Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by name, email, or registration number..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold"
            >
              Search
            </button>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {["ALL", "PENDING", "APPROVED", "REJECTED"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition ${
                  filter === status
                    ? "bg-olive-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Hospital List */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-olive-600 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading hospitals...</p>
            </div>
          ) : hospitals.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
              <p className="text-gray-600">No hospitals found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Facility Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Registered
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hospitals.map((hospital) => (
                    <tr key={hospital.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-gray-900">
                          {hospital.facilityName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {hospital.address}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {hospital.accountType.replace("_", " ")}
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm text-gray-700">
                          {hospital.contactEmail}
                        </div>
                        <div className="text-sm text-gray-500">
                          {hospital.contactPhone}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            hospital.verificationStatus
                          )}`}
                        >
                          {hospital.verificationStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {new Date(hospital.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => navigate(`/hospitals/${hospital.id}`)}
                          className="px-4 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition text-sm font-semibold"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
