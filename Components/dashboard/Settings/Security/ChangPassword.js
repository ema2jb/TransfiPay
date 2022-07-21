import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import classes from '../Settings.module.scss'

const ChangePassword = ({securityDetailsHandler, showHandler}) =>{

    const goBack = ()=>{
        securityDetailsHandler(false)
        showHandler('')
    }

    return <>
        <div className="border-bottom pb-3">
            <h1 className="fs-24 fw-500 primary-color">Change Password</h1>
        </div>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <div className={`mb-3 ${classes.tips}`}>
                    <p  className="fs-14 fw-600 secondary-color">
                    Your Password is your privacy,  you might want to perform. keep it safe
                    </p>
                </div>
                <div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Old Password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input type="text" placeholder='Enter Old Password' />
                            <AiFillEye />
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>New Password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input type="text" placeholder='Enter New Password' />
                            <AiFillEye />
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Confirm new password</label>
                        <div className={`space-between ${classes.input}`}>
                            <input type="text" placeholder='Re-Enter New Password' />
                            <AiFillEye />
                        </div>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button onClick={()=>goBack()}  className='btn-transparent'>Back to previous page</button>
                        </div>
                        <div>
                            <button  className='btn-default'>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ChangePassword