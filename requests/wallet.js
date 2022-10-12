import axios from "axios"
import {
    getCoinList,
    getDepositAddress,
    withdraw
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

export const getDepositAddressRequest = async(coinIdOrSymbol, blockChainNetwork) =>{
    const response = await  axios({
          method: "get",
          url: getDepositAddress(coinIdOrSymbol, blockChainNetwork),
      })
      return response
}

export const withdrawRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: withdraw,
          data: _data,
      })
      return response
  }
