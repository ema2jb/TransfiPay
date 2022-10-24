import axios from "axios"
import {
    getCoinList,
    getDepositAddress,
    getBizDepositAddress,
    withdraw,
    bizWithdraw,
    transfer,
    bizTransfer,
    initiateTransfer,
    initiateBizTransfer,
    initiateWithdrawal,
    initiateBizWithdrawal,
    getUserWalletBalances,
    getSwapRate,
    getBizSwapRate,
    swap,
    bizSwap,
    getTradeHistory,
    getDeposits,
    getWithdrawals,
    getTransfers,
    getBizWalletBalances,
    getBizTransactions
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


export const  getBizWalletBalancesRequest = async(bizId) =>{
    const response = await  axios({
          method: "get",
          url: getBizWalletBalances(bizId),
      })
      return response
}

export const getCoinListRequest = async() =>{
    const response = await  axios({
          method: "get",
          url: getCoinList,
      })
      return response
  }

export const getUserWalletBalancesRequest = async() =>{
    const response = await  axios({
          method: "get",
          url: getUserWalletBalances,
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

export const getBizDepositAddressRequest = async(coinIdOrSymbol, blockChainNetwork, bizId) =>{
    const response = await  axios({
          method: "get",
          url: getBizDepositAddress(coinIdOrSymbol, blockChainNetwork, bizId),
      })
      return response
}

export const initiateWithdrawRequest = async() =>{
    const response = await  axios({
          method: "post",
          url: initiateWithdrawal,
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

export const initiateBizWithdrawRequest = async(bizId) =>{
    const response = await  axios({
          method: "post",
          url: initiateBizWithdrawal(bizId),
      })
      return response
  }


export const bizWithdrawRequest = async(_data, bizId) =>{
    const response = await  axios({
          method: "post",
          url: bizWithdraw(bizId),
          data: _data,
      })
      return response
}

export const initiateTransferRequest = async() =>{
    const response = await  axios({
          method: "post",
          url: initiateTransfer,
      })
      return response
  }

export const transferRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: transfer,
          data: _data,
      })
      return response
  }

export const initiateBizTransferRequest = async(bizId) =>{
    const response = await  axios({
          method: "post",
          url: initiateBizTransfer(bizId),
      })
      return response
  }

export const bizTransferRequest = async(_data, bizId) =>{
    const response = await  axios({
          method: "post",
          url: bizTransfer(bizId),
          data: _data,
      })
      return response
  }

export const getSwapRateRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: getSwapRate,
          data: _data,
      })
      return response
  }

export const swapRequest = async(_data) =>{
    const response = await  axios({
          method: "post",
          url: swap,
          data: _data,
      })
      return response
}

export const getBizSwapRateRequest = async(_data, bizId) =>{
    const response = await  axios({
          method: "post",
          url: getBizSwapRate(bizId),
          data: _data,
      })
      return response
  }

export const bizSwapRequest = async(_data, bizId) =>{
    const response = await  axios({
          method: "post",
          url: bizSwap(bizId),
          data: _data,
      })
      return response
}



export const getTradeHistoryRequest = async() =>{
    const response = await  axios({
          method: "get",
          url: getTradeHistory,
      })
      return response
}

export const getDepositsRequest = async(page, limit) =>{
    const response = await  axios({
          method: "get",
          url: getDeposits(page, limit)
      })
      return response
}

export const getWithdrawalsRequest = async(page, limit) =>{
    const response = await  axios({
          method: "get",
          url: getWithdrawals(page, limit)
      })
      return response
}

export const getTransfersRequest = async(page, limit) =>{
    const response = await  axios({
          method: "get",
          url: getTransfers(page, limit),
      })
      return response
}

export const getBizTransactionsRequest = async(type, page, limit, bizId) =>{
    const response = await  axios({
          method: "get",
          url: getBizTransactions(type, page, limit, bizId),
      })
      return response
}

