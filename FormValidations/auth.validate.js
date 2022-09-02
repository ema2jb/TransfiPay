import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Firstname is required"),
    lastName: yup
        .string()
        .required("Lastname is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required")
})

export const OtpSchema  = yup.object().shape({
    otpCode:yup
        .number('otp should be a number')
        .min(6, 'password should be a minimum of 8 characters')
        .required('otp is required')
})

export const LoginSchema = yup.object().shape({
    email:yup
        .string()
        .email()
        .required('email is required'),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
})