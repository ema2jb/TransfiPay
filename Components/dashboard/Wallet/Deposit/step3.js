import Modal from "../../Modals"
import classes from './Deposit.module.scss'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'


const Step3 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step3}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Confirm Order</h1>
                        <p className="fs-16 fw-400 secondary-color">Confirm all is in place before continuing</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 3 of 3</span></p>
                </div>
                <div className="centralize mt-4">
                    <div className={`${classes.recieve}`}>
                        <p className="fs-16 fw-500 secondary-color">You will recieve</p>
                        <p className="fs-24 fw-600 secondary-color"><span className='text-color-1'>0.000056876</span> BTC</p>
                    </div>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Recieving address</p>
                    <p className="fs-16 fw-500 tetiary-color"><span><HiOutlineDocumentDuplicate /></span>  Oxa5...37b7</p>
                </div>
                <div className="space-between mt-3 pb-4 border-bottom">
                    <p className="fs-16 fw-400 secondary-color">Network</p>
                    <p className="fs-16 fw-500 tetiary-color">TRC20</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Coin</p>
                    <p className="fs-16 fw-500 tetiary-color">USDT</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Amount (USD)</p>
                    <p className="fs-16 fw-500 tetiary-color">0.0000344</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Transaction fee</p>
                    <p className="fs-16 fw-500 tetiary-color">1.00 USDT</p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                <div>
                    <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                </div>
                <div>
                    <button onClick={()=>handleCurrentStep('deposit-finalStep')} className='btn-default'>Approve Order</button>
                </div>
            </div>
            </div>
        </Modal>
    </>
}

export default Step3