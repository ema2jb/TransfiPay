import * as yup from "yup";

export const createBizSchema = yup.object().shape({
    bizName: yup
        .string()
        .required("Business name is required"),
    bizEmail: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    bizPhone: yup
        .number()
        .min(8, "Password should be of minimum 8 characters length")
        .required("phone number is required"),
    bizCountry: yup
        .string()
        .required("country is required"),
    bizAddress: yup
        .string()
        .required("we would love to know where your business is located"),
    bizDescription:yup
        .string()
        .required("please give your business a description"),   
})