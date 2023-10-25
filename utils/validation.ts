import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).required("Please enter your password"),
});

export const fillFormSchema = Yup.object({
  fullName: Yup.string().min(2).required("name is required"),
  email: Yup.string().email().min(1).required("email is required"),
  gender: Yup.string().oneOf(["male", "female", "Rather not say"]),
  number: Yup.string()
    .matches(
      /^\d{8,25}$/,
      "Number must be between 8 and 25 digits and no special characters like (+, -)",
    )
    .required("whatsapp no is required"),
  country: Yup.string().min(1).required("country is required"),
  courses: Yup.string().min(1).required("select atleast one course"),
});
