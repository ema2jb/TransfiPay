
import Modal from '../../Modals/index'
import classes from '../Wallet.module.scss'

const FinalStep = ({handleCurrentStep})=>{
        return<>
            <Modal hideModal={()=>handleCurrentStep('')}>
                <div className={classes.finalStep}>
                    <div className={classes['order-approved']}>
                        <div className={classes.image}>
                            <img src="/dashboard/sent.png" alt="verification link sent"  />
                        </div>
                        <p className='fs-20 fw-700 tetiary-color mt-4 mb-2'>Order Approved !!</p>
                        <p className='fs-16 fw-400 secondary-color'>Your <span className="fw-600 tetiary-color">Withdrawal Order</span> has been approved. Your money is on it’s way to you</p>
                    </div>
                    <div className="justify-right mt-5 mb-2">
                        <button className='btn-default' onClick={()=>handleCurrentStep('')}>
                            Back Home
                        </button>
                    </div>
                </div>
            </Modal>
        </>
}

export default FinalStep


