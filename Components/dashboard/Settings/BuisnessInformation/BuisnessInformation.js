import {useState} from 'react'


import {HiOutlineUsers} from 'react-icons/hi'
import {AiFillCheckSquare} from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import {BsChevronRight} from 'react-icons/bs'

import classes from '../Settings.module.scss'
import TierModal from './TierModal'



const BuisnessInformation = ({tierHandler, showBizInfoTiersHandler})=>{

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (value) =>{
        setShowModal(value)
    }


    return <>
        <div className={`centralize-top-10 mt-5 ${classes.bizInfo}`}>
            <div className="pr-4 w-50">
                <p className={`fs-14 fw-400 secondary-color ${classes.kycStatus}`}>KYC status: 
                <span onClick={()=>setShowModal(true)} className={`cp fw-600 fs-14 secondary-color ${classes['complete-kyc']}`}>Complete KYC</span></p>
                <div className={`mt-3 w-100 ${classes['form-wrapper']}`}>
                    <div className={` ${classes.form}`}>
                        <div className={`mb-3 mt-3`}>
                            <label className='fs-16 fw-500 tertiary-color'>Business name</label>
                            <div className={`mb-0  ${classes.input}`}>
                                <input className="w-100" type="text" placeholder='Enter as written on official documents' />
                            </div>
                            <p className="fs-12 fw-500 text-color-3">STORE URL: <span className="text-color-6 fs-16 fw-400">https://transfi-business-A</span></p>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Email Address</label>
                            <div className={` ${classes.input}`}>
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
                        <div className="mt-5 mb-4">
                            <p className='fs-16 fw-600 tertiary-color'>Social Media Links <span className="secondary-color">(Optional)</span></p>
                            <p className="fs-14 fw-400 secondary-color">If provided, the links will appear on your business profile</p>
                        </div>
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Instagram</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='@' />
                            </div>
                        </div> 
                        <div className='mt-4 mb-4'>
                            <label className='fs-16 fw-500 tertiary-color'>Facebook</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='@' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Twitter</label>
                            <div className={classes.input}>
                                <input type="text" placeholder='@' />
                            </div>
                        </div>
                        <div className="mt-5 mb-4">
                            <p className='fs-16 fw-600 tertiary-color'>Other Store Details</p>
                            <p className="fs-14 fw-600 tertiary-color">Transaction charge: <span className="secondary-color">Chose who pays the transaction charge</span></p>
                        </div>
                        <div>
                            <p className="fs-18 "><AiFillCheckSquare /> <span className="fs-14 fw-400 secondary-color ">Me ( Business Owner )</span></p>
                            <p className="fs-18 "><AiFillCheckSquare  /> <span className="fs-14 fw-400 secondary-color">Customer</span></p>
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
                    <div className={`mt-3 ${classes['image-upload']}`}>
                        <div className={`p-2 ${classes['image-upload-border']}`}>
                            <div className={classes.image}>
                                <img src="/dashboard/productImage.png" alt="image" />
                                <i className="centralize"><BiTrash /></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`px-3 mt-3  ${classes['user-role']}`}>
                    <div>
                        <p className="fw-400 fs-16 secondary-color">Account Role</p>
                        <p className="fw-600 fs-16 tertiary-color">Buisness Owner</p>

                        <p className="text-color-1 fs-16 fw-500 mt-4">Manage Permissions <BsChevronRight /></p>
                    </div>
                    <div>
                        <i><HiOutlineUsers /></i>
                    </div>
                </div>
            </div>
        </div>
        <div className={!showModal && 'd-none' }>
            <TierModal tierHandler={tierHandler} showBizInfoTiersHandler={showBizInfoTiersHandler} handleShowModal={handleShowModal} />
        </div>
    </>
}

export default BuisnessInformation