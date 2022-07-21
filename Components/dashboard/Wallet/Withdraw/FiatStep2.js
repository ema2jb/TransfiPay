
import Modal from '../../Modals/index'
import classes from './Withdraw.module.scss'
import {BiChevronDown} from "react-icons/bi"

const FiatStep2 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Withdraw to Local Bank</h1>
                        <p className="fs-16 fw-400 secondary-color">withdrawals to banks takes 24hrs to be credited</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 </span>of 3</p>
                </div>
                <div className="mt-3">
                    <div className="space-between mb-1">
                        <p className="mb-2 fs-16 fw-400 tetiary-color">Amount to withdraw</p>
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00089 USDT</span></p>
                    </div>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Enter amount to withdraw" />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Bank Name</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Select a bank" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Account Number</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Input account number" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Account Holder</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']} ${classes['account-holder']}`}>
                        <input className="fs-16 fw-500 tetiary-color" type="text" value="Holder’s name appear here" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>handleCurrentStep('withdraw-fiat-step3')} className='btn-default'>Make  Withdrawal</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default FiatStep2