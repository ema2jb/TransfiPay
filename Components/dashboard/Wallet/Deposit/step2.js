import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Deposit.module.scss'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'
import Modal from '../../Modals/index'


const Step2 = ({handleCurrentStep})=>{

    const {depositAddress} = useSelector(state=>state.wallet)
    const [clipboardText, setClipboardText] = useState("Copy")  

    const copyToClipBoard = ()=>{
      navigator.clipboard.writeText(depositAddress)
      setClipboardText('copied')
    }
  
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
        <div className={`${classes.step2}`}>
            <div className={`space-between mt-3 mb-3 ${classes.header}`}>
                <div>
                    <h1 className="fw-600 fs-20 primary-color">Deposit Amount</h1>
                    <p className="fs-16 fw-400 secondary-color">Select a blockchain newtwork to continue</p>
                </div>
                <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 of 2</span></p>
            </div>
          {
            /*
               <div className={classes['deposit-options']}>
                <span className={classes.active}>BRP20 </span>
                <span>ETR10 </span>
                <span>BEP20 </span>
                <span>TRC1 </span>
                <span>TRC20 </span>
                <span>SCE2 </span>
                <span>BST40</span>
            </div>
            */
          }
            <div className={classes.barcode}>
                <div className={classes.image}>
                    <img src="/dashboard/Qrcode.png" alt="Qrcode"  />
                </div>
                <div className={classes.instruction}>
                    <i><HiOutlineLightBulb /></i>
                    <p className="fs-16 fw-400 secondary-color ">
                        Only send the selected coin to this deposit address. Sending another coin or 
                        token to this address may result to loss of coin deposit
                    </p>
                </div>
            </div>
            <div className={`mb-3 mt-4 ${classes['deposit-address']}`}>
                <label className="fs-16 fw-500 secondary-color"> Deposit Address </label>
                <div className={`space-between w-100 bckg4 br-8 p-3 ${classes.input}`}> 
                    <input className="w-100 tetiary-color fs-20 fw-500" type="text" value={depositAddress} />
                    <span onMouseOut={()=>setClipboardText()} className={classes.tooltip} onClick={() => copyToClipBoard()}>
                      <span className={classes.tooltiptext}>{clipboardText?clipboardText:"Copy"}</span>
                      <HiOutlineDocumentDuplicate style={{fontSize:"22px"}} />
                    </span>
                </div>
            </div>
            <div className='justify-right mt-5 mb-2'>
                <div>
                    <button onClick={()=>handleCurrentStep('deposit-step1')} className="btn-transparent">Go Back</button>
                </div>
                <div>
                    <button onClick={()=>handleCurrentStep('')} className='btn-default'>Ok</button>
                </div>
            </div>
        </div>
        </Modal>
    </>
}

export default Step2