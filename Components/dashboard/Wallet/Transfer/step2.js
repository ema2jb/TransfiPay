import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from "../../Modals"
import classes from '../Withdraw/Withdraw.module.scss'
import {walletActions} from '../../../../Store/wallet-slice'
import {UIActions} from '../../../../Store/ui-slice'
import { initiateBizTransferFunc } from '../../../../requests/walletRequests'


const TransferStep2 = ({handleCurrentStep, bizTransferDetails, clearEntries}) =>{

    const dispatch = useDispatch()
    
    const {walletRequestState} = useSelector(state=>state.wallet)
    const {activeBiz} = useSelector(state=>state.biz)

    const initiateTransfer = ()=>{
      initiateBizTransferFunc(dispatch, walletActions, UIActions, activeBiz.id)
    }

    const closeModal = ()=>{
      clearEntries.closeModal()
      handleCurrentStep('')
    }

    return <>
        <Modal hideModal={()=>handleCurrentStep('')}> 
            <div className={classes['crypto-step3']}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Confirm Order</h1>
                        <p className="fs-16 fw-400 secondary-color">Confirm all is in place before continuing</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 of 2</span></p>
                </div>
                <div className="centralize mt-4">
                    <div className={`${classes.recieve}`}>
                        <p className="fs-16 fw-500 secondary-color">You will be sending</p>
                        <p className="fs-24 fw-600 secondary-color"><span className='text-color-1'>{bizTransferDetails.amount}</span>{bizTransferDetails.coinIdOrSymbol}</p>
                    </div>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">You will be sending to</p>
                    <p className="fs-16 fw-500 tetiary-color">{bizTransferDetails.email}</p>
                </div>
                <div className="space-between mt-3 pb-4 border-bottom">
                    <p className="fs-16 fw-400 secondary-color">Transfer Note</p>
                    <p className="fs-16 fw-500 tetiary-color">{bizTransferDetails.note}</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Coin</p>
                    <p className="fs-16 fw-500 tetiary-color">{bizTransferDetails.coinIdOrSymbol}</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Amount (USD)</p>
                    <p className="fs-16 fw-500 tetiary-color">$720</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Transaction fee</p>
                    <p className="fs-16 fw-500 tetiary-color">0.00 USDT</p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>closeModal()} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button disabled={walletRequestState.loading} onClick={()=>initiateTransfer()} className='btn-default'>{walletRequestState.loading?"loading":"Initiate Transfer"}</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default TransferStep2