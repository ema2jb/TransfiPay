import classes from './PaymentInterface.module.scss'

const Step2 = ({currentStepHandler}) =>{
    return <>
        <div>
        <div>
            <p className={`mb-3 secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 of 2</span></p>
            <div className=" mb-3">
                <div>
                    <h1 className="fw-600 fs-20 primary-color">Contact Details</h1>
                    <p className="fw-400 fs-16 secondary-color">Please provide your full name and email to receive payment notifications.</p>
                </div>
            </div>
            <hr  className='mt-4 mb-4'></hr>
            <div className="mt-4">
                <p className="mb-2 fs-16 fw-400 tetiary-color">Email Address</p>
                <div className={`mb-4 ${classes.input}`}>
                    <input className="fs-16 fw-400" type="text" placeholder="name@example.com" />
                </div>
            </div>
            <div className="mt-4">
                <p className="mb-2 fs-16 fw-400 tetiary-color">Phone number</p>
                <div className={`mb-4 ${classes.input}`}>
                    <input className="fs-16 fw-400" type="text" placeholder="081055446677" />
                </div>
            </div> 
            <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>currentStepHandler('')} className="btn-transparent">Go back</button>
                    </div>
                    <div>
                        <button onClick={()=>currentStepHandler('step3')} className='btn-default'>Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Step2