import { useState } from 'react'


import classes from './Sell.module.scss'
import SubHeader from '../../SubHeader'
import Step1 from './step1'
import Step2 from './step2'


const ProdcutLink =()=>{
    const [currentStep, setCurrentStep] = useState('step1')

    const handleCurrentStep = (step)=>{
        setCurrentStep(step)
    }

    return<>
        <div className={classes['product-link']}>
            <SubHeader mainTitle="Sell a Product" subTitle="Product Link" />
            <div  className={`${classes['sub-header']} space-between py-4`}>
                <div>
                    <h1 className="fw-500 fs-24 primary-color">Set-up a Payment Link for your product</h1>
                    <p className="fs-16 fw-400 secondary-color">Give your product a name and description</p>
                </div>
                <div>
                    <button className={`fs-14 ${classes['step-button']}`} >step 1 of 2</button>
                </div>
            </div>
            <div className={currentStep !== 'step1' && 'd-none'}>
                <Step1 handleCurrentStep={handleCurrentStep} />
            </div>
            <div className={currentStep !== 'step2' && 'd-none'}>
                <Step2 handleCurrentStep={handleCurrentStep} />
            </div>
        </div>
    </>
}

export default ProdcutLink