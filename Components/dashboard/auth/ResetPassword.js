import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import {useRouter} from 'next/router'
import { AiFillEyeInvisible } from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";
import cogoToast from 'cogo-toast'

import { resetPasswordRequest } from '../../../requests/auth';
import { authActions } from '../../../Store/auth-slice';


const ResetPassword = ({otpCode, otpId, userId})=>{

    const dispatch=useDispatch()
    const router = useRouter()

    const [resetPasswordDetails, setResetPasswordDetails] =useState({
        newPassword:{
            value:"",
            validated:{
                firstCheck:false,
                secondCheck:false
            },
            visible:false
        },
        confirmPassword:{
            value:"",
            visible:false
        },
    })

    const {loading} = useSelector(state=>state.auth.authRequestState)

    const validatePassword = (value)=>{
        setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, value}}))
        const specialRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
        console.log(Boolean(value.match(specialRegex)))
        if(Boolean(value.match(specialRegex)) === true){
            console.log(true)
            setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, validated:{...prev.newPassword.validated, ['firstCheck']:true}}}))
        }else{
            setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, validated:{...prev.newPassword.validated, ['firstCheck']:false}}}))
        }
        if(value.length >= 8){
            setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, validated:{...prev.newPassword.validated, ['secondCheck']:true}}}))
        }else{
            setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, validated:{...prev.newPassword.validated, ['secondCheck']:false}}}))
        }
    }


    const submitHandler=(event)=>{
        event.preventDefault()
        const specialRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
        if(resetPasswordDetails.newPassword.value.match(specialRegex) === null){
            return cogoToast.error('password must contain special characters', {
                position: 'top-center',
                });
        } 
        if(resetPasswordDetails.newPassword.value !== resetPasswordDetails.confirmPassword.value){
            return cogoToast.error('passwords do not match', {
                position: 'top-center',
                });
        }
        dispatch(authActions.changeAuthRequestState({loading:true}))
        const resetPasswordPayload ={
            otpCode,
            otpId,
            userId,
            newPassword:resetPasswordDetails.newPassword.value,
            confirmPassword:resetPasswordDetails.confirmPassword.value
        }
        resetPasswordRequest(resetPasswordPayload).then(({data:{meta:{statusCode}}})=>{
            if(statusCode === 200){
                dispatch(authActions.changeAuthRequestState({loading:false}))
                router.push('/auth')
            }
        }).catch(err=>{
        console.log(err)
        dispatch(authActions.changeAuthRequestState({loading:false}))
        })
    }

    return<>
        <div 
        className="login">
            <h1 className="fs-24 fw-600 primary-color">Reset Password</h1>
            <form onSubmit={submitHandler}>
            <div className="form-group">
                    <label>Password *</label>
                    <div className="password">
                        <input 
                            type={resetPasswordDetails.newPassword.visible ?"text":"password"} 
                            placeholder="Enter password"
                            onChange={({target:{value}})=>validatePassword(value)}
                            value={resetPasswordDetails.newPassword.value}
                        />
                        <span 
                            onClick={()=>setResetPasswordDetails(prev=>({...prev, newPassword:{...prev.newPassword, visible:!prev.newPassword.visible}}))}
                        >
                            {resetPasswordDetails.newPassword.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Re-type Password *</label>
                    <div className="password">
                        <input
                            type={resetPasswordDetails.confirmPassword.visible ?"text":"password"} 
                            placeholder="Re-type password"
                            onChange={({target:{value}})=>setResetPasswordDetails(prev=>({...prev, confirmPassword:{...prev.confirmPassword, value}}))}
                            value={resetPasswordDetails.confirmPassword.value}
                        />
                        <span  
                            onClick={()=>setResetPasswordDetails(prev=>({...prev, confirmPassword:{...prev.confirmPassword, visible:!prev.confirmPassword.visible}}))}
                        >
                            {resetPasswordDetails.confirmPassword.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                    </div>
                </div>
                <div className="form-group radio-input ">
                    <input type="radio" checked={resetPasswordDetails.newPassword.validated.secondCheck} readOnly/><span>More than 8 characters needed</span>
                </div>
                <div className="form-group radio-input">
                    <input type="radio" checked={resetPasswordDetails.newPassword.validated.firstCheck} readOnly/><span >Include Special characters</span>
                </div>
                <div>
                    <button  disabled={loading} className='w-80 mt-4 btn-default fs-16 fw-600' type="submit">
                       {loading?"Loading...":"Reset Password"}
                    </button>
                </div>
            </form>
        </div>
    </>
}

export default ResetPassword