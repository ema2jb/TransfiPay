import {useState} from 'react'
import { useDispatch } from 'react-redux'

import Modal from "../Modals"
import classes from './Withdraw/Withdraw.module.scss'
import {UIActions} from '../../../Store/ui-slice'


const LoadingModal = ()=>{

  // const currentStep = useSelector(state=>state.UI.walletActionsUI.currentStep)
    
  const dispatch = useDispatch()

  const handleCurrentStep = (value)=>{
      dispatch(UIActions.changeWalletActionsUI(value))
  }
  
  return<>
    <Modal hideModal={()=>handleCurrentStep('')}>
    <div className={classes.finalStep}>
                 <div className={classes['order-approved']}>
                     <div className={classes.image}>
                         <img src="/dashboard/loading.png" alt="verification link sent"  />
                     </div>
                     <p className='fs-20 fw-700 tetiary-color mt-4 mb-2'>Processing Order....</p>
                     <p className='fs-16 fw-400 secondary-color'>Kindly wait while we process your order for you </p>
                     <p className="fs-16 fw-400 secondary-color mt-4">This won’t take long</p>
                 </div>
                  {
                    /*
                       <div className='justify-right mt-5 mb-2'>
                     <div>
                         <button className="btn-transparent">Cancel</button>
                     </div>
                     <div>
                         <button onClick={()=>handleCurrentStep('')} className='btn-default'>Try Again</button>
                     </div>
                 </div>
                    */
                  }
  </div>
    </Modal>
  </>
}

export default LoadingModal