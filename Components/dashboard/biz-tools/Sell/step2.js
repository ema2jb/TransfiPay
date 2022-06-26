import {useState} from 'react'

import classes from './Sell.module.scss'
import {BiTrash} from 'react-icons/bi'
import {HiOutlineSelector} from 'react-icons/hi'
import Step3 from './step3'
import Step4 from './step4'




const Step2 = ({handleCurrentStep})=>{
    const [showStep, setShowStep] = useState('')

    const handleStepVisibility = (value) =>{
        setShowStep(value)
    }


    return<>
        <div className={` space-between-top ${classes.Step2}`}>
            <div className={classes['upload-image']}>
                <div className={`space-between ${classes['image-wrapper']}`}>
                    <div className={classes.image}>
                        <img src='/dashboard/productImage.png' alt="product-image" />
                        <i className="centralize"><BiTrash /></i>
                    </div>
                    <div className={classes.image}>
                        <img src='/dashboard/productImage.png' alt="product-image" />
                        <i className="centralize"><BiTrash /></i>
                    </div>
                </div>
                <div>
                    <button className="fw-500 fs-16">
                        Upload product Image
                    </button>
                </div>
            </div>
            <div>
                <div className={classes['form-input']}>
                    <label className="fs-18 fw-500">Quantity</label>
                    <div className={`${classes.input}`}>
                        <input className="w-100" type="text" placeholder="1" />
                    </div>
                </div>
                <div className={classes['form-input']}>
                    <label className="fs-18 fw-500">Success message </label>
                    <div className={` space-between ${classes.input}`}>
                        <input className="w-100" type="text" placeholder="Message to show after a successful payment" />
                        <HiOutlineSelector />
                    </div>
                </div>
                <div className={classes['form-input']}>
                    <label className="fs-18 fw-500">Send transaction notification</label>
                    <div className={`centralize ${classes['centralize-message']}`}>
                        <div className={classes['form-btn']}>
                            <button className="fw-400 fs-16">Customize message</button>
                        </div>
                        <div className={`${classes.input}`}>
                            <input className="w-100" type="text" placeholder="Thanks for the purchase" />
                        </div>
                    </div>
                </div>
                <div className="justify-right m-25">
                    <div>
                        <button onClick={()=>handleCurrentStep('step1')} className='btn-transparent fw-600 fs-16'>Previous</button>
                    </div>
                    <div>
                        <button onClick={()=>handleStepVisibility('step3')} className='btn-default fw-500 fs-16'>Create Link</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={showStep !== 'step3' && 'd-none'}>
            <Step3 showStep={showStep} handleStepVisibility={handleStepVisibility} />
        </div>
        <div className={showStep !== 'step4' && 'd-none'}>
            <Step4 showStep={showStep} handleStepVisibility={handleStepVisibility} />
        </div>
    </>
}

export default Step2