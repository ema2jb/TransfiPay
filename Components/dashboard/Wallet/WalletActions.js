import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {BiWalletAlt} from 'react-icons/bi'
import {BsCreditCard2Back} from 'react-icons/bs'
import {IoPaperPlaneOutline} from 'react-icons/io5'
import classes from './Wallet.module.scss'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Transfer from './Transfer'
import LoadingModal from './LoadingModal'
import SuccessModal from './SuccessModal'
import {UIActions} from '../../../Store/ui-slice'
 


const WalletActions = ()=>{

    const currentStep = useSelector(state=>state.UI.walletActionsUI.currentStep)
    
    const dispatch = useDispatch()

    const handleCurrentStep = (value)=>{
            dispatch(UIActions.changeWalletActionsUI(value))
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
    {currentStep === "LoadingModal" && <LoadingModal /> }
    {currentStep === "SuccessModal" && <SuccessModal /> }
    </>
}

export default WalletActions