import {HiOutlineMail, HiOutlineShieldCheck, HiOutlinePhone} from 'react-icons/hi'

import classes from '../Settings.module.scss'

const TwoFactorVerification = ({securityDetailsHandler, showHandler}) =>{


    return <>
        <div className="border-bottom pb-3">
            <h1 className="fs-24 fw-500 primary-color">Change Pin</h1>
        </div>
        <div className={classes['security-index']}>
            <div className="space-between">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineShieldCheck /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Google Authenticator</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <p  className='fs-16 fw-600 text-color-2 cp'>Enable</p>
            </div>
            <hr></hr>
            <div className="space-between ">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineMail /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Email Address Authentication</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <p  className='fs-16 fw-600 text-color-2 cp'>Enable</p>
            </div>
            <hr></hr>
            <div className="space-between mb-5">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlinePhone /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Phone number authentication</p>
                        <p className="fs-16 fw-400 secondary-color">Protect your account and transactions.</p>
                    </div>
                </div>
                <p className='fs-16 fw-600 text-color-2 cp'>Enable</p>
            </div>
        </div>
    </>
} 

export default TwoFactorVerification