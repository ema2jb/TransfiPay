import {HiOutlineKey, HiOutlineLockClosed, HiOutlineClock, HiOutlineShieldCheck, HiOutlineLogout} from 'react-icons/hi'

import classes from '../Settings.module.scss'

const Security = ({securityDetailsHandler, showHandler}) =>{


    const changeHandler = (value)=>{
        securityDetailsHandler(true)
        showHandler(value)
    }

    return <>
        <div className={classes['security-index']}>
            <div className="space-between">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineKey /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Login Password</p>
                        <p className="fs-16 fw-400 secondary-color">Password is used to access your account.</p>
                    </div>
                </div>
                <p onClick={()=>changeHandler('changePassword')} className='fs-16 fw-600 text-color-2 cp'>Change</p>
            </div>
            <hr></hr>
            <div className="space-between">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineLockClosed /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Athentication Pin</p>
                        <p className="fs-16 fw-400 secondary-color">Pin used to authenticate some transactions for extra security.</p>
                    </div>
                </div>
                <p onClick={()=>changeHandler('changePin')} className='fs-16 fw-600 text-color-2 cp'>Change</p>
            </div>
            <hr></hr>
            <div className="space-between">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineShieldCheck /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">2FA Settings</p>
                        <p className="fs-16 fw-400 secondary-color">Add an extra layer of security to your account.</p>
                    </div>
                </div>
                <p onClick={()=>changeHandler('2FA')}  className='fs-16 fw-600 text-color-2 cp'>Set-up 2FA</p>
            </div>
            <hr></hr>
            <div className="space-between mb-5">
                <div className="centralize-top-10 mt-3">
                    <i className="fs-18 fw-500 tertiary-color"><HiOutlineClock /></i>
                    <div>
                        <p className="fs-18 fw-500 tertiary-color">Account Activity</p>
                        <p className="fs-16 fw-400 secondary-color">Last login: 2022-04-20 09:55:41</p>
                        <p className="fs-16 fw-400 secondary-color">Suspicious activity?  <span classsName="primary-color" style={{textDecoration:"underline"}}>Contact support</span></p>
                    </div>
                </div>
                <div>
                    <button  className='btn-default'><span><HiOutlineLogout /></span>Logout</button>
                </div>
            </div>
        </div>
    </>
} 

export default Security