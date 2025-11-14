import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiClient from "../../lib/api-client";

interface Step2FormData {
  description: string;
  specializations: string;
  operatingHours: {
    [key: string]: {
      open: string;
      close: string;
      isClosed: boolean;
    };
  };
  latitude?: number;
  longitude?: number;
}

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Step2Facility = () => {
  const navigate = useNavigate();
  const { hospitalId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [operatingHours, setOperatingHours] = useState<any>({
    monday: { open: "09:00", close: "17:00", isClosed: false },
    tuesday: { open: "09:00", close: "17:00", isClosed: false },
    wednesday: { open: "09:00", close: "17:00", isClosed: false },
    thursday: { open: "09:00", close: "17:00", isClosed: false },
    friday: { open: "09:00", close: "17:00", isClosed: false },
    saturday: { open: "09:00", close: "14:00", isClosed: false },
    sunday: { open: "09:00", close: "14:00", isClosed: true },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2FormData>();

  const handleDayToggle = (day: string) => {
    setOperatingHours({
      ...operatingHours,
      [day]: {
        ...operatingHours[day],
        isClosed: !operatingHours[day].isClosed,
      },
    });
  };

  const handleTimeChange = (
    day: string,
    field: "open" | "close",
    value: string
  ) => {
    setOperatingHours({
      ...operatingHours,
      [day]: {
        ...operatingHours[day],
        [field]: value,
      },
    });
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const specializations = data.specializations
        .split(",")
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0);

      const response = await apiClient.post(
        `/hospital/register/step2/${hospitalId}`,
        {
          description: data.description,
          specializations,
          operatingHours,
          latitude: data.latitude ? parseFloat(data.latitude) : undefined,
          longitude: data.longitude ? parseFloat(data.longitude) : undefined,
        }
      );

      if (response.data.success) {
        toast.success("Step 2 completed successfully!");
        navigate(`/register/step3/${hospitalId}`);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Failed to save facility details"
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
            <div className="flex items-center">
              <div className="w-10 h-10 bg-olive-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <span className="ml-3 font-semibold text-olive-900">
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
            <div className="h-full w-2/3 bg-olive-600 rounded-full"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-olive-900 mb-2">
            Facility Details
          </h2>
          <p className="text-gray-600 mb-6">
            Tell us more about your facility and services
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Facility Description *
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="Describe your facility, services, and what makes you unique..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Specializations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Specializations *
              </label>
              <input
                type="text"
                {...register("specializations", {
                  required: "Specializations are required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                placeholder="e.g., Cardiology, Neurology, Pediatrics (comma-separated)"
              />
              {errors.specializations && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.specializations.message}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Separate multiple specializations with commas
              </p>
            </div>

            {/* Operating Hours */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Operating Hours *
              </label>
              <div className="space-y-3">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-32">
                      <span className="font-medium text-gray-700 capitalize">
                        {day}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      {!operatingHours[day].isClosed ? (
                        <>
                          <input
                            type="time"
                            value={operatingHours[day].open}
                            onChange={(e) =>
                              handleTimeChange(day, "open", e.target.value)
                            }
                            className="px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="time"
                            value={operatingHours[day].close}
                            onChange={(e) =>
                              handleTimeChange(day, "close", e.target.value)
                            }
                            className="px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </>
                      ) : (
                        <span className="text-gray-500 italic">Closed</span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        operatingHours[day].isClosed
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      {operatingHours[day].isClosed ? "Open" : "Closed"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Location (Optional) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Latitude (Optional)
                </label>
                <input
                  type="number"
                  step="any"
                  {...register("latitude")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  placeholder="e.g., 40.7128"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Longitude (Optional)
                </label>
                <input
                  type="number"
                  step="any"
                  {...register("longitude")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                  placeholder="e.g., -74.0060"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold text-lg"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-4 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Saving..." : "Continue to Step 3"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2Facility;
