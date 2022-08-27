import {AiOutlineCloudUpload} from  'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'

import classes from '../Settings.module.scss'



const BuisnessInformation = ()=>{


    return <>
        <div className={`centralize-top-10 mt-5 ${classes.bizInfo}`}>
            <div className="pr-4 w-50">
                <p className={`fs-14 fw-400 secondary-color ${classes.kycStatus}`}>KYC status: <span className={`fw-600 fs-14 text-is-white ${classes.tier}`}>Tier 1</span></p>
                <div className={`mt-3 w-100 ${classes['form-wrapper']}`}>
                    <div className={` ${classes.form}`}>
                        <div className={`mb-3 mt-3`}>
                            <label className='fs-16 fw-500 tertiary-color'>Business name</label>
                            <div className={`mb-0 bckg2 ${classes.input}`}>
                                <input className="w-100" type="text" placeholder='Enter as written on official documents' />
                            </div>
                            <p className="fs-12 fw-500 text-color-3">STORE URL: <span className="text-color-6 fs-16 fw-400">https://transfi-business-A</span></p>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Email Address</label>
                            <div className={`bckg2 ${classes.input}`}>
                                <input type="text" placeholder='name@example.com' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Phone number</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='+234 -----' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Country</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='Select a country' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Business Address</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='Enter a business Address' />
                            </div>
                        </div> 
                        <div className='mt-3 mb-2'>
                        <div>
                            <button  className='btn-update w-100'>Save Changes</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="pl-4 w-50">
                <div>
                    <p className="fs-16 fw-700 tertiary-color">Buisness Logo</p>
                    <p className="fs-16 fw-500 secondary-color">Image must be in PNG format with a file size of 5 MB</p>
                </div>
                <div>
                    <div className={`p-3 mt-4 bckg2 ${classes['image-upload']}`}>
                        <div className={`p-2 ${classes['image-upload-border']}`}>
                            <i ><AiOutlineCloudUpload /></i>
                            <p className="fs-18 fw-400">Image should have a size limit of 5MB</p>
                        </div>
                    </div>
                </div>
                <div className={`px-3 mt-4  ${classes['user-role']}`}>
                    <div>
                        <p className="fw-400 fs-16 secondary-color">Account Role</p>
                        <p className="fw-600 fs-16 tertiary-color">Sales Manager</p>
                    </div>
                    <div>
                        <i><HiOutlineUser /></i>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BuisnessInformation