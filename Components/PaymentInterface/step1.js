import classes from './PaymentInterface.module.scss'
import {AiOutlineSearch} from "react-icons/ai"

const Step1 = ({currentStepHandler}) =>{
    return <>
        <div>
        <div>
                <p className={`mb-3 secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 2</p>
                <div className=" mb-3 space-between">
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Select a coin to pay with</h1>
                        <p className="fw-400 fs-16 secondary-color">please select a coin you’ll be paying with</p>
                    </div>
                    <div>
                        <p className="fw-400 fs-16 secondary-color">Amount to pay</p>
                        <p className="fw-700 fs-20 text-color-1">350.00 USD</p>
                    </div>
                </div>
                <hr  className='mt-4 mb-4'></hr>
                <div className={`space-between mb-4 ${classes['search-input']}`}>
                    <input type="text" placeholder='search'  />
                    <i><AiOutlineSearch /></i>
                </div>
                <div className={classes['payment-options']}>
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/bitcoin.png"  alt="bitcoin"/>
                            </div>
                            <p>Bitcoin</p>
                        </div>
                        <div>
                            <button onClick={()=>currentStepHandler('step2')} className="btn-default px-4">Pay</button>
                        </div>
                    </div>
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/etheruem.png"  alt="bitcoin"/>
                            </div>
                            <p>Etheruem</p>
                        </div>
                        <div>
                            <button className="btn-default px-4">Pay</button>
                        </div>
                    </div>
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/tether.png"  alt="bitcoin"/>
                            </div>
                            <p>Tether</p>
                        </div>
                        <div>
                            <button className="btn-default px-4">Pay</button>
                        </div>
                    </div> 
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/bitcoin.png"  alt="bitcoin"/>
                            </div>
                            <p>Bitcoin</p>
                        </div>
                        <div>
                            <button className="btn-default px-4">Pay</button>
                        </div>
                    </div>
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/etheruem.png"  alt="bitcoin"/>
                            </div>
                            <p>Etheruem</p>
                        </div>
                        <div>
                            <button className="btn-default px-4">Pay</button>
                        </div>
                    </div>
                    <div className={`space-between mb-3 ${classes['payment-option']}`}>
                        <div className="centralize">
                            <div className="mx-2">
                                <img src="/dashboard/tether.png"  alt="bitcoin"/>
                            </div>
                            <p>Tether</p>
                        </div>
                        <div>
                            <button className="btn-default px-4">Pay</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
}

export default Step1