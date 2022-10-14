import { useState } from 'react'

import Step1 from './step1'
import CryptoStep2 from './CryptoStep2'
import CryptoStep3 from './CryptoStep3'
import CryptoStep4 from './CryptoStep4'
import FinalStep from './FinalStep'
import FiatStep2 from './FiatStep2'
import FiatStep3 from './FiatStep3'



const Withdraw = ({currentStep, handleCurrentStep})=>{

  

    return <>
        <div className={currentStep !== 'withdraw-step1' ? 'd-none' : ""}>
            <Step1 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-crypto-step2' ? 'd-none' : ""}>
            <CryptoStep2  handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-crypto-step3' ? 'd-none' : ""}>
           <CryptoStep3  handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-crypto-step4' ? 'd-none' : ""}>
           <CryptoStep4  handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-finalStep' ? 'd-none' : ""}>
            <FinalStep handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-fiat-step2' ? 'd-none' : ""}>
            <FiatStep2 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'withdraw-fiat-step3' ? 'd-none' : ""}>
            <FiatStep3 handleCurrentStep={handleCurrentStep}/>
        </div>
    </>
}

export default Withdraw