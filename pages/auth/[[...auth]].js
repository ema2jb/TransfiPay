import {useSelector, useDispatch} from "react-redux"
import {useRouter} from 'next/router'


import AuthSlider from "../../Components/dashboard/auth/AuthSlider"
import Signup from "../../Components/dashboard/auth/Signup"
import Login from "../../Components/dashboard/auth/Login"
import ForgotPassword from "../../Components/dashboard/auth/ForgotPassword"
import ResetPassword from "../../Components/dashboard/auth/ResetPassword"
import { authActions } from "../../Store/auth-slice"
import { confirmOtpRequest } from "../../requests/auth"
import useLocalStorage from "../../hooks/useLocalStorage"

const Dashboard =()=>{

    const { 
        showLoginPage, 
        showSignupPage,
        showForgotPasswordPage,
        showResetPasswordPage,
    } = useSelector(state=>state.auth.authAppState)

    const router = useRouter()
    const {auth} = router.query
    const action = auth && auth[0]
    const otpCode = auth && auth[1]
    const otpId = auth && auth[2]
    const userId = auth && auth[3]

    const dispatch = useDispatch()
    const {setItem} = useLocalStorage()
    
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
    console.log(auth)


    return <>
        <div className="dashboard-auth">
            <div className="row">
                <div className="col-6 auth-slider">
                    <AuthSlider />
                </div>
                <div className="col-6">

                    {Boolean(auth) && (action === 've') && 
                        <div className="d-flex flex-column mt-20 align-items-center h-100">
                            <div className="loader"></div>
                            <span className="primary-color fs-20 fw-600 mt-5">Verifying Email...</span>
                        </div>
                    }

                    {
                        Boolean(auth) && (action === 'rp') && 
                        <div>
                           <ResetPassword otpCode={otpCode} otpId={otpId} userId={userId} />
                        </div>
                    }

                    {!Boolean(auth) &&
                        <div>
                            {showSignupPage && <Signup />}
                            {showLoginPage && <Login />}
                            {showForgotPasswordPage && <ForgotPassword />}
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Dashboard