import { useState } from 'react'

import classes from './Wallet.module.scss'

import {BiChevronsUp} from 'react-icons/bi'
import {FiEyeOff, FiEye} from "react-icons/fi"
import {BsChevronRight} from "react-icons/bs"
import SubHeader from "../SubHeader"
import WalletActions from './walletActions'
import WalletPortfolio from './WalletPortfolio'



const WalletHome = ({showHistoryHandler}) =>{

    const [seeBalance, setSeeBalance] = useState(false)

    return <>
        <SubHeader  mainTitle="Wallet" />
            <div className={`${classes.wallet}`}>
                <div className={` ${classes['balance-history']}`}>
                    <div className={` ${classes.balance}`}>
                        <div className={classes['wallet-balance']}>
                            <p className="fw-400 fs-16 secondary-color">Total Wallet Balance <span><i>{!seeBalance ? <FiEyeOff /> : <FiEye/> }</i></span></p>
                            <h1 className="mt-2 fs-36 fw-700 tertiary-color">5000.00 <span className="fs-18 fw-500 secondary-color">USD</span></h1>
                        </div>
                        <div className={`mt-4 ${classes['amount']}`}>
                            <p className="fs-16 fw-400">Account Increase <i><BiChevronsUp /></i> <span>+ 00000.123</span>  USD added to account</p>
                        </div>
                    </div>
                    <div onClick={()=>showHistoryHandler(false)} className={` space-between ${classes.history}`}>
                        <div>
                            <h1 className="fs-24 fw-500 text-color-3">Transaction History</h1>
                            <p className="fs-16 fw-400">See all wallets transaction here</p>
                        </div>
                        <i><BsChevronRight /></i>
                    </div>
                </div>
            <WalletActions />
            <WalletPortfolio />
        </div>
    </>
}

export default WalletHome