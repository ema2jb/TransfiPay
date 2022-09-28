import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineCloudUpload} from  'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import {BsChevronRight} from 'react-icons/bs'

import classes from '../Settings.module.scss'
import TierModal from './TierModal'
import { bizActions } from '../../../../Store/biz-slice'
import { updateBizInfoFunc, updateBizLogoFunc } from '../../../../requests/bizRequests'




const BuisnessInformation = ({tierHandler, showBizInfoTiersHandler})=>{

    const [showModal, setShowModal] = useState(false)
    const {updateBizInfo, bizRequestState} = useSelector(state=>state.biz)
    const [avatar, setAvatar] = useState({ preview:updateBizInfo.imageUrl, raw: null });

    const dispatch = useDispatch()

    const handleShowModal = (value) =>{
        setShowModal(value)
    }



    const handleChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		if (file.size > 12000000) {
			cogoToast.error('Please upload an image less than 10MB');
			return;
		}
		avatar.raw && URL.revokeObjectURL(avatar.raw);
		let preview = URL.createObjectURL(file);
		setAvatar({
			preview,
			raw: e.target.files[0],
		});
        updateBizLogoFunc(dispatch, bizActions, updateBizInfo.id, e.target.files[0])
	};

    const handleWhoPays = (name)=>{
        console.log(name)
       if(name==="ownerPaysTransactionCharge"){
            dispatch(bizActions.setUpdateBizInfo({ownerPaysTransactionCharge:true, customerPaysTransactionCharge:false}))
       } else if(name==="customerPaysTransactionCharge"){
        dispatch(bizActions.setUpdateBizInfo({ownerPaysTransactionCharge:false, customerPaysTransactionCharge:true}))
       }
    }

    const handleSubmit = ()=>{
        updateBizInfoFunc(dispatch, bizActions, updateBizInfo)
    }

    return <>
        <div className={`centralize-top-10 mt-5 ${classes.bizInfo}`}>
            <div className="pr-4 w-50">
                <p className={`fs-14 fw-400 secondary-color ${classes.kycStatus}`}>KYC status: 
                <span 
                    onClick={()=>setShowModal(true)} 
                    className={`cp fw-600 fs-14 secondary-color ${classes['complete-kyc']}`}>
                        {updateBizInfo.tierVerification !== "null" ?updateBizInfo.tierVerification:"Complete KYC"}
                </span>
                </p>
                <div className={`mt-3 w-100 ${classes['form-wrapper']}`}>
                    <div className={` ${classes.form}`}>
                        <div className={`mb-3 mt-3`}>
                            <label className='fs-16 fw-500 tertiary-color'>Business name</label>
                            <div className={`mb-0 ${updateBizInfo.role !=="owner" && 'bckg2'}  ${classes.input}`}>
                                <input 
                                    value={updateBizInfo.name}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({name:value}))}
                                    className="w-100" 
                                    type="text" 
                                    placeholder='Enter as written on official documents' />
                            </div>
                            <p className="fs-12 fw-500 text-color-3">STORE URL: <span className="text-color-6 fs-16 fw-400">https://transfi-business-A</span></p>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Email Address</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input 
                                    value={updateBizInfo.email}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" &&       dispatch(bizActions.setUpdateBizInfo({email:value}))}
                                    type="email" 
                                    placeholder='name@example.com' 
                                />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Phone number</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input 
                                    value={updateBizInfo.phoneNumber}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({phoneNumber:value}))}
                                    type="text" 
                                    placeholder='+234 -----' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Country</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input 
                                    value={updateBizInfo.country}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({country:value}))}
                                    type="text" 
                                    placeholder='Select a country' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Business Address</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input 
                                    className="w-100"
                                    value={updateBizInfo.address}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({address:value}))}
                                    type="text" 
                                    placeholder='Enter a business Address' />
                            </div>
                        </div> 
                        <div className="mt-4">
                            <p className="fs-16 fw-500 mb-2 tertiary-color">Business Description</p>
                            <textarea 
                            className={`${updateBizInfo.role !=="owner" && 'bckg2'}`}
                            value={updateBizInfo.description}
                            onChange={({target:{value}})=> updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({description:value}))}
                            placeholder="Tell us more about your business" 
                            rows="5" 
                            cols="45" />
                        </div>
                        <div className="mt-5 mb-4">
                            <p className='fs-16 fw-600 tertiary-color'>Social Media Links <span className="secondary-color">(Optional)</span></p>
                            <p className="fs-14 fw-400 secondary-color">If provided, the links will appear on your business profile</p>
                        </div>
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Instagram</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input
                                    value={updateBizInfo.instagram}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({instagram:value}))}
                                    type="text" placeholder='@' />
                            </div>
                        </div> 
                        <div className='mt-4 mb-4'>
                            <label className='fs-16 fw-500 tertiary-color'>Facebook</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input
                                    value={updateBizInfo.facebook}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({facebook:value}))} 
                                    type="text" placeholder='@' />
                            </div>
                        </div> 
                        <div className=''>
                            <label className='fs-16 fw-500 tertiary-color'>Twitter</label>
                            <div className={`${updateBizInfo.role !=="owner" && 'bckg2'} ${classes.input}`}>
                                <input 
                                    value={updateBizInfo.twitter}
                                    onChange={({target:{value}})=>updateBizInfo.role==="owner" && dispatch(bizActions.setUpdateBizInfo({twitter:value}))}
                                    type="text" placeholder='@' />
                            </div>
                        </div>
                        {
                            updateBizInfo.role === 'owner' && 
                            <>
                            <div className="mt-5 mb-4">
                                <p className='fs-16 fw-600 tertiary-color'>Other Store Details</p>
                                <p className="fs-14 fw-600 tertiary-color">Transaction charge: <span className="secondary-color">Chose who pays the transaction charge</span></p>
                            </div>
                            <div>
                                <input 
                                checked={updateBizInfo.ownerPaysTransactionCharge}
                                onClick={()=>handleWhoPays('ownerPaysTransactionCharge')}
                                type="radio" 
                                name="transaction"
                                /><span className='fs-14 mx-2 fw-400 secondary-color'>Business Owner</span>
                            </div>
                            <div>
                                <input 
                                    checked={updateBizInfo.customerPaysTransactionCharge}
                                    onClick={()=>handleWhoPays('customerPaysTransactionCharge')}
                                    type="radio"
                                    name="transaction" 
                                    /><span className="fs-14 mx-2 fw-400 secondary-color">Customer</span>
                            </div>
                            <div className='mt-3 mb-2'>
                                <div>
                                    <button disabled={bizRequestState.loading} onClick={handleSubmit}  className='btn-default  w-100'>{bizRequestState.loading ? "Loading":"Save Changes"}</button>
                                </div>
                            </div>
                        </>
                        }
                       
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
                        <label className="cp" htmlFor="upload-button">
                            {
                                !avatar.preview && 
                                    <div className="bckg2 p-2">
                                    <i ><AiOutlineCloudUpload /></i>
                                    <p className="fs-18 fw-400">Image should have a size limit of 5MB</p>
                            </div>
                            }
                            {
                                avatar.preview &&  
                                    <div className={classes.image}>
                                        <img src={avatar.preview ? avatar.preview : "/dashboard/productImage.png"} alt="image" />
                                        <i className="centralize"><BiTrash /></i>
                                    </div>
                            }
                        </label>
                        <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className={`px-3 mt-3  ${classes['user-role']}`}>
                    <div>
                        <p className="fw-400 fs-16 secondary-color">Account Role</p>
                        <p className="fw-600 fs-16 tertiary-color">{updateBizInfo.role}</p>
                        {updateBizInfo.role === 'owner' && <p className="text-color-1 fs-16 fw-500 mt-4">Manage Permissions <BsChevronRight /></p>}
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