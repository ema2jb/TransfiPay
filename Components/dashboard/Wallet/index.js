import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { getCoinListFunc } from '../../../requests/walletRequests'
import WalletHome from "./WalletHome"
import WalletHistory from "./WalletHistory"
import {walletActions} from '../../../Store/wallet-slice'


const WalletIndex = ()=>{

    const [showHistory, setShowHistory] = useState(true)

    const showHistoryHandler = (value) =>{
        setShowHistory(value)
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        getCoinListFunc(dispatch, walletActions)
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