import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    walletRequestState:{
      loading:false
    },
    coinList:[],
    coinSymbols:[],
    coinNetworks:{},
    depositAddress:"",
    transferDetails:{
      coinIdOrSymbol:"",
      amount:"",
      email:"",
      note:"",
      otpId:"",
      otpCode:""
    },
  withdrawalDetails:{
    coinIdOrSymbol:"",
    networkName:"",
    address:"",
    amount:"",
    otpId:"",
    otpCode:""
  }
}

const walletSlice = createSlice({
    name:"wallet",
    initialState:initialState,
    reducers:{
        setWalletRequestState(state,action){
          state.walletRequestState.loading = action.payload
        },
        setCoinList(state, action){
            state.coinList = action.payload
            state.coinSymbols = action.payload.map(coin=>({coinSymbol:coin.symbol}))
            action.payload.forEach(coin=>{
              const networks = coin.coin_network.map(network=>network.name)
              state.coinNetworks[coin.symbol] = networks
            })
        },
        setDepositAddress(state, action){
          state.depositAddress = action.payload
        },
        setTransferDetails(state, action){
          state.transferDetails = {...state.transferDetails, ...action.payload}
        },
        setWithdrawalDetails(state,action){
          state.withdrawalDetails = {...state.withdrawalDetails, ...action.payload}
        }
        }
    
})

export const walletActions = walletSlice.actions

export default walletSlice.reducer