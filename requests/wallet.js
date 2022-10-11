import axios from "axios"
import {
    getCoinList
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


export const getCoinListRequest = async() =>{
    const response = await  axios({
          method: "get",
          url: getCoinList,
      })
      return response
  }
