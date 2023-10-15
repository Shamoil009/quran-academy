import * as Yup from "yup";

export const loginSchema = Yup.object({
  //   name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
});

export const signupSchema = Yup.object({
  //   name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Field is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export const otpSchema = Yup.object({
  otp: Yup.string()
    .min(6, "Enter 6 digits of otp")
    .max(6, "Enter 6 digits of otp")
    .required("Please enter otp"),
});

export const addLectureSchema = Yup.object({
  thumbnail: Yup.mixed()
    .nullable("nullable")
    .required("File is required")
    .test("FILE_SIZE", "uploaded file is too big", (value: any) => {
      return !value || (value && value.size <= 1024 * 1024 * 100); // 100 MB limit
    })
    .test("FILE_FORMAT", "Uploaded file has not png format.", (value: any) => {
      const SUPPORTED_FORMATS = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];
      return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
    }),

  video: Yup.mixed()
    .nullable()
    .required("File is required")
    .test("FILE_SIZE", "uploaded file is too big", (value: any) => {
      return !value || (value && value.size <= 1024 * 1024 * 100); // 100 MB limit
    })
    .test(
      "FILE_FORMAT",
      "Uploaded file has not mp4/mkv format.",
      (value: any) => {
        const SUPPORTED_FORMATS = ["video/mp4", "video/mkv"];
        return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
      },
    ),
  title: Yup.string().min(8).required("Please enter your password"),
  notespdf: Yup.mixed()
    .nullable("nullable")
    .required("File is required")
    .test("FILE_SIZE", "uploaded file is too big", (value: any) => {
      return !value || (value && value.size <= 1024 * 1024 * 100); // 100 MB limit
    })
    .test("FILE_FORMAT", "Uploaded file has not pdf format.", (value: any) => {
      const SUPPORTED_FORMATS = ["application/pdf"];
      return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
    }),
  description: Yup.string().min(8).required("Please enter your password"),
  // private: true,
  // public: false,
});

export const imageFileSchema = Yup.object({
  file: Yup.mixed()
    .nullable("nullable")
    .required("File is required")
    .test("FILE_SIZE", "uploaded file is too big", (value: any) => {
      return !value || (value && value.size <= 1024 * 1024 * 100); // 100 MB limit
    })
    .test("FILE_FORMAT", "Uploaded file has not png format.", (value: any) => {
      const SUPPORTED_FORMATS = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];
      return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
    }),
});

export const videoFileSchema = Yup.object({
  file: Yup.mixed()
    .nullable()
    .required("File is required")
    .test("FILE_SIZE", "uploaded file is too big", (value: any) => {
      return !value || (value && value.size <= 1024 * 1024 * 100); // 100 MB limit
    })
    .test(
      "FILE_FORMAT",
      "Uploaded file has not mp4/mkv format.",
      (value: any) => {
        const SUPPORTED_FORMATS = ["video/mp4", "video/mkv"];
        return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
      },
    ),
});
