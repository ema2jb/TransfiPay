import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import classes from '../Settings.module.scss'
import Modal from '../../Modals'
import { changeEmailFuncs, changeEmailOtpFunc, confirmEmailOtpFunc } from '../../../../requests/userRequests'
import {userActions} from '../../../../Store/user-slice'


const ChangeEmail = ({securityDetailsHandler, showHandler}) =>{

    const goBack = ()=>{
        securityDetailsHandler(false)
        showHandler('')
    }

    const dispatch = useDispatch()
    const { userRequestState} = useSelector(state=>state.user)
    const loading = userRequestState.loading
    const [otpId, setOtpId] = useState('')
    const [emailStep, setEmailStep] = useState('step1')
    const [activeFunc, setActiveFunc] = useState({func:changeEmailFuncs})
    const [value, setValue] = useState('')
    const [callToAction, setCallToAction] = useState('Change Email')

    const valueHandler = ()=>{
        setValue('')
    }

    const emailStepHandler = (step)=>{
        setEmailStep(step)
    }

    const otpIdHandler = (value)=>{
        setOtpId(value)
    }

    const currentFunc = activeFunc.func
    const submitHandler = ()=>{
        Boolean(value) === true && currentFunc(dispatch, userActions, value, otpId, otpIdHandler, emailStepHandler, valueHandler)
    }

    useEffect(()=>{
        if(emailStep==="step1"){
            setActiveFunc({func:changeEmailFuncs})
            setCallToAction('Change Email')
        } 
        if(emailStep==="step2"){
            setActiveFunc({func:changeEmailOtpFunc})
            setCallToAction('Send OTP')
        }
        if(emailStep==="step3"){
            setActiveFunc({func:confirmEmailOtpFunc})
            setCallToAction('Send OTP')
        }
        if(emailStep=="step4"){
            setEmailStep('step1')
            goBack()
        }
    },[emailStep])


    return <>
        <Modal hideModal={()=>showHandler('')} >
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <div className={`mb-3 bckg5 ${classes.tips}`}>
                    <h1 className="fs-18 fw-600 text-color-7">Change Email</h1>
                    <p  className="fs-14 fw-600 text-color-7">
                        {emailStep==="step1" && "Make sure to use an active email were you recieve both real time and none real time updates"}
                        {emailStep==="step2" && "Enter the OTP sent to your old email"}
                        {emailStep==="step3" && "Enter the OTP sent to your new Email"}
                    </p>
                </div>
                <div>
                    {
                        emailStep==="step1" && 
                        <div className={classes['form-group']}>
                            <label className='fs-16 fw-500 text-color-3'>Email</label>
                            <div className={`space-between ${classes.input}`}>
                                <input value={value} onChange={({target:{value}})=>setValue(value)} className="w-100" type="text" placeholder='Enter New Email' />
                            </div>
                        </div>
                    }
                    {
                        emailStep==="step2" &&
                        <div className={classes['form-group']}>
                            <label className='fs-16 fw-500 text-color-3'>Enter OTP</label>
                            <div className={`space-between ${classes.input}`}>
                                <input value={value} onChange={({target:{value}})=>setValue(value)} className="w-100" type="text" placeholder='Enter New Email' />
                            </div>
                        </div>
                    }
                    {
                        emailStep==="step3" &&
                        <div className={classes['form-group']}>
                            <label className='fs-16 fw-500 text-color-3'>Enter OTP</label>
                            <div className={`space-between ${classes.input}`}>
                                <input value={value} onChange={({target:{value}})=>setValue(value)} className="w-100" type="text" placeholder='Enter New Email' />
                            </div>
                        </div>
                    }
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button onClick={()=>goBack()}  className='btn-transparent'>Back to previous page</button>
                        </div>
                        <div>
                            <button disabled={loading} onClick={()=>submitHandler()}  className='btn-default'>{loading?"Loading":callToAction}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
    </>
}

export default ChangeEmail