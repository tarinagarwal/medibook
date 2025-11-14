import { createUploadthing, type FileRouter } from "uploadthing/express";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 10,
    },
  })
    .middleware(async ({ req, res }) => {
      // This code runs on your server before upload
      // You can add authentication here if needed
      // For now, we'll allow uploads during registration (before auth)

      return { uploadedBy: "hospital" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Image upload complete for:", metadata.uploadedBy);
      console.log("File URL:", file.url);

      // Return data to the client
      return { url: file.url };
    }),

  documentUploader: f({
    pdf: {
      maxFileSize: "8MB",
      maxFileCount: 5,
    },
  })
    .middleware(async ({ req, res }) => {
      return { uploadedBy: "hospital" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Document upload complete for:", metadata.uploadedBy);
      console.log("File URL:", file.url);

      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
