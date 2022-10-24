import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import TransferStep1 from "./step1"
import TransferStep2 from "./step2"
import TransferStep3 from "./step3"
import {walletActions} from '../../../../Store/wallet-slice'


const Transfer = ({currentStep, handleCurrentStep})=>{

    const dispatch = useDispatch()
   const {bizTransferDetails} = useSelector(state=>state.wallet)

    const handleTransferDetails = (value)=>{
      dispatch(walletActions.setBizTransferDetails(value))
    }
  
    const [clearEntries, setClearEntries] = useState('')
  
    const handleEntries = (value)=>{
      console.log(value)
      setClearEntries(value)
    }
  
    return <>
        <div className={currentStep !== 'Transfer-step1' ? 'd-none' : ""}>
            <TransferStep1 handleEntries={handleEntries} handleTransferDetails={handleTransferDetails} handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'Transfer-step2' ? 'd-none' : ""}>
          { bizTransferDetails && <TransferStep2 clearEntries={clearEntries} bizTransferDetails={bizTransferDetails} handleCurrentStep={handleCurrentStep}/>}
        </div>
        <div className={currentStep !== 'Transfer-step3' ? 'd-none' : ""}>
            <TransferStep3 clearEntries={clearEntries} handleCurrentStep={handleCurrentStep}/>
        </div>
    </>
}

export default Transfer