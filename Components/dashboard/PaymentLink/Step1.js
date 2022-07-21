
import Modal from '../Modals/index'
import classes from './PaymentLink.module.scss'
import {HiOutlinePuzzle, HiOutlineChevronRight} from 'react-icons/hi'
import {FiLink} from 'react-icons/fi'

const CreatePaymentLinkStep1 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step1}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">What’s this Link for</h1>
                        <p className="fs-16 fw-400 secondary-color">Choose a prefferd destination to make your withrawal to.</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 2</p>
                </div>
                <div onClick={()=>handleCurrentStep('create-payment-link-step2')} className={`space-between ${classes['withdraw-option']}`}>
                    <div className="centralize-top-10">
                        <div>
                            <i className="fs-24 fw-500 tetiary-color"><FiLink /></i>
                        </div>
                        <div>
                            <p className="fs-18 fw-500 tetiary-color">Instant payments</p>
                            <p className="fs-14 fw-400 secondary-color">Set-up a fixed amount and start recieving digital <br/> payment instantly, all in one click</p>
                        </div>
                    </div>
                    <div>
                        <i className="fs-24 fw-400 secondary-color"><HiOutlineChevronRight /></i>
                    </div>
                </div>
                <div onClick={()=>handleCurrentStep('create-payment-link-step2')} className={`space-between mb-4 ${classes['withdraw-option']}`}>
                    <div className="centralize-top-10">
                        <div>
                            <i className="fs-24 fw-500 tetiary-color"><HiOutlinePuzzle /></i>
                        </div>
                        <div>
                            <p className="fs-18 fw-500 tetiary-color">Fund Raising</p>
                            <p className="fs-14 fw-400 secondary-color">Set up flexible amount range you prefer and <br/> start recieving digital payments instantly.</p>
                        </div>
                    </div>
                    <div>
                        <i className="fs-24 fw-400 secondary-color"><HiOutlineChevronRight /></i>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default CreatePaymentLinkStep1