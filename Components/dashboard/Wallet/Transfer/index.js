import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import TransferStep1 from "./step1"
import TransferStep2 from "./step2"
import TransferStep3 from "./step3"
import {walletActions} from '../../../../Store/wallet-slice'


const Transfer = ({currentStep, handleCurrentStep})=>{

    const dispatch = useDispatch()
   const {transferDetails} = useSelector(state=>state.wallet)

    const handleTransferDetails = (value)=>{
      dispatch(walletActions.setTransferDetails(value))
    }
  
    return <>
        <div className={currentStep !== 'Transfer-step1' ? 'd-none' : ""}>
            <TransferStep1 handleTransferDetails={handleTransferDetails} handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'Transfer-step2' ? 'd-none' : ""}>
          { transferDetails && <TransferStep2 transferDetails={transferDetails} handleCurrentStep={handleCurrentStep}/>}
        </div>
        <div className={currentStep !== 'Transfer-step3' ? 'd-none' : ""}>
            <TransferStep3 handleCurrentStep={handleCurrentStep}/>
        </div>
    </>
}

export default Transfer