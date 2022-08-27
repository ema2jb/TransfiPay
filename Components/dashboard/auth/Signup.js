import {useState} from 'react'
import cogoToast from 'cogo-toast'
import {useRouter} from 'next/router'

import { AiFillEyeInvisible } from "react-icons/ai";
import {AiFillEye} from "react-icons/ai"
import { authActions } from '../../../Store/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { SignupSchema } from '../../../FormValidations/auth.validate';
import { signupRequest } from '../../../requests/auth';
import useLocalStorage from '../../../hooks/useLocalStorage'
import RequestSent from '../Modals/RequestSent'


const Signup = ()=>{

    //const {setItem} = useLocalStorage()
    const router = useRouter()

    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)
    const [passwordCheck, setPasswordCheck] = useState({
        firstCheck:false,
        secondCheck:false
    })
    const [requestSent, setRequestSent] = useState(false)

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.auth.authRequestState)
    

    const [signupDetails, setSignupDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }) 

    const seePasswordHandler = (text)=>{
        if(text==="password"){
            setSeePassword(prev=>!prev)
        }else{
            setSeeConfirmPassword(prev=>!prev)
        }
    }

    const validatePassword = (value)=>{
        setSignupDetails(prev=>({...prev, password:value}))
        const specialRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
        if(Boolean(value.match(specialRegex)) === true){
            setPasswordCheck(prev=>({...prev, ['firstCheck']:true}))
        }else{
            setPasswordCheck(prev=>({...prev, ['firstCheck']:false}))
        }
        if(value.length >= 8){
            setPasswordCheck(prev=>({...prev, ['secondCheck']:true}))
        }else{
            setPasswordCheck(prev=>({...prev, ['secondCheck']:false}))
        }
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        SignupSchema.validate(signupDetails)
        .then((valid)=>{
            if(valid){
                const specialRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
                if(signupDetails.password.match(specialRegex) === null){
                    return cogoToast.error('password must contain special characters', {
                        position: 'top-center',
                      });
                }
                if(signupDetails.password !== signupDetails.confirmPassword){
                    return cogoToast.error('passwords do not match', {
                        position: 'top-center',
                      });
                }
                const userDetails = {...signupDetails, fullName:`${signupDetails.firstName} ${signupDetails.lastName}`}
                delete userDetails.firstName
                delete userDetails.lastName
                console.log(userDetails)
                dispatch(authActions.changeAuthRequestState({loading:true}))
                signupRequest(userDetails).then(({data:{data}})=>{
                    console.log(data)
                    dispatch(authActions.changeAuthRequestState({loading:false}))
                    setRequestSent(true)
                    setTimeout(()=>{
                        setRequestSent(false)
                        router.push(`/auth/ve/999999/${data.otpId}/${data.userId}`)
                    },3000)
                }).catch(err=>{
                   console.log(err)
                   dispatch(authActions.changeAuthRequestState({loading:false}))
                })
                
            }
        })
        .catch((err) => {
			console.log(err);
			cogoToast.error('something Went Wrong', { position: 'top-center' });
		  });
    }



    return<>
        <div className="signup">
            <h1 className="fs-24 fw-600 primary-color">Sign up to create account</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>First Name *</label>
                    <input
                        onChange={({target:{value}})=>setSignupDetails(prev=>({...prev, firstName:value}))}  
                        type="text" 
                        placeholder="Surname Firstname"
                        value={signupDetails.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>last Name *</label>
                    <input 
                        onChange={({target:{value}})=>setSignupDetails(prev=>({...prev, lastName:value}))}  
                        type="text" 
                        placeholder="Surname Firstname"
                        value={signupDetails.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                        onChange={({target:{value}})=>setSignupDetails(prev=>({...prev, email:value}))}
                        type="email" 
                        placeholder="Enter email address"
                        value={signupDetails.email}
                    />
                </div>
                <div className="form-group">
                    <label>Password *</label>
                    <div className="password">
                        <input 
                            onChange={({target:{value}})=>validatePassword(value)}
                            type={seePassword?"text":"password"} 
                            placeholder="Enter password"
                            value={signupDetails.password}
                        />
                        <span 
                        onClick={()=>seePasswordHandler('password')}>{seePassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Re-type Password *</label>
                    <div className="password">
                        <input
                            onChange={({target:{value}})=>setSignupDetails(prev=>({...prev, confirmPassword:value}))} 
                            type={seeConfirmPassword ?"text":"password"} 
                            placeholder="Re-type password"
                            value={signupDetails.confirmPassword}
                        />
                        <span  onClick={()=>seePasswordHandler('confirm')}>{seeConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div className="form-group radio-input ">
                    <input type="radio" checked={passwordCheck.secondCheck} readOnly/><span>More than 8 characters needed</span>
                </div>
                <div className="form-group radio-input">
                    <input type="radio" checked={passwordCheck.firstCheck} readOnly/><span >Include Special characters</span>
                </div>
                <div>
                    <button disabled={loading} className='w-80 mt-5 btn-default fs-16 fw-600' type="submit">
                       {loading?"Creating Account....":"Create Account"}
                    </button>
                    <p className="fs-16 fw-600 secondary-color cp mt-2">Already have an account? <span className="text-color-2" onClick={()=>dispatch(authActions.changeAuthAppState('showLoginPage'))}>Login into account</span></p>
                </div>
            </form>
        </div>
        <div className={!requestSent && 'd-none'} >
            <RequestSent closeModal={()=>setRequestSent(true)} email={signupDetails.email} />
        </div>
    </>
}

export default Signup