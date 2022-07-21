import classes from './PaymentInterface.module.scss'
import {HiOutlineClock, HiOutlineDocumentDuplicate} from 'react-icons/hi'

const FinalStep = ({currentStepHandler}) =>{
    return <>
        <div>
        <div>
            <div className=" mb-3 space-between">
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Here’s your link to make payments</h1>
                        <p className="fw-400 fs-16 secondary-color">Scan QR Code or send to the receiving address</p>
                    </div>
                    <div>
                        <p className="fw-400 fs-16 secondary-color">Amount to pay</p>
                        <p className="fw-700 fs-20 text-color-1">350.00 USD</p>
                    </div>
            </div>
            <hr  className='mt-4 mb-4'></hr>
            <div className={classes.barcode}>
                <div className={classes.image}>
                    <img src="/dashboard/Qrcode.png" alt="Qrcode"  />
                </div>
                <div className={classes.countdown}>
                    <div >
                        <i className="fs-36 fw-600 tertiary-color"> <HiOutlineClock /> </i>
                        <p className='fs-16 fw-400 secondary-color'> Make payments within </p>
                        <p className="fs-24 fw-600 tertiary-color"> 04:27 </p>
                    </div>
                </div>
            </div>
            <div className={`mb-3 mt-4`}>
                <label className="fs-16 fw-500 secondary-color"> Address </label>
                <div className={`space-between w-100 bckg4 br-8 p-3`}> 
                    <input className="w-100 tetiary-color fs-20 fw-500" type="text" value="ngvcTu5hy57hgN.......wKw9889" />
                    <i><HiOutlineDocumentDuplicate  /></i>
                </div>
            </div>
            <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>currentStepHandler('')} className="btn-transparent">Go back</button>
                    </div>
                    <div>
                        <button className='btn-default'>Make Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default FinalStep