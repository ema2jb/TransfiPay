import * as yup from "yup";

export const createBizSchema = yup.object().shape({
    name: yup
        .string()
        .required("Business name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    phoneNumber: yup
        .number()
        .min(8, "Password should be of minimum 8 characters length")
        .required("phone number is required"),
    country: yup
        .string()
        .required("country is required"),
    address: yup
        .string()
        .required("we would love to know where your business is located"),
    description:yup
        .string()
        .required("please give your business a description"),   
})