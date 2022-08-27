import classes from '../Settings.module.scss'
import Modal from '../../Modals'


const PhoneNumber2FA = ({twoFactorAuthHandler}) =>{
    return <>
        <Modal hideModal={()=>twoFactorAuthHandler('')}>
            <div className="mx-3">
                <div className={`mb-3 mt-3 ${classes.tips}`}>
                    <h1 className="fs-20 fw-600 primary-color">2FA Tips:</h1>
                    <p className="fs-14 fw-600 secondary-color">
                            kindly check your message boss for the code you requested for
                    </p>
                </div>
                <div className={classes['form-group']}>
                    <label className='fs-16 fw-500 text-color-3'>Phone number</label>
                    <div className={` ${classes.input}`}>
                        <input className="fs-16 fw-400 secondary-color" type="text" placeholder='+234-' />
                    </div>
                </div>
                <div className={classes['form-group']}>
                    <label className='fs-16 fw-500 text-color-3'>Phone Number Verification Code</label>
                    <div className={`space-between ${classes.input}`}>
                        <input className="fs-16 fw-400 secondary-color" type="text" placeholder='Enter verification code' />
                        <p className="fs-16 fw-500 text-color-2">Request Code</p>
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>twoFactorAuthHandler('')} className='btn-transparent'>Cancel</button>
                    </div>
                    <div>
                        <button  className='btn-default'>Enable 2FA</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default PhoneNumber2FA