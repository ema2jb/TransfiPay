import {useState} from 'react'
import {useRouter} from 'next/router'
import cogoToast from 'cogo-toast'

import { AiFillEyeInvisible } from "react-icons/ai";
import {AiFillEye} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../Store/auth-slice';
import { LoginSchema } from '../../../FormValidations/auth.validate';
import { loginRequest } from '../../../requests/auth';
import useLocalStorage from '../../../hooks/useLocalStorage'


const Login = ()=>{

    const router = useRouter()

    const {setItem} = useLocalStorage()

    const [loginDetails, setLoginDetails] = useState({
        email:"",
        password:""
    })

    const {loading} = useSelector(state=>state.auth.authRequestState)

    const [seePassword, setSeePassword] = useState(false)
    const dispatch = useDispatch()

    const seePasswordHandler = ()=>{
        setSeePassword(prev=>!prev)
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        LoginSchema.validate(loginDetails)
        .then((valid)=>{
            if(valid){
                dispatch(authActions.changeAuthRequestState({loading:true}))
                loginRequest(loginDetails).then(({data:{data, meta}})=>{
                    console.log(data)
                    if(meta.error){
                        return cogoToast.error(meta.message, { position: 'top-center' })
                     }
                    dispatch(authActions.changeAuthRequestState({loading:false}))
                    dispatch(authActions.storeUserDetails(data))
                    setItem('userDetails', data)
                    setItem('accessToken', {token:meta.token})
                    dispatch(authActions.changeAuthRequestState({isAuthenticated:true}))
                    setLoginDetails({
                        email:"",
                        password:""
                    })
                    router.push('/dashboard')
                }).catch(err=>{
                   dispatch(authActions.changeAuthRequestState({loading:false}))
                   //console.log(err.response.data.meta.message)
                   cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
                })
                
            }
        })
        .catch((err) => {
			cogoToast.error('something Went Wrong', { position: 'top-center' });
            cogoToast.error(err.errors[0], { position: 'top-center' })
		  });
    }

    

    return<>
        <div 
        className="login">
            <h1 className="fs-24 fw-600 primary-color">Login into Account</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label className="fs-16 fw-400 tertiary-color">Email Address *</label>
                    <input
                        className="fs-14"
                        onChange={({target:{value}})=>setLoginDetails(prev=>({...prev, email:value}))}
                        type="email" 
                        placeholder="Enter email address"
                        value={loginDetails.email}
                    />
                </div>
                <div className="form-group">
                    <label className="fs-16 fw-400 tertiary-color">Password *</label>
                    <div className="password">
                        <input 
                            className="fs-14"
                            onChange={({target:{value}})=>setLoginDetails(prev=>({...prev, password:value}))}
                            type={seePassword?"text":"password"} 
                            placeholder="Enter password"
                            value={loginDetails.password}
                        />
                        <span 
                        onClick={()=>seePasswordHandler()}>{seePassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div className="w-80 mx-auto text-left">
                    <p><span className=' cp text-color-2 fs-16 fw-600' onClick={()=>dispatch(authActions.changeAuthAppState('showForgotPasswordPage'))}>Forgot Password?</span></p>
                </div>
                <div>
                    <button disabled={loading} className='w-80 mt-4 btn-default fs-16 fw-600' type="submit">
                        {loading?"loading...":"Login into Account"}
                    </button>
                    <p className="fs-16 fw-600 secondary-color cp mt-2">Don't have an account? <span className="text-color-2" onClick={()=>dispatch(authActions.changeAuthAppState('showSignupPage'))}>Sign up</span></p>    
                </div>
            </form>
        </div>
    </>
}

export default Login