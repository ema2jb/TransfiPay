import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateUserInfoFunc, getUserDetailsFunc } from '../../../requests/userRequests'
import { userActions } from '../../../Store/user-slice'

import classes from './Settings.module.scss'


const PersonalInformation = ()=>{

    const {userDetails, userRequestState} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const loading = userRequestState.loading
    console.log(userDetails)

    useEffect(()=>{
        getUserDetailsFunc(dispatch, userActions)
    }, [])

    const submitHandler =(e)=>{
        e.preventDefault()
        updateUserInfoFunc(dispatch, userActions, userDetails)
    }

    return <>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <form onSubmit={submitHandler}>
                    <div className="centralize-10">
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Fist Name</label>
                            <div className={classes.input}>
                                <input 
                                    value={userDetails.firstName}
                                    onChange={({target:{value}})=>dispatch(userActions.setUserDetails({firstName:value}))}
                                    className="w-100 fs-16 fw-400 secondary-color" 
                                    type="text" 
                                    placeholder='first name' 
                                />
                            </div>
                        </div>
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Last Name</label>
                            <div className={classes.input}>
                                <input 
                                    value={userDetails.lastName}
                                    onChange={({target:{value}})=>dispatch(userActions.setUserDetails({lastName:value}))}
                                    className="w-100 fs-16 fw-400 secondary-color" 
                                    type="text" 
                                    placeholder='last name' 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="centralize-10">
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Email Address</label>
                            <div className={classes.input}>
                                <input 
                                    value={userDetails.email?userActions.email:null}
                                    onChange={({target:{value}})=>dispatch(userActions.setUserDetails({email:value}))}
                                    className="w-100 fs-16 fw-400 secondary-color" 
                                    type="email" 
                                    placeholder='name@example.com' 
                                />
                            </div>
                        </div>
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Country</label>
                            <div className={classes.input}>
                                <input 
                                    value={userDetails.country}
                                    onChange={({target:{value}})=>dispatch(userActions.setUserDetails({country:value}))}
                                    className="w-100 fs-16 fw-400 secondary-color" 
                                    type="text" 
                                    placeholder='Country' 
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 mb-2'>
                        <div>
                            <button disabled={loading}  className='btn-default px-4'>{loading?"loading":"Update Details"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default PersonalInformation