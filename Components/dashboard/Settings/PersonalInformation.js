import classes from './Settings.module.scss'


const PersonalInformation = ()=>{
    return <>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <form>
                    <div className="centralize-10">
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Fist Name</label>
                            <div className={classes.input}>
                                <input className="w-100" type="text" placeholder='first name' />
                            </div>
                        </div>
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Last Name</label>
                            <div className={classes.input}>
                                <input className="w-100" type="text" placeholder='last name' />
                            </div>
                        </div>
                    </div>
                    <div className="centralize-10">
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Email Address</label>
                            <div className={classes.input}>
                                <input className="w-100" type="email" placeholder='name@example.com' />
                            </div>
                        </div>
                        <div className={`w-50 ${classes['form-group']}`}>
                            <label className='fs-16 fw-500 text-color-3'>Country</label>
                            <div className={classes.input}>
                                <input className="w-100 fs-16 fw-400 secondary-color" type="text" placeholder='Country' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 mb-2'>
                        <div>
                            <button  className='btn-update'>Update Details</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default PersonalInformation