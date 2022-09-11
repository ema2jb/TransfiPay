import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {useRouter} from 'next/router'

import { authActions } from '../../../Store/auth-slice';
import { forgotPasswordRequest } from '../../../requests/auth';
import RequestSent from '../Modals/RequestSent'
import cogoToast from 'cogo-toast'


const ForgotPassword = ()=>{

    const dispatch = useDispatch()
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [requestSent, setRequestSent] = useState(false)
    const {loading} = useSelector(state=>state.auth.authRequestState)

    const submitHandler = (event) =>{
        event.preventDefault()
        dispatch(authActions.changeAuthRequestState({loading:true}))
        forgotPasswordRequest({email}).then(({data:{data, meta}})=>{
            if(meta.error){
                return cogoToast.error(meta.message, { position: 'top-center' })
            }
            console.log(data)
            dispatch(authActions.changeAuthRequestState({loading:false}))
            setRequestSent(true)
            setTimeout(()=>{
                setRequestSent(false)
                router.push(`/auth/rp/999999/${data.otpId}/${data.userId}`)
            },3000)
        }).catch(err=>{
            console.log(err)
            dispatch(authActions.changeAuthRequestState({loading:false}))
            cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
        })
    }

    return<>
        <div 
        className="login">
            <h1 className="fs-24 fw-600 primary-color">Forgot Password</h1>
            <p className="fs-16 fw-500 secondary-color">Enter an email to receive reset link</p>
            <form onSubmit={submitHandler}>
                <div className="form-group mb-3">
                    <label className="fs-16 fw-500 tertiary-color">Email Address *</label>
                    <input 
                    classsName="fs-14"
                    value={email}
                    onChange={({target:{value}})=>setEmail(value)}
                    type="email" 
                    placeholder="Enter email address"/>
                </div>
                <div>
                    <button disabled={loading} className='w-80 mt-4 btn-default fs-16 fw-600' type="submit">
                        {loading?"Sending link...":"Send Reset Link"}
                    </button>
                    <p className="fs-16 fw-600 secondary-color cp mt-2">Remember password? <span className="text-color-2" onClick={()=>dispatch(authActions.changeAuthAppState('showLoginPage'))}>Login</span></p>
                </div>
            </form>
        </div>
        <div className={!requestSent && 'd-none'} >
            <RequestSent closeModal={()=>setRequestSent(true)} email={email} />
        </div>
    </>
}

export default ForgotPassword