import * as userEndpoints from './wallet'
import cogoToast from 'cogo-toast'
import useLocalStorage from '../hooks/useLocalStorage'


export const getCoinListFunc = (dispatch, walletActions)=>{
    userEndpoints.getCoinListRequest().then(({data:{data, meta}})=>{
        console.log(data)
        dispatch(walletActions.setCoinList(data))
        //cogoToast.success(meta.message, { position: 'top-center' })
    }).catch(err=>{
        console.log(err)
        //cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
    })  
}