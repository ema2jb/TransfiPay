import { useState } from "react"

import Step1 from "./step1"
import Step2 from "./step2"
import FinalStep from "./finalStep"
import classes from './PaymentInterface.module.scss'

const PaymentIndex = () =>{
    
    const [currentStep, setCurrentStep] = useState('')

    const currentStepHandler = (value) => {
        setCurrentStep(value)
    }

    return <>
        <div className={classes['payment-interface']}>
            <div className={`bckg1 p-3 ${classes.header}`}>
                <h1 className="fs-24 fw-700 text-is-white">Trans<span className="text-color-4">Fi</span></h1>
            </div>
            <div className={`py-4 ${classes.body}`}>
                <div className={classes.title}>
                    <h1 className=" centralize bckg1 mb-2 text-is-white fs-36 fw-700">T</h1>
                    <p>Merchants name</p>
                    <h1 className="fs-24 fw-600 text-color-5" >Sammy collection</h1>
                </div>
                <div className={`mt-5 ${classes.steps}`}>
                    <div className={currentStep && 'slide-out d-none'}>
                        <Step1 currentStepHandler={currentStepHandler} />
                    </div>
                    <div className={currentStep && currentStep==="step2" ? "slide-in" : "slide-out d-none"}>
                        <Step2 currentStepHandler={currentStepHandler} />
                    </div>
                    <div className={currentStep && currentStep==="step3" ? "slide-in" : "slide-out d-none"}>
                        <FinalStep currentStepHandler={currentStepHandler} />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PaymentIndex