import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { getCoinListFunc, getBizTransactionsFunc, getBizWalletBalancesFunc} from '../../../requests/walletRequests'
import WalletHome from "./WalletHome"
import WalletHistory from "./WalletHistory"
import {walletActions} from '../../../Store/wallet-slice'


const WalletIndex = ()=>{

    const [showHistory, setShowHistory] = useState(true)

    const {activeBiz} = useSelector(state=>state.biz)

    const showHistoryHandler = (value) =>{
        setShowHistory(value)
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        getCoinListFunc(dispatch, walletActions)
        getBizTransactionsFunc()
        getBizWalletBalancesFunc(dispatch, walletActions, activeBiz.id)
    },[])

    return <>

        <div className={!showHistory && 'd-none'}>
            <WalletHome showHistoryHandler={showHistoryHandler} />
        </div>
        <div className={showHistory && "d-none"}>
            <WalletHistory showHistoryHandler={()=>showHistoryHandler(true)} />
        </div>

    </>
}

export default WalletIndex