import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import classes from './Swap.module.scss'
import SubHeader from '../SubHeader'
import {HiOutlineChevronDown, HiOutlineSwitchVertical} from 'react-icons/hi'
import FinalStep from '../Modals/FinalStep'
import SwapToken from "./SwapToken"
import SwapHistory from "./SwapHistory"
import { walletActions } from '../../../Store/wallet-slice'
import { getBizWalletBalancesFunc, getTradeHistoryFunc } from '../../../requests/walletRequests'


const SwapIndex =()=>{
    const [success, setSuccess] = useState(false)
    const [seeHistory, setHistory] = useState(false)

    const dispatch = useDispatch()
    const {activeBiz} = useSelector(state=>state.biz)

    const successHandler = (value) =>{
        setSuccess(value)
    }

    const seeHistoryHandler =(value)=>{
        setHistory(value)
    }

    useEffect(() => {
    getBizWalletBalancesFunc(dispatch, walletActions, activeBiz.id)
    getTradeHistoryFunc(dispatch, walletActions)
  }, [])

    return <>
        <div>
            <SubHeader 
            mainTitle="Swap Token"
            subTitle={seeHistory ? "Swap History" : ""} 
            swapToken={seeHistory ? false : true} 
            seeHistory={seeHistory} 
            seeHistoryHandler={seeHistoryHandler}
            showIndexPage={()=>setHistory(false)}
            />

            <div className={classes.swap}>
                <div  className={`${classes['sub-header']} py-4`}>
                    <div>
                        <h1 className="fw-500 fs-24 primary-color">Instant Token swap</h1>
                        <p className="fs-16 fw-400 secondary-color">Swap/convert your crypto assest easily to other tokens easily</p>
                    </div>
                </div>

                <div className={seeHistory && "d-none"}>
                    <SwapToken successHandler={successHandler} />
                </div>
                <div className={!seeHistory && "d-none"}>
                    <SwapHistory />
                </div>
            </div>
        </div>

        <div className={!success && "d-none"}>
            <FinalStep closeModal={()=>setSuccess(false)}  orderType="Swap" />
        </div>
    </>
}

export default SwapIndex