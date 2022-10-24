import {createSlice} from '@reduxjs/toolkit'

const initialTransferDetails = {
      coinIdOrSymbol:null,
      amount:"",
      email:"",
      note:"",
      otpId:"",
      otpCode:""
}

const initialWithdrawalDetils = {
    coinIdOrSymbol:null,
    networkName:null,
    address:"",
    amount:"",
    otpId:"",
    otpCode:""
}

const initialActiveCoin = {
  coin:"",
      selectedCoin:{
        value:"", label:""
      }
}

const initialState = {
    walletRequestState:{
      loading:false
    },
    bizWalletBalances:[],
    activeCoin:initialActiveCoin,
    coinList:[],
    coinSymbols:[],
    coinNetworks:{},
    depositAddress:"",
    bizDepositAddress:"",
    transferDetails:initialTransferDetails,
    bizTransferDetails:{
      coinIdOrSymbol:null,
      amount:"",
      email:"",
      note:"",
      otpId:"",
      otpCode:""
    },
    withdrawalDetails:initialWithdrawalDetils,
    bizWithdrawalDetails:{
      coinIdOrSymbol:null,
      networkName:null,
      address:"",
      amount:"",
      otpId:"",
      otpCode:""
    },
    userWalletBalances:[],
    tradeHistory:[],
    depositTransactions:[],
    withdrawalTransactions:[],
    transferTransactions:[],
    bizTransactions:[]
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
        setBizDepositAddress(state, action){
          state.bizDepositAddress = action.payload
        },
        setTransferDetails(state, action){
           state.transferDetails = {...state.transferDetails, ...action.payload} 
        },
        setBizTransferDetails(state, action){
           state.bizTransferDetails = {...state.bizTransferDetails, ...action.payload} 
        },
        setWithdrawalDetails(state,action){
           state.withdrawalDetails = {...state.withdrawalDetails, ...action.payload} 
        },
        setBizWithdrawalDetails(state, action){
          state.bizWithdrawalDetails = {...state.bizWithdrawalDetails, ...action.payload}
        },
        setUserWalletBalances(state, action){
          state.userWalletBalances = action.payload.map(wallet=>({
            name:wallet.coin.name, picUrl:wallet.coin.picUrl, symbol:wallet.coin.symbol, balance:wallet.amount
          }))
        },
        setActiveCoin(state, action){
          state.activeCoin.coin = action.payload,
          state.activeCoin.selectedCoin={value:action.payload, label:action.payload}
        },
        setTradeHistory(state, action){
          state.tradeHistory = action.payload
        },
        setDepositTransactions(state, action){
          state.depositTransactions = action.payload
        },
        setTransferTransactions(state, actions){
          state.transferTransactions = action.payload
        },
        setWithdrawalTransactions(state, action){
          state.withdrawalTransactions = action.payload
        },
        setBizWalletBalances(state, action){
          state.bizWalletBalances = action.payload.map(wallet=>({
            name:wallet.coin.name, picUrl:wallet.coin.picUrl, symbol:wallet.coin.symbol, balance:wallet.amount,usdValue:wallet.usdValue
          }))
        },
        setBizTransactions(state, action){
          state.bizTransactions = action.payload
        }
        }
    
})

export const walletActions = walletSlice.actions

export default walletSlice.reducer