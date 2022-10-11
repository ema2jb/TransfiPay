import {useSelector, useDispatch} from "react-redux"
import {useRouter} from 'next/router'


import AuthSlider from "../../Components/dashboard/auth/AuthSlider"
import Signup from "../../Components/dashboard/auth/Signup"
import Login from "../../Components/dashboard/auth/Login"
import ForgotPassword from "../../Components/dashboard/auth/ForgotPassword"
import ResetPassword from "../../Components/dashboard/auth/ResetPassword"
import Otp from '../../Components/dashboard/auth/otp'
import { authActions } from "../../Store/auth-slice"
import { confirmOtpRequest } from "../../requests/auth"
import useLocalStorage from "../../hooks/useLocalStorage"

const Dashboard =()=>{

    const { 
        showLoginPage, 
        showSignupPage,
        showForgotPasswordPage,
        showResetPasswordPage,
        showOtpPage
    } = useSelector(state=>state.auth.authAppState)

    const router = useRouter()
    const {auth} = router.query
    const action = auth && auth[0]
    const otpCode = auth && auth[1]
    const otpId = auth && auth[2]
    const userId = auth && auth[3]

    const dispatch = useDispatch()
    const {setItem} = useLocalStorage()

    /*
    
    if (Boolean(auth) === true){
        if(action ===   've'){
            confirmOtpRequest({otpCode, otpId, userId}).then(({data:{data, meta:{token}}})=>{
                console.log(data)
                dispatch(authActions.changeAuthRequestState({loading:false}))
                dispatch(authActions.storeUserDetails(data))
                setItem('userDetails', data)
                setItem('accessToken', {token})
                router.push('/dashboard')
                return
            }).catch(err=>{
            console.log(err)
            dispatch(authActions.changeAuthRequestState({loading:false}))
            })
        }
    }

    */

    return <>
        <div className="dashboard-auth">
            <div className="row">
                <div className="d-none d-md-block col-6 auth-slider">
                    <AuthSlider />
                </div>
                <div className="col-12 col-md-6 auth-form">
                    <div className="d-md-none text-center authLogo">
                        <img src="dashboard/authLogo.png" alt="logo image" />
                    </div>
                    {
                        Boolean(auth) && (action === 'rp') && 
                        <div>
                           
                        </div>
                    }                    
                    {!Boolean(auth) &&
                        <div className="auth-form">
                            {showSignupPage && <Signup />}
                            {showLoginPage && <Login />}
                            {showForgotPasswordPage && <ForgotPassword />}
                            {showOtpPage && <Otp/>}
                            {showResetPasswordPage && <ResetPassword />}
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Dashboard