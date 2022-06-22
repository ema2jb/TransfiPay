import {useState} from 'react'

import { AiFillEyeInvisible } from "react-icons/ai";
import {AiFillEye} from "react-icons/ai"


const Login = ({signupHandler})=>{

    const [seePassword, setSeePassword] = useState(false)

    const seePasswordHandler = ()=>{
        setSeePassword(prev=>!prev)
    }

    return<>
        <div 
        className="login">
            <h1>Login into Account</h1>
            <form>
                <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter email address"/>
                </div>
                <div className="form-group">
                    <label>Password *</label>
                    <div className="password">
                        <input type={seePassword?"text":"password"} placeholder="Enter password"/>
                        <span 
                        onClick={()=>seePasswordHandler()}>{seePassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                    </div>
                </div>
                <div>
                    <button type="submit">
                        Login into Account
                    </button>
                    <p>Don't have an account? <span onClick={signupHandler}>Sign up</span></p>
                </div>
            </form>
        </div>
    </>
}

export default Login