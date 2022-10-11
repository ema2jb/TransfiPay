import classes from './Deposit.module.scss'
import Modal from '../../Modals/index'
import {BiChevronDown} from "react-icons/bi"

const Step1 = ({handleCurrentStep})=>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step1}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Deposit Amount</h1>
                        <p className="fs-16 fw-400 secondary-color">make instant deposit to your account easily</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 3</p>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to Deposit</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="example  (i.e BTC, ETH)" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Amount to Deposit</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Enter amount to withdraw" />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                    <div className=" mt-2 justify-right">
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00089 USDT</span></p>
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>handleCurrentStep('deposit-step2')} className='btn-default'>Proceed</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step1