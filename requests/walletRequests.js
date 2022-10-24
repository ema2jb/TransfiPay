import * as walletEndpoints from './wallet'
import cogoToast from 'cogo-toast'
//import useLocalStorage from '../hooks/useLocalStorage'

export const getBizWalletBalancesFunc = (dispatch, walletActions, bizId)=>{
    walletEndpoints.getBizWalletBalancesRequest(bizId).then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(walletActions.setBizWalletBalances(data))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getCoinListFunc = (dispatch, walletActions)=>{
    walletEndpoints.getCoinListRequest().then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setCoinList(data))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getUserWalletBalancesFunc = (dispatch, walletActions)=>{
    walletEndpoints.getUserWalletBalancesRequest().then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setUserWalletBalances(data))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getDepositAddressFunc = (dispatch, walletActions, coinIdOrSymbol, blockChainNetwork, handleCurrentStep)=>{
  dispatch(walletActions.setWalletRequestState(true))
  walletEndpoints. getDepositAddressRequest(coinIdOrSymbol, blockChainNetwork)
    .then(({data:{data, meta}})=>{
        //console.log(data.address)
        dispatch(walletActions.setWalletRequestState(false))
        dispatch(walletActions.setDepositAddress(data.address))
        handleCurrentStep('deposit-step2')
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        dispatch(walletActions.setWalletRequestState(false))
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
} 

export const getBizDepositAddressFunc = (dispatch, walletActions, coinIdOrSymbol, blockChainNetwork, handleCurrentStep, bizId)=>{
  dispatch(walletActions.setWalletRequestState(true))
  walletEndpoints. getBizDepositAddressRequest(coinIdOrSymbol, blockChainNetwork, bizId)
    .then(({data:{data, meta}})=>{
        //console.log(data.address)
        dispatch(walletActions.setWalletRequestState(false))
        dispatch(walletActions.setBizDepositAddress(data.address))
        handleCurrentStep('deposit-step2')
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        dispatch(walletActions.setWalletRequestState(false))
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
} 

export const initiateWithdrawalFunc = (dispatch, walletActions, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateWithdrawRequest()
    .then(({data:{data, meta}})=>{
      //console.log(data)
        dispatch(walletActions.setWithdrawalDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('withdraw-crypto-step4'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const withdrawFunc = (dispatch, walletActions, withdrawalDetails, UIActions, clearEntries) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.withdrawRequest(withdrawalDetails)
    .then(({data:{data, meta}})=>{
      //console.log(data)
        clearEntries()
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        clearEntries()
        dispatch(walletActions.setWalletRequestState(false))
        dispatch(UIActions.changeWalletActionsUI(''))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const initiateBizWithdrawalFunc = (dispatch, walletActions, UIActions, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateBizWithdrawRequest(bizId)
    .then(({data:{data, meta}})=>{
      //console.log(data)
        dispatch(walletActions.setBizWithdrawalDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('withdraw-crypto-step4'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const bizWithdrawFunc = (dispatch, walletActions, withdrawalDetails, UIActions, clearEntries, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.bizWithdrawRequest(withdrawalDetails, bizId)
    .then(({data:{data, meta}})=>{
      //console.log(data)
        clearEntries()
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        clearEntries()
        dispatch(walletActions.setWalletRequestState(false))
        dispatch(UIActions.changeWalletActionsUI(''))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const initiateTransferFunc = (dispatch, walletActions, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateTransferRequest()
    .then(({data:{data, meta}})=>{
      //console.log(data)
        dispatch(walletActions.setTransferDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('Transfer-step3'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("Withdrawal failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const initiateBizTransferFunc = (dispatch, walletActions, UIActions, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateBizTransferRequest(bizId)
    .then(({data:{data, meta}})=>{
      //console.log(data)
        dispatch(walletActions.setBizTransferDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('Transfer-step3'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("Withdrawal failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const transferFunc = (dispatch, walletActions, transferDetails, UIActions, clearEntries) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.transferRequest(transferDetails)
    .then(({data:{data, meta}})=>{
      //console.log(data)
      clearEntries()
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        clearEntries()
        dispatch(UIActions.changeWalletActionsUI(''))
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("Transfer failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const bizTransferFunc = (dispatch, walletActions, transferDetails, UIActions, clearEntries, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.bizTransferRequest(transferDetails, bizId)
    .then(({data:{data, meta}})=>{
      //console.log(data)
      clearEntries()
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        clearEntries()
        dispatch(UIActions.changeWalletActionsUI(''))
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("Transfer failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const swapFunc = (dispatch, walletActions, successHandler, swapDetails) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.swapRequest(swapDetails)
    .then(({data:{data, meta}})=>{
        //console.log(data)
        succesHandler(true)
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error("swap failed", { position: 'top-center' })
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const bizSwapFunc = (dispatch, walletActions, successHandler, swapDetails, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.bizSwapRequest(swapDetails, bizId)
    .then(({data:{data, meta}})=>{
        //console.log(data)
        succesHandler(true)
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("swap failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const swapRateFunc = (dispatch, walletActions, swapRateDetails, handleSwapRate) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.getSwapRateRequest(swapRateDetails)
    .then(({data:{data, meta}})=>{
        //console.log(data)
        handleSwapRate(data)
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("swap failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const bizSwapRateFunc = (dispatch, walletActions, swapRateDetails, handleSwapRate, bizId) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.getSwapRateRequest(swapRateDetails, bizId)
    .then(({data:{data, meta}})=>{
        //console.log(data)
        handleSwapRate(data)
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        //cogoToast.error("swap failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const getTradeHistoryFunc = (dispatch, walletActions)=>{
    walletEndpoints.getTradeHistoryRequest().then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setTradeHistory(data.result))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getDepositsFunc = (dispatch, walletActions, page, limit)=>{
    walletEndpoints.getDepositsRequest(page, limit).then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setDepositTransactions(data.result))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getWithdrawalsFunc = (dispatch, walletActions, page, limit)=>{
    walletEndpoints.getWithdrawalsRequest(page, limit).then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setWithdrawalTransactions(data.result))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}


export const getTransfersFunc = (dispatch, walletActions, page, limit)=>{
    walletEndpoints.getTransfersRequest(page, limit).then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setTransferTransactions(data.result))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}

export const getBizTransactionsFunc = (dispatch, walletActions, type, page, limit, bizId)=>{
    walletEndpoints.getBizTransactionsRequest(type, page, limit, bizId).then(({data:{data, meta}})=>{
        //console.log(data)
        dispatch(walletActions.setBizTransactions(data.result))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}
