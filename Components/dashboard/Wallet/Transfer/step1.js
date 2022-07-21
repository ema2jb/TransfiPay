
import Modal from '../../Modals/index'
import classes from '../Withdraw/Withdraw.module.scss'
import {BiChevronDown} from "react-icons/bi"

//please do not mind that css from other components are used here

const TransferStep1 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Transfer USDT</h1>
                        <p className="fs-16 fw-400 secondary-color">Send tokens to friends using transfi wallet for free</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 2</p>
                </div>
                <div className="mt-4">
                    <div className="space-between mb-1">
                        <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to Transfer</p>
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00</span></p>
                    </div>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="example  (i.e BTC, ETH)" />
                        <BiChevronDown />
                    </div>
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Amount to Transfer</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Enter amount to withdraw" />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter receipients username</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="@transfi_username" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Note</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input className="fs-16 fw-500 tetiary-color" type="text"  />
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>handleCurrentStep('Transfer-step2')} className='btn-default'>Transfer</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default TransferStep1