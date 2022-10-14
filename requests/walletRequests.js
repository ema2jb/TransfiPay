import * as walletEndpoints from './wallet'
import cogoToast from 'cogo-toast'
import useLocalStorage from '../hooks/useLocalStorage'


export const getCoinListFunc = (dispatch, walletActions)=>{
    walletEndpoints.getCoinListRequest().then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(walletActions.setCoinList(data))
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
        console.log(data.address)
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

export const initiateWithdrawalFunc = (dispatch, walletActions, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateWithdrawRequest()
    .then(({data:{data, meta}})=>{
      console.log(data)
        dispatch(walletActions.setWithdrawalDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('withdraw-crypto-step4'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const withdrawFunc = (dispatch, walletActions, withdrawalDetails, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.withdrawRequest(withdrawalDetails)
    .then(({data:{data, meta}})=>{
      console.log(data)
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        dispatch(UIActions.changeWalletActionsUI(''))
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}

export const initiateTransferFunc = (dispatch, walletActions, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.initiateTransferRequest()
    .then(({data:{data, meta}})=>{
      console.log(data)
        dispatch(walletActions.setTransferDetails({otpId:data.otpId}))
        dispatch(UIActions.changeWalletActionsUI('Transfer-step3'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error("Withdrawal failed", { position: 'top-center' })
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}


export const transferFunc = (dispatch, walletActions, transferDetails, UIActions) =>{
   dispatch(walletActions.setWalletRequestState(true))
   dispatch(UIActions.changeWalletActionsUI('LoadingModal'))
    walletEndpoints.transferRequest(transferDetails)
    .then(({data:{data, meta}})=>{
      console.log(data)
        dispatch(UIActions.changeWalletActionsUI('SuccessModal'))
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
      dispatch(UIActions.changeWalletActionsUI(''))
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error("Transfer failed", { position: 'top-center' })
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}
