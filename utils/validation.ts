import * as Yup from "yup";

export const loginSchema = Yup.object({
  //   name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).required("Please enter your password"),
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



