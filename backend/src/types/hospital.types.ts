export interface HospitalRegistrationStep1 {
  accountType: "HOSPITAL" | "CLINIC" | "DIAGNOSTIC_CENTER";
  facilityName: string;
  registrationNumber: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  password: string;
}

export interface HospitalRegistrationStep2 {
  description: string;
  specializations: string[];
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

export interface HospitalRegistrationStep3 {
  licenseDocumentUrl: string;
  certificationUrls: string[];
  facilityPhotoUrls: string[];
}

export interface HospitalVerificationRequest {
  hospitalId: string;
  action: "approve" | "reject";
  rejectionReason?: string;
}

export interface HospitalListQuery {
  status?: "PENDING" | "UNDER_REVIEW" | "APPROVED" | "REJECTED";
  accountType?: "HOSPITAL" | "CLINIC" | "DIAGNOSTIC_CENTER";
  search?: string;
  page?: number;
  limit?: number;
}
