
import Modal from '../../Modals/index'
import classes from './Withdraw.module.scss'
import {HiOutlineLibrary, HiOutlineDatabase, HiOutlineChevronRight} from 'react-icons/hi'

const Step1 = ({handleCurrentStep}) =>{
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step1}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Select a withdrawal destination</h1>
                        <p className="fs-16 fw-400 secondary-color">Choose a prefferd destination to make your withrawal to.</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 3</p>
                </div>
              {/*withdraw-fiat-step2*/}
                <div onClick={()=>handleCurrentStep('')} className={`space-between ${classes['withdraw-option']}`}>
                    <div className="centralize-top-10">
                        <div>
                            <i className="fs-24 fw-500 tetiary-color"><HiOutlineLibrary /></i>
                        </div>
                        <div>
                            <p className="fs-18 fw-500 tetiary-color">Fiat Withdrawal</p>
                            <p className="fs-14 fw-400 secondary-color">Make a withdrawals directly to your local bank account</p>
                        </div>
                    </div>
                    <div>
                        <i className="fs-24 fw-400 secondary-color"><HiOutlineChevronRight /></i>
                    </div>
                </div>
                <div onClick={()=>handleCurrentStep('withdraw-crypto-step2')} className={`space-between mb-4 ${classes['withdraw-option']}`}>
                    <div className="centralize-top-10">
                        <div>
                            <i className="fs-24 fw-500 tetiary-color"><HiOutlineDatabase /></i>
                        </div>
                        <div>
                            <p className="fs-18 fw-500 tetiary-color">Crypto Withdrawal</p>
                            <p className="fs-14 fw-400 secondary-color">Make withdrawals to a wallet address</p>
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

export default Step1