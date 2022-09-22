import classes from '../Settings.module.scss'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineCloudUpload} from  'react-icons/ai'

const Tier1 = ()=>{

    return <>
        <div className={`${classes.bizInfo}`}>
            <h1 className="fs-24 fw-500 primary-color">TIER 1 Verification</h1>
            <p className="fs-16 fw-400 secondary-color">This tier give you a daily transaction limit of 1,200,000 naira</p>
            <hr></hr>
            <div>
                <p className="fs-16 fw-600 tertiary-color">UPLOAD DOCUMENTS</p>
                <p>Select  the type of document you want to upload. (supported file format-JPEG, JPG)</p>
                <div className="mt-4">
                    <input type="radio" name="id_card" />
                    <label className="px-2">National ID card</label>
                </div>
                <div className="">
                    <input type="radio" name="id_card" />
                    <label className="px-2">International passport</label>
                </div>
            </div>
            <div className='d-flex w-70 '>
                <div className={`mt-4 mb-5  ${classes['image-upload']}`}>
                    <div className={`p-2 ${classes['image-upload-border']}`}>
                        <div className={classes.image}>
                            <img src="/dashboard/productImage.png" alt="image" />
                            <i className="centralize"><BiTrash /></i>
                        </div>
                    </div>
                    <p className="secondary-color fs-16 text-center  mt-3  ">Front view of ID</p>
                </div>
                <div className={`mx-3 mt-4 mb-5 ${classes['image-upload']}`}>
                    <div className={`p-3 bckg2 h-100`}>
                        <div className={classes['image-upload-border']}>
                            <i ><AiOutlineCloudUpload /></i>
                            <p className="fs-18 fw-400">Image should have a size limit of 5MB</p>
                        </div>
                    </div>
                    <p className="secondary-color fs-16 text-center mt-3">Back view of ID</p>
                </div>
            </div>
        </div>
    </>
}

export default Tier1