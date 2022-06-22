import {useState} from 'react'

import { AiFillEyeInvisible } from "react-icons/ai";
import {AiFillEye} from "react-icons/ai"


const Signup = ({signupHandler, kycHandler})=>{

    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)
    

    const seePasswordHandler = (text)=>{
        if(text==="password"){
            setSeePassword(prev=>!prev)
        }else{
            setSeeConfirmPassword(prev=>!prev)
        }
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        console.log('kyc')
        kycHandler()
    }



    return<>
        <div className="signup">
            <h1>Sign up to create account</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Surname Firstname"/>
                </div>
                <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter email address"/>
                </div>
                <div className="form-group">
                    <label>Password *</label>
                    <div className="password">
                        <input type={seePassword?"text":"password"} placeholder="Enter password"/>
                        <span 
                        onClick={()=>seePasswordHandler('password')}>{seePassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Re-type Password *</label>
                    <div className="password">
                        <input 
                        type={seeConfirmPassword ?"text":"password"} placeholder="Re-type password"/>
                        <span  onClick={()=>seePasswordHandler('confirm')}>{seeConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div className="form-group radio-input ">
                    <input type="radio" readOnly/><span>More than 8 characters needed</span>
                </div>
                <div className="form-group radio-input">
                    <input type="radio" readOnly/><span >Include Special characters</span>
                </div>
                <div>
                    <button 
                    type="submit">
                        Create an Account
                    </button>
                    <p>Already have an account? <span onClick={signupHandler}>Login into account</span></p>
                </div>
            </form>
        </div>
    </>
}

export default Signup