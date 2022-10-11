import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import classes from '../Settings.module.scss'
import Modal from '../../Modals'
import { changePasswordFunc } from '../../../../requests/userRequests'
import { userActions } from '../../../../Store/user-slice'

const ChangePassword = ({securityDetailsHandler, showHandler}) =>{

    const goBack = ()=>{
        securityDetailsHandler(false)
        showHandler('')
    }
    const dispatch = useDispatch()
    const { userRequestState} = useSelector(state=>state.user)
    const loading = userRequestState.loading
    const [seePassword, setSeePassword] = useState(
        {
            old:false,
            new:false,
            confirm:false
        }
    )

    const [passwordDetails,setPasswordDetails] = useState({
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
    })

    const submitHandler=()=>{
        changePasswordFunc(dispatch, userActions, passwordDetails, goBack)
    }

    return <>
        <Modal hideModal={()=>showHandler('')} >
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <div className={`mb-3 bckg5 ${classes.tips}`}>
                    <h1 className="fs-18 fw-600 text-color-7">Change Password</h1>
                    <p  className="fs-14 fw-600 text-color-7">
                        Your Password is your privacy,  you might want to perform. keep it safe
                    </p>
                </div>
                <div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Old Password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input 
                                value={passwordDetails.oldPassword}
                                onChange={({target:{value}})=>setPasswordDetails(prev=>({...prev, oldPassword:value}))}
                                type={seePassword.old?"text":"password"} 
                                placeholder='Enter Old Password' />
                            <span className="cp" onClick={()=>setSeePassword(prev=>({...prev, old:!prev.old}))}>{seePassword.old ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>New Password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input 
                                value={passwordDetails.newPassword}
                                onChange={({target:{value}})=>setPasswordDetails(prev=>({...prev, newPassword:value}))}
                                type={seePassword.new?"text":"password"} 
                                placeholder='Enter New Password' 
                            />
                            <span className="cp" onClick={()=>setSeePassword(prev=>({...prev, new:!prev.new}))}>{seePassword.new ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Confirm new password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input 
                                value={passwordDetails.confirmPassword}
                                onChange={({target:{value}})=>setPasswordDetails(prev=>({...prev, confirmPassword:value}))}
                                type={seePassword.confirm?"text":"password"} 
                                placeholder='Re-Enter New Password' />
                            <span className="cp" onClick={()=>setSeePassword(prev=>({...prev, confirm:!prev.confirm}))}>{seePassword.confirm ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                        </div>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button onClick={()=>goBack()}  className='btn-transparent'>Back to previous page</button>
                        </div>
                        <div>
                            <button disabled={loading} onClick={()=>submitHandler()}  className='btn-default px-4'>{loading?"Loading":"change Password"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
    </>
}

export default ChangePassword