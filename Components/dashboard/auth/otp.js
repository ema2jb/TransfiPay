import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../Store/auth-slice';
import { OtpSchema } from '../../../FormValidations/auth.validate';
import { confirmOtpRequest, resendOtpRequest } from '../../../requests/auth';
import useLocalStorage from '../../../hooks/useLocalStorage'
import cogoToast from 'cogo-toast'


const Otp = ()=>{
    const {setItem} = useLocalStorage()
    const [otp, setOtp] = useState({
        otpCode:''
    })

    const dispatch = useDispatch()

    const authDetails = useSelector(state=>state.auth.authDetails)
    const {loading} = useSelector(state=>state.auth.authRequestState)

    const resendToken = () =>{
        resendOtpRequest(authDetails).then(({data:{data}})=>{
            dispatch(authActions.changeAuthRequestState({loading:false}))
            cogoToast.success(meta.message, { position: 'top-center' })
            console.log('token sent')
        }).catch(err=>{
           console.log(err)
           dispatch(authActions.changeAuthRequestState({loading:false}))
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        OtpSchema.validate(otp).then(valid=>{
            if(valid){
                const confirmOtpDetails = {...authDetails, ...otp}
                console.log(confirmOtpDetails)
                dispatch(authActions.changeAuthRequestState({loading:true}))
                confirmOtpRequest(confirmOtpDetails).then(({data:{data, meta:{token}}})=>{
                    console.log(data)
                    dispatch(authActions.changeAuthRequestState({loading:false}))
                    dispatch(authActions.storeAuthDetails({...data, ...{token}}))
                    setItem('authDetails', {...data, ...{token}})
                    dispatch(authActions.changeAuthAppState('showLoginPage'))
                    setOtp({otpCode:''})
                }).catch(err=>{
                   console.log(err)
                    err.response && 
                    err.response.data &&
                    err.response.meta &&
                    cogoToast.error(err.response.data.meta.message, { position: 'top-center' })
                   dispatch(authActions.changeAuthRequestState({loading:false}))
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return<>
        <div 
        className="login">
            <h1>Enter OTP</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group mb-3">
                    <input 
                    type="number" 
                    placeholder="Enter OTP"
                    onChange={({target:{value}})=>setOtp({otpCode:value})}
                    value={otp.otpCode}
                    />
                </div>
                <div>
                    <button disabled={loading} className='w-80 mt-3 btn-default' type="submit">
                        {loading?"Completing Registration...":'Send OTP'}
                    </button>
                    <p className="mt-4 text-color-2" onClick={()=>resendToken()}>resend token</p>
                </div>
            </form>
        </div>
    </>
}

export default Otp