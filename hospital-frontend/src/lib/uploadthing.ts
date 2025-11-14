import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
} from "@uploadthing/react";

import type { OurFileRouter } from "../../../backend/src/lib/uploadthing";

export const UploadButton = generateUploadButton<OurFileRouter>({
  url: `${import.meta.env.VITE_API_URL}/uploadthing`,
});

export const UploadDropzone = generateUploadDropzone<OurFileRouter>({
  url: `${import.meta.env.VITE_API_URL}/uploadthing`,
});

export const { useUploadThing } = generateReactHelpers<OurFileRouter>({
  url: `${import.meta.env.VITE_API_URL}/uploadthing`,
});
