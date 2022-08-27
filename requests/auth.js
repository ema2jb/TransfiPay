import axios from "axios"
import {
register,
login,
forgotPassword,
resetPassword,
confirmOtp,
resendOtp
} from './endpoints'

const token = ""

axios.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  });


export const signupRequest = async(_data) =>{
  const response = await  axios({
        method: "post",
        url: register,
        data: _data,
    })
    return response
}

export const loginRequest = async(_data) =>{
    const response = await  axios({
        method: "post",
        url: login,
        data: _data,
    })
    return response
}

export const forgotPasswordRequest = async(_data) =>{
    const response = await  axios({
        method: "post",
        url: forgotPassword,
        data: _data,
    })
    return response
}

export const resetPasswordRequest = async(_data) =>{
    const response = await  axios({
        method: "post",
        url: resetPassword,
        data: _data,
    })
    return response
}

export const confirmOtpRequest = async(_data) =>{
    const response = await  axios({
        method: "post",
        url: confirmOtp,
        data: _data,
    })
    return response
}


export const resendOtpRequest = async(_data) =>{
    const response = await  axios({
        method: "post",
        url: resendOtp,
        data: _data,
    })
    return response
}



