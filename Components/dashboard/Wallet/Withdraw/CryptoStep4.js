import {useState, useRef, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Modal from "../../Modals"
import classes from '../Withdraw/Withdraw.module.scss'
import {walletActions} from '../../../../Store/wallet-slice'
import {UIActions} from '../../../../Store/ui-slice'
import { bizWithdrawFunc } from '../../../../requests/walletRequests'


const Step4 =({handleCurrentStep, clearEntries})=>{

    const dispatch = useDispatch()
    const {bizWithdrawalDetails, walletRequestState} = useSelector(state=>state.wallet)
    const {activeBiz} = useSelector(state=>state.biz)

    const [pin, setPin] = useState({
        input1:"",
        input2:"",
        input3:"",
        input4:"",
        input5:"",
        input6:""
    })

    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()
    const input5Ref = useRef()
    const input6Ref = useRef()

    const onChangeHandler = ({target:{name, value}})=>{
        if(value.length > 1){
          return
        }
        setPin({...pin, [name]:value})
    }

  const withdraw = ()=>{
    const otpCode = `${pin.input1}${pin.input2}${pin.input3}${pin.input4}${pin.input5}${pin.input6}`
    const updatedWithDrawalDetails = {...bizWithdrawalDetails, otpCode:otpCode}
   bizWithdrawFunc(dispatch, walletActions, updatedWithDrawalDetails, UIActions, clearEntries.closeModal, activeBiz.id)
  }

    useEffect(()=>{
        input1Ref.current.addEventListener('keyup', ()=>{
            if(input1Ref.current.value){
                input2Ref.current.focus()
            }
        })
        input2Ref.current.addEventListener('keyup', ()=>{
            if(input2Ref.current.value){
                input3Ref.current.focus()
            }
        })
        input3Ref.current.addEventListener('keyup', ()=>{
            if(input3Ref.current.value){
                input4Ref.current.focus()
            }
        })
      input4Ref.current.addEventListener('keyup', ()=>{
            if(input4Ref.current.value){
                input5Ref.current.focus()
            }
        })
      input5Ref.current.addEventListener('keyup', ()=>{
            if(input5Ref.current.value){
                input6Ref.current.focus()
            }
        })
    }, [pin])

    const closeModal = ()=>{
      clearEntries.closeModal()
      handleCurrentStep('')
    }

    return <>
        <Modal hideModal={()=>closeModal()}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Confirm Transfer</h1>
                        <p className="fs-16 fw-400 secondary-color">Enter OTP Sent to your mail</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 </span>of 3</p>
                </div>
                <div className={classes['authentication-pin']}>
                    <input 
                        ref={input1Ref} 
                        type="text" 
                        maxLength={1}
                        name="input1"
                        value={pin.input1}
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input2Ref} 
                        type="text" 
                        maxLength={1}
                        name="input2"
                        value={pin.input2} 
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input3Ref} 
                        type="text" 
                        maxLength={1}
                        name="input3"
                        value={pin.input3}
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input4Ref} 
                        type="text" 
                        maxLength={1}
                        name="input4"
                        value={pin.input4}  
                        onChange={onChangeHandler}
                    />
                  <input 
                        ref={input5Ref} 
                        type="text" 
                        maxLength={1}
                        name="input5"
                        value={pin.input5}  
                        onChange={onChangeHandler}
                    />
                  <input 
                        ref={input6Ref} 
                        type="text" 
                        maxLength={1}
                        name="input6"
                        value={pin.input6}  
                        onChange={onChangeHandler}
                    />
                </div>
              <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button disabled={walletRequestState.loading} className="btn-default" onClick={()=>withdraw()} className='btn-default'>{walletRequestState.loading?"loading":"Send OTP"}</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step4