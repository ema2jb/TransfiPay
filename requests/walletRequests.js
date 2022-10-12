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

export const withdrawFunc = (dispatch, walletActions, withdrawalDetails) =>{
   dispatch(walletActions.setWalletRequestState(true))
    walletEndpoints.withdrawRequest(withdrawalDetails)
    .then(({data:{data, meta}})=>{
      console.log(data)
        dispatch(walletActions.setWalletRequestState(false))
    }).catch(err=>{
        console.log(err)
        dispatch(walletActions.setWalletRequestState(false))
        cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })
}