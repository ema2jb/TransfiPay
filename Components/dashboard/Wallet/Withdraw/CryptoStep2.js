
import Modal from '../../Modals/index'
import classes from './Withdraw.module.scss'
import {BiChevronDown} from "react-icons/bi"
import {HiOutlineInformationCircle} from  'react-icons/hi'

const Step2 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Crypto Withdrawal</h1>
                        <p className="fs-16 fw-400 secondary-color">Check recepient wallet address before you proceed.</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 </span>of 3</p>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to withdraw</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="example  (i.e BTC, ETH)" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter wallet address</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Name of page" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Network  <span> <HiOutlineInformationCircle /></span></p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="TRC20" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter amount to withdraw</p>
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
                        <button onClick={()=>handleCurrentStep('withdraw-crypto-step3')} className='btn-default'>Proceed</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step2