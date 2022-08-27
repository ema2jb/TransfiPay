import classes from '../Settings.module.scss'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineCloudUpload} from  'react-icons/ai'

const Tier2 = ()=>{

    return <>
        <div className={classes.bizInfo}>
            <h1 className="fs-24 fw-500 primary-color">TIER 2 Verification</h1>
            <p className="fs-16 fw-400 secondary-color">This tier give you a daily transaction limit of 1,200,000 naira</p>
            <hr></hr>
            <div>
                <p className="fs-16 fw-600 tertiary-color">UPLOAD DOCUMENTS</p>
                <p>Upload proof of business address ( e.g. copy of your utility bill) .</p>
            </div>
            <div className='w-50'>
                <div className={`mt-4 ${classes['image-upload']}`}>
                    <div className={`p-2 ${classes['image-upload-border']}`}>
                        <div className={classes.image}>
                            <img src="/dashboard/productImage.png" alt="image" />
                            <i className="centralize"><BiTrash /></i>
                        </div>
                    </div>
                    <p>Supported file format-JPEG, JPG</p>
                </div>
            </div>
            <div className="mt-4">
                <label>Tax Identification Number(TIN)</label>
                <div className={`w-50 ${classes.input}`}>
                    <input type="text" placeholder='name@example.com'/>
                </div>
            </div>
            <div>
                <div className="mt-2">
                    <input type="radio" />
                    <label className="px-2">I’ve applied for a TIN but I’m yet to receive it.</label>
                </div>
            </div>
            <div className='w-50 mt-2 mb-2'>
                <div className="justify-right">
                    <button onClick={()=>handleCurrentStep('withdraw-fiat-step3')} className='btn-default'>Save details</button>
                </div>
            </div>
        </div>
    </>
}

export default Tier2