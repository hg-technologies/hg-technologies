// services/uploadService.js

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL_DEV_UPLOAD 

/**
 * Validate resume file
 * Only PDF allowed
 * Max size: 50MB
 */
export const validateResumeFile = (file) => {
  if (!file) {
    return { isValid: false, error: "Please upload your resume." };
  }

  // Only PDF
//   if (file.type !== "application/pdf") {
//     return { isValid: false, error: "Only PDF files are allowed." };
//   }

  // Max size 50 MB
  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    return { isValid: false, error: "File size must be less than 50MB." };
  }

  return { isValid: true };
};

/**
 * Automatically add timestamp_suffix to file
 */
const appendTimestampToFile = (file) => {
  const timestamp = Date.now();
  const ext = file.name.substring(file.name.lastIndexOf("."));
  const newName = file.name.replace(ext, `_${timestamp}${ext}`);

  return new File([file], newName, { type: file.type });
};

/**
 * Upload file to backend
 */
export const uploadResume = async (file) => {
  try {
    const updatedFile = appendTimestampToFile(file);

    const formData = new FormData();
    formData.append("file", updatedFile);

    const response = await fetch(`${BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed. Please try again.");
    }

    const result = await response.json();

    if (!result?.data?.length) {
      throw new Error("Upload failed. No file URL returned.");
    }

    return {
      success: true,
      url: result.data[0].url,
      publicId: result.data[0].public_id,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message || "Upload failed",
    };
  }
};
