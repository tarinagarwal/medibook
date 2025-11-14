import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../lib/api-client";
import { useAuthStore } from "../stores/authStore";

interface Hospital {
  id: string;
  facilityName: string;
  accountType: string;
  registrationNumber: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  description: string;
  specializations: string[];
  operatingHours: any;
  latitude?: number;
  longitude?: number;
  licenseDocumentUrl?: string;
  certificationUrls: string[];
  facilityPhotoUrls: string[];
  verificationStatus: string;
  verifiedAt?: string;
  rejectionReason?: string;
  createdAt: string;
}

const HospitalDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { clearAuth } = useAuthStore();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetchHospital();
  }, [id]);

  const fetchHospital = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get(`/admin/hospitals/${id}`);
      if (response.data.success) {
        setHospital(response.data.data);
      }
    } catch (error: any) {
      toast.error("Failed to fetch hospital details");
      if (error.response?.status === 401) {
        clearAuth();
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async () => {
    if (!confirm("Are you sure you want to approve this hospital?")) return;

    setIsProcessing(true);
    try {
      const response = await apiClient.patch(`/admin/hospitals/${id}/approve`);
      if (response.data.success) {
        toast.success("Hospital approved successfully!");
        fetchHospital();
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to approve hospital"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      toast.error("Please provide a rejection reason");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await apiClient.patch(`/admin/hospitals/${id}/reject`, {
        reason: rejectionReason,
      });
      if (response.data.success) {
        toast.success("Hospital rejected");
        setShowRejectModal(false);
        fetchHospital();
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to reject hospital");
    } finally {
      setIsProcessing(false);
    }
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-olive-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-olive-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading hospital details...</p>
        </div>
      </div>
    );
  }

  if (!hospital) {
    return (
      <div className="min-h-screen bg-olive-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Hospital not found</p>
          <button
            onClick={() => navigate("/hospitals")}
            className="mt-4 px-6 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-olive-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-olive-700 to-olive-900 text-white p-4 md:p-6 shadow-lg">
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/hospitals")}
            className="flex items-center gap-2 text-white hover:text-olive-200 mb-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Hospital List
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{hospital.facilityName}</h1>
              <p className="text-olive-200 mt-1">
                {hospital.accountType.replace("_", " ")}
              </p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                hospital.verificationStatus
              )}`}
            >
              {hospital.verificationStatus}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-olive-900 mb-4">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Registration Number
                  </label>
                  <p className="text-gray-900">{hospital.registrationNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Contact Email
                  </label>
                  <p className="text-gray-900">{hospital.contactEmail}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Contact Phone
                  </label>
                  <p className="text-gray-900">{hospital.contactPhone}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Registered On
                  </label>
                  <p className="text-gray-900">
                    {new Date(hospital.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-semibold text-gray-600">
                    Address
                  </label>
                  <p className="text-gray-900">{hospital.address}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-olive-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700">
                {hospital.description || "No description provided"}
              </p>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-olive-900 mb-4">
                Specializations
              </h2>
              <div className="flex flex-wrap gap-2">
                {hospital.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            {hospital.operatingHours && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-olive-900 mb-4">
                  Operating Hours
                </h2>
                <div className="space-y-2">
                  {Object.entries(hospital.operatingHours).map(
                    ([day, hours]: [string, any]) => (
                      <div
                        key={day}
                        className="flex justify-between items-center py-2 border-b"
                      >
                        <span className="font-medium text-gray-700 capitalize">
                          {day}
                        </span>
                        <span className="text-gray-600">
                          {hours.isClosed
                            ? "Closed"
                            : `${hours.open} - ${hours.close}`}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-olive-900 mb-4">
                Documents
              </h2>
              <div className="space-y-3">
                {hospital.licenseDocumentUrl && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-8 h-8 text-olive-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="font-medium text-gray-900">
                        License Document
                      </span>
                    </div>
                    <a
                      href={hospital.licenseDocumentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 text-sm"
                    >
                      View
                    </a>
                  </div>
                )}
                {hospital.certificationUrls.map((url, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-900">
                      Certification {index + 1}
                    </span>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 text-sm"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Facility Photos */}
            {hospital.facilityPhotoUrls.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-olive-900 mb-4">
                  Facility Photos
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {hospital.facilityPhotoUrls.map((url, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-sm text-gray-500">
                        Photo {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            {hospital.verificationStatus === "PENDING" && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-olive-900 mb-4">
                  Actions
                </h2>
                <div className="space-y-3">
                  <button
                    onClick={handleApprove}
                    disabled={isProcessing}
                    className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-50"
                  >
                    {isProcessing ? "Processing..." : "Approve Hospital"}
                  </button>
                  <button
                    onClick={() => setShowRejectModal(true)}
                    disabled={isProcessing}
                    className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold disabled:opacity-50"
                  >
                    Reject Hospital
                  </button>
                </div>
              </div>
            )}

            {/* Rejection Reason */}
            {hospital.verificationStatus === "REJECTED" &&
              hospital.rejectionReason && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-red-900 mb-4">
                    Rejection Reason
                  </h2>
                  <p className="text-gray-700">{hospital.rejectionReason}</p>
                </div>
              )}

            {/* Location */}
            {hospital.latitude && hospital.longitude && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-olive-900 mb-4">
                  Location
                </h2>
                <div className="space-y-2">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Latitude
                    </label>
                    <p className="text-gray-900">{hospital.latitude}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Longitude
                    </label>
                    <p className="text-gray-900">{hospital.longitude}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Reject Hospital
            </h3>
            <p className="text-gray-600 mb-4">
              Please provide a reason for rejecting this hospital registration.
            </p>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 mb-4"
              placeholder="Enter rejection reason..."
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowRejectModal(false)}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                disabled={isProcessing || !rejectionReason.trim()}
                className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold disabled:opacity-50"
              >
                {isProcessing ? "Rejecting..." : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalDetail;
