import { useState } from 'react'

import {BiWalletAlt} from 'react-icons/bi'
import {BsCreditCard2Back} from 'react-icons/bs'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import classes from './Wallet.module.scss'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Transfer from './Transfer'



const WalletActions = ()=>{

    const [currentStep, setCurrentStep] = useState('')

    const handleCurrentStep = (value)=>{
            console.log(value)
            setCurrentStep(value)
    }


    return<>
    <div className={`${classes.actions}`}>
        <div onClick={()=>handleCurrentStep('deposit-step1')} className={`${classes.deposit}`}>
            <i><BiWalletAlt /></i>
            <p className="fw-600 fs-18 primary-color">Deposit</p>
            <p className="fw-400 fs-16 secondary-color">Deposit  tokens bla bla bla</p>
        </div>
        <div onClick={()=>handleCurrentStep('withdraw-step1')}  className={`${classes.withdrawal}`}>
            <i><BsCreditCard2Back /></i>
            <p className="fw-600 fs-18 primary-color">Withdrawal</p>
            <p className="fw-400 fs-16 secondary-color">Deposit  tokens bla bla bla</p>
        </div>
        <div onClick={()=>handleCurrentStep('Transfer-step1')} className={`${classes.transfer}`}>
            <i><IoPaperPlaneOutline /></i>
            <p className="fw-600 fs-18 primary-color">Transfer</p>
            <p className="fw-400 fs-16 secondary-color">Deposit  tokens bla bla bla</p>
        </div>  
    </div>
    <Deposit currentStep={currentStep} handleCurrentStep={handleCurrentStep} />
    <Withdraw currentStep={currentStep} handleCurrentStep={handleCurrentStep} />
    <Transfer currentStep={currentStep} handleCurrentStep={handleCurrentStep} />
    </>
}

export default WalletActions