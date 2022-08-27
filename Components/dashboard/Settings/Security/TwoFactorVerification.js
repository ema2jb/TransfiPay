import {useState} from 'react'
import {HiOutlineMail, HiOutlineShieldCheck, HiOutlinePhone} from 'react-icons/hi'

import classes from '../Settings.module.scss'
import Email2FA from './Email2FA'
import PhoneNumber2FA from './PhoneNumber2FA'

const TwoFactorVerification = ({securityDetailsHandler, showHandler}) =>{

    const [twoFactorAuth, setTwoFactorAuth] = useState('')
    const [enable, setEnable] = useState({
        google:false,
        email:false,
        phone:false
    })

    const twoFactorAuthHandler = (value)=>{
        setTwoFactorAuth(value)
    }

    const handleToggleButton = (name)=>{
        setEnable(prev=>({...prev, [name]:!prev[name]}))
    }


    return <>
        <div className="border-bottom pb-3">
            <h1 className="fs-24 fw-500 primary-color">Set-up your 2FA</h1>
        </div>
        <div className={classes['security-index']}>
            <div className="space-between">
                <div className="centralize-top-10 mt-3">
                    <div className={`centralize ${classes.icons}`}>
                        <i className="fs-18 fw-500 primary-color"><HiOutlineShieldCheck /></i>
                    </div>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Google Authenticator</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <div className="centralize-10">
                <p  className='fs-16 fw-600 text-color-2 cp'>Enable</p>
                <p 
                    style={{background:`${enable.google ? '#023E8A' : '#E5E7EB'}`}} 
                    className={classes.toggleButton}>
                    <span 
                        style={{right:`${enable.google ? '0' : ''}`}}   
                        onClick={()=>handleToggleButton('google')}>
                    </span></p>
                </div>
            </div>
            <hr></hr>
            <div className="space-between ">
                <div className="centralize-top-10 mt-3">
                <div className={`centralize ${classes.icons}`}>
                        <i className="fs-18 fw-500 primary-color"><HiOutlineMail /></i>
                    </div>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Email Address Authentication</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <div className="centralize-10">
                    <p onClick={()=>setTwoFactorAuth('email')}  className='fs-16 fw-600 text-color-2 cp'>Enable</p>
                    <p style={{background:`${enable.email ? '#023E8A' : '#E5E7EB'}`}} 
                        className={classes.toggleButton}>
                        <span 
                            style={{right:`${enable.email ? '0' : ''}`}}   
                            onClick={()=>handleToggleButton('email')}>
                        </span>
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="space-between mb-5">
                <div className="centralize-top-10 mt-3">
                <div className={`centralize ${classes.icons}`}>
                        <i className="fs-18 fw-500 primary-color"><HiOutlinePhone /></i>
                    </div>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Phone number authentication</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <div className="centralize-10">
                    <p onClick={()=>setTwoFactorAuth('phoneNumber')} className='fs-16 fw-600 text-color-2 cp'>Enable</p>
                    <p style={{background:`${enable.phone ? '#023E8A' : '#E5E7EB'}`}} 
                        className={classes.toggleButton}>
                        <span 
                            style={{right:`${enable.phone ? '0' : ''}`}}   
                            onClick={()=>handleToggleButton('phone')}>
                        </span>
                    </p>
                </div>
            </div>
        </div>


        <div className={twoFactorAuth !== 'email' && 'd-none'}>
                <Email2FA twoFactorAuthHandler={twoFactorAuthHandler} />
        </div>
        <div className={twoFactorAuth !== 'phoneNumber' && 'd-none'}>
                <PhoneNumber2FA twoFactorAuthHandler={twoFactorAuthHandler} />
        </div>
    </>
} 

export default TwoFactorVerification