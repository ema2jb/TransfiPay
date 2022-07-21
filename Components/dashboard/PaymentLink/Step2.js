
import Modal from '../Modals/index'
import classes from '../Wallet/Withdraw/Withdraw.module.scss'
import {BiChevronDown} from "react-icons/bi"

//please do not mind that css from other components are used here

const CreatePaymentLinkStep2 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Set-up your Payment Link</h1>
                        <p className="fs-16 fw-400 secondary-color">Give your payment link a title</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 of 2</span></p>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Link Name</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Name of page" />
                    </div>
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Link Type</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="e.g ( fixed, flexible)" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Amount</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="minimum is $ 10" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Choose how you want to be paid?</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-500 tetiary-color" type="text"  placeholder='Select a preffered currency  ( i.e USD,EUR, etc)'/>
                        <BiChevronDown />
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>handleCurrentStep('create-payment-link-step3')} className='btn-default'>Transfer</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default CreatePaymentLinkStep2