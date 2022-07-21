import {useState} from "react"

import classes from './Swap.module.scss'
import SubHeader from '../SubHeader'
import {HiOutlineChevronDown, HiOutlineSwitchVertical} from 'react-icons/hi'
import FinalStep from '../Modals/FinalStep'
import SwapToken from "./SwapToken"
import SwapHistory from "./SwapHistory"


const SwapIndex =()=>{
    const [success, setSuccess] = useState(false)
    const [seeHistory, setHistory] = useState(false)

    const successHandler = (value) =>{
        setSuccess(value)
    }

    const seeHistoryHandler =(value)=>{
        setHistory(value)
    }



    return <>
        <div>

            <SubHeader 
            mainTitle="Swap Token"
            subTitle={seeHistory ? "Swap History" : ""} 
            swapToken={seeHistory ? false : true} 
            seeHistory={seeHistory} 
            seeHistoryHandler={seeHistoryHandler}
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