import { useState } from "react"


import AuthSlider from "../../Components/dashboard/auth/AuthSlider"
import Signup from "../../Components/dashboard/auth/signup"
import Login from "../../Components/dashboard/auth/login"
import Kyc from "../../Components/dashboard/auth/Kyc"


const Dashboard =()=>{

    const [isSignup, setIsSignup] = useState(true)
    const [isKyc, setIsKyc] = useState(false)

    const signupHandler = () =>{
        setIsSignup(prev=>!prev)
    }

    const kycHandler = ()=>{
        setIsKyc(true)
    }

    return <>
        <div className="dashboard-auth">
            <div className="row">
                <div className="col-6 auth-slider">
                    <AuthSlider />
                </div>
                <div className="col-6">
                    {isSignup && !isKyc && <Signup signupHandler={signupHandler} kycHandler={kycHandler} />}
                    {!isSignup && !isKyc && <Login signupHandler={signupHandler} />}
                    {isKyc && <Kyc />}
                </div>
            </div>
        </div>
    </>
}

export default Dashboard