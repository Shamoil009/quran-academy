import * as Yup from "yup";

export const loginSchema = Yup.object({
  //   name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).required("Please enter your password"),
});

export const fillFormSchema = Yup.object({
  fullName: Yup.string().min(1).required("name is required"),
  email: Yup.string().email().min(1).required("email is required"),
  gender: Yup.string().oneOf(["male", "female", "Rather not say"]),
  number: Yup.string()
    .matches(/^\d{8,25}$/, "Number must be between 8 and 25 digits and no special characters like (+, -)")
    .required("whatsapp no is required"),
  country: Yup.string().min(1).required("country is required"),
  courses: Yup.string().min(1).required("select atleast one course"),
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
