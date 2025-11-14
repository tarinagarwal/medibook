import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "../lib/uploadthing";

// Export routes for Express
export const uploadthingRoutes = createRouteHandler({
  router: uploadRouter,
  config: {
    uploadthingId: process.env.UPLOADTHING_APP_ID,
    uploadthingSecret: process.env.UPLOADTHING_SECRET,
  },
});
