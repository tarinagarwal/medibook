export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: string;
      email: string;
      role: "admin" | "hospital";
      facilityName?: string;
    };
    accessToken: string;
    refreshToken: string;
  };
}

export interface AuthUser {
  id: string;
  email: string;
  role: "admin" | "hospital";
}
