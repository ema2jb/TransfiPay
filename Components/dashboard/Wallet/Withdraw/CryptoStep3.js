import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from "../../Modals"
import classes from './Withdraw.module.scss'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'
import {UIActions} from '../../../../Store/ui-slice'
import {walletActions} from '../../../../Store/wallet-slice'
import { initiateWithdrawalFunc } from '../../../../requests/walletRequests'



const Step3 = ({handleCurrentStep}) =>{

    const dispatch = useDispatch()
    const {walletRequestState, withdrawalDetails} = useSelector(state=>state.wallet)

    let formattedAddress = ''
      if(withdrawalDetails.address){
        const wd =  withdrawalDetails.address
        const l = wd.length
         formattedAddress = `${wd[0]}${wd[1]}${wd[2]}${wd[3]}...${wd[l-4]}${wd[l-3]}${wd[l-2]}${wd[l-1]}`
      }

  const initiateWithdrawal = ()=>{
      initiateWithdrawalFunc(dispatch, walletActions, UIActions)
    }

    
    /*
     const aproveOrder = () =>{
       withdrawFunc(dispatch, walletActions, withDrawalDetails, handleSuccessfull)
    }
    */
   



    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            {
            <div className={classes['crypto-step3']}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Confirm Order</h1>
                        <p className="fs-16 fw-400 secondary-color">Confirm all is in place before continuing</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 3 of 3</span></p>
                </div>
                <div className="centralize mt-4">
                    <div className={`${classes.recieve}`}>
                        <p className="fs-16 fw-500 secondary-color">You want to withdraw</p>
                        <p className="fs-24 fw-600 secondary-color"><span className='text-color-1'>{withdrawalDetails.amount}</span>{withdrawalDetails.coinIdOrSymbol}</p>
                    </div>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Recieving address</p>
                    <p className="fs-16 fw-500 tetiary-color"><span><HiOutlineDocumentDuplicate /></span>{formattedAddress}</p>
                </div>
                <div className="space-between mt-3 pb-4 border-bottom">
                    <p className="fs-16 fw-400 secondary-color">Network</p>
                    <p className="fs-16 fw-500 tetiary-color">{withdrawalDetails.networkName}</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Coin</p>
                    <p className="fs-16 fw-500 tetiary-color">{withdrawalDetails.cooinIdOrSymbol}</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Amount (USD)</p>
                    <p className="fs-16 fw-500 tetiary-color">{withdrawalDetails.amount}</p>
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
                        <button disabled={walletRequestState.loading} onClick={()=>initiateWithdrawal()} className='btn-default'>{walletRequestState.loading?"loading":"Initiate Transfer"}</button>
                    </div>
                </div>
            </div>
            }
        </Modal>
    </>
}

export default Step3