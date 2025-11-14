import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../../lib/api-client";
import { useUploadThing } from "../../lib/uploadthing";

const Step3Documents = () => {
  const navigate = useNavigate();
  const { hospitalId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [licenseDocument, setLicenseDocument] = useState<string>("");
  const [certifications, setCertifications] = useState<string[]>([]);
  const [facilityPhotos, setFacilityPhotos] = useState<string[]>([]);

  // UploadThing hooks
  const { startUpload: startDocumentUpload } =
    useUploadThing("documentUploader");
  const { startUpload: startImageUpload } = useUploadThing("imageUploader");

  const handleLicenseUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      toast.error("File size must be less than 8MB");
      return;
    }

    const toastId = toast.loading("Uploading license document...");
    try {
      const uploadedFiles = await startDocumentUpload([file]);
      if (uploadedFiles && uploadedFiles.length > 0) {
        setLicenseDocument(uploadedFiles[0].url);
        toast.success("License document uploaded!", { id: toastId });
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      toast.error("Failed to upload document", { id: toastId });
      console.error("Upload error:", error);
    }
  };

  const handleCertificationUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      toast.error("File size must be less than 8MB");
      return;
    }

    const toastId = toast.loading("Uploading certification...");
    try {
      const uploadedFiles = await startDocumentUpload([file]);
      if (uploadedFiles && uploadedFiles.length > 0) {
        setCertifications([...certifications, uploadedFiles[0].url]);
        toast.success("Certification uploaded!", { id: toastId });
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      toast.error("Failed to upload certification", { id: toastId });
      console.error("Upload error:", error);
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      toast.error("Image size must be less than 4MB");
      return;
    }

    const toastId = toast.loading("Uploading photo...");
    try {
      const uploadedFiles = await startImageUpload([file]);
      if (uploadedFiles && uploadedFiles.length > 0) {
        setFacilityPhotos([...facilityPhotos, uploadedFiles[0].url]);
        toast.success("Photo uploaded!", { id: toastId });
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      toast.error("Failed to upload photo", { id: toastId });
      console.error("Upload error:", error);
    }
  };

  const handleSubmit = async () => {
    if (!licenseDocument) {
      toast.error("License document is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.post(
        `/hospital/register/step3/${hospitalId}`,
        {
          licenseDocumentUrl: licenseDocument,
          certificationUrls: certifications,
          facilityPhotoUrls: facilityPhotos,
        }
      );

      if (response.data.success) {
        toast.success("Registration completed! Awaiting verification.");
        navigate("/verification-pending");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to complete registration"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-olive-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center opacity-60">
              <div className="w-10 h-10 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="ml-3 font-semibold text-olive-900">
                Initial Registration
              </span>
            </div>
            <div className="flex items-center opacity-60">
              <div className="w-10 h-10 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="ml-3 font-semibold text-olive-900">
                Facility Details
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <span className="ml-3 font-semibold text-olive-900">
                Documents
              </span>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="h-full w-full bg-olive-600 rounded-full"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-olive-900 mb-2">
            Upload Documents
          </h2>
          <p className="text-gray-600 mb-6">
            Upload required documents for verification (PDF format, max 8MB
            each)
          </p>

          <div className="space-y-6">
            {/* License Document */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                License Document * (Required)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-olive-500 transition">
                {licenseDocument ? (
                  <div className="flex items-center justify-between bg-olive-50 p-4 rounded-lg">
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
                      <div className="text-left">
                        <span className="text-olive-900 font-medium block">
                          License uploaded
                        </span>
                        <a
                          href={licenseDocument}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-olive-600 hover:underline"
                        >
                          View document
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => setLicenseDocument("")}
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-gray-600 mb-2">
                      Click to upload license document
                    </p>
                    <p className="text-sm text-gray-500">PDF, max 8MB</p>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleLicenseUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Certifications (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-olive-500 transition">
                <label className="cursor-pointer">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-600 mb-2">
                    Click to upload certifications
                  </p>
                  <p className="text-sm text-gray-500">PDF, max 8MB each</p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleCertificationUpload}
                    className="hidden"
                  />
                </label>
              </div>
              {certifications.length > 0 && (
                <div className="mt-3 space-y-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-700">
                          Certification {index + 1}
                        </span>
                        <a
                          href={cert}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-olive-600 hover:underline"
                        >
                          View
                        </a>
                      </div>
                      <button
                        onClick={() =>
                          setCertifications(
                            certifications.filter((_, i) => i !== index)
                          )
                        }
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Facility Photos */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Facility Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-olive-500 transition">
                <label className="cursor-pointer">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-600 mb-2">
                    Click to upload facility photos
                  </p>
                  <p className="text-sm text-gray-500">
                    JPG, PNG, max 4MB each
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
              {facilityPhotos.length > 0 && (
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {facilityPhotos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo}
                        alt={`Facility ${index + 1}`}
                        className="aspect-square object-cover rounded-lg"
                      />
                      <button
                        onClick={() =>
                          setFacilityPhotos(
                            facilityPhotos.filter((_, i) => i !== index)
                          )
                        }
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
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
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Verification Process
                  </h4>
                  <p className="text-sm text-blue-800">
                    After submission, our admin team will review your documents
                    within 1-3 business days. You'll receive an email
                    notification once your registration is approved.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate(`/register/step2/${hospitalId}`)}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold text-lg"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !licenseDocument}
                className="flex-1 py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting..." : "Submit for Verification"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Documents;
