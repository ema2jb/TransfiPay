import classes from './Settings.module.scss'


const PersonalInformation = ()=>{
    return <>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <form>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Full Name</label>
                        <div className={classes.input}>
                            <input type="text" placeholder='first name, last name' />
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Email Address</label>
                        <div className={classes.input}>
                            <input type="text" placeholder='name@example.com' />
                        </div>
                    </div>
                    <div className={classes['form-group']}>
                        <label className='fs-16 fw-500 text-color-3'>Phone number</label>
                        <div className={classes.input}>
                            <input className="fs-16 fw-400 secondary-color" type="text" placeholder='Khalid' />
                        </div>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
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