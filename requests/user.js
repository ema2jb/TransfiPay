import axios from "axios"
import {
    changePassword,
    changeEmail,
    changeEmailOtp,
    confirmEmailOtp,
    getUserProfile,
    updateUserProfile,
    updateUserProfilePicture,
    logout
    } from './endpoints'
import useLocalStorage from '../hooks/useLocalStorage';

const {getItem} = useLocalStorage()

const accessToken = getItem('accessToken')

let token=""

if(Boolean(accessToken)){
    token =  accessToken.token
}

axios.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

export const changePasswordRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: changePassword,
          data: _data,
      })
      return response
  }

  export const changeEmailRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: changeEmail,
          data: _data,
      })
      return response
  }

  export const changeEmailOtpRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: changeEmailOtp,
          data: _data,
      })
      return response
  }

  export const confirmEmailOtpRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: confirmEmailOtp,
          data: _data,
      })
      return response
  }

  export const getUserProfileRequest = async(_data) =>{
    const response = await  axios({
          method: "get",
          url: getUserProfile,
          data: _data,
      })
      return response
  }

  export const updateUserProfileRequest = async(_data) =>{
    const response = await  axios({
          method: "put",
          url: updateUserProfile,
          data: _data,
      })
      return response
  }

  export const updateUserProfilPictureeRequest = async(_data) =>{
    const response = await  axios({
          method: "put",
          url: updateUserProfilePicture,
          data: _data,
      })
      return response
  }

  export const logoutRequest = async() =>{
    const response = await  axios({
          method: "post",
          url: logout,
      })
      return response
  }