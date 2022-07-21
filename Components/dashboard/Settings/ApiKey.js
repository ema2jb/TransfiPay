import { useState } from 'react'

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {RiForbidLine} from 'react-icons/ri'
import {HiOutlineSelector} from 'react-icons/hi'
import Modal from '../Modals'


import classes from './Settings.module.scss'



const ApiKey = ({activeHeader})=>{

    const [newKey, setNewKey] = useState('hide')

    return <>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <div>
                    <div className={`mb-3 ${classes.tips}`}>
                        <p  className="fs-14 fw-600 secondary-color">
                            Creating an API private key provides access to  transfi services  
                            via a third-party site or application.
                        </p>
                        <p className="mt-4 fs-14 fw-600 secondary-color">Please <span className="success-color">complete KYC</span> before creating API.</p> 
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Your API secret key</label>
                        <div className={`space-between ${classes.input}`}>
                            <input className="fs-16 fw-400 secondary-color" type="text" value='************************' />
                            <AiFillEye />
                        </div>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button  className='btn-transparent'>API Documentation</button>
                        </div>
                        <div>
                            <button onClick={()=>setNewKey("show")}  className='btn-default'>Generate new secret key</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={newKey === 'hide' && activeHeader !== 'Ak' && 'd-none'}>
            <Modal hideModal={()=>setNewKey('hide')}>
                <div className="mx-3">
                    <div className={`mb-3 mt-3 ${classes.tips}`}>
                        <div className="centralize mb-2"><i className={classes.forbidline}><RiForbidLine /></i></div>
                        <h1 className="fs-20 fw-600 primary-color">Hold that thought !</h1>
                        <p  className="fs-14 fw-600 secondary-color">
                            This action will cause existing secret keys to expire. 
                            Update your existing website and servers with the new keys to continue transcations 
                        </p>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>How soon should your old keys expire?</label>
                        <div className={`space-between ${classes.input}`}>
                            <input className="fs-16 fw-400 secondary-color" type="text" placeholder='Select current API key expiriy time' />
                            <HiOutlineSelector />
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Enter your transfi account password to confirm</label>
                        <div className={`${classes.input}`}>
                            <input className="fs-16 fw-400 secondary-color" type="text" placeholder='Enter password' />
                        </div>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button onClick={()=>setNewKey('hide')} className='btn-transparent'>Cancel</button>
                        </div>
                        <div>
                            <button  className='btn-default'>Confirm Action</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    </>
}

export default ApiKey