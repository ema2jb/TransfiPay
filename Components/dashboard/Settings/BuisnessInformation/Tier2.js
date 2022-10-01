import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { uploadProofOfAddressFunc, tier2Func } from '../../../../requests/bizRequests';
import classes from '../Settings.module.scss'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineCloudUpload} from  'react-icons/ai'
import { bizActions } from '../../../../Store/biz-slice'

const Tier2 = ()=>{
    const {updateBizInfo, bizRequestState} = useSelector(state=>state.biz)

    const [taxNumber,setTaxNumber] = useState({taxIdentificationNumber:""})

    const [avatar, setAvatar] = useState({ preview:null, raw: null });

    const dispatch = useDispatch()

    const handleChangeAvatar = (e) => {
		const file = e.target.files[0];
        console.log(e.target.files[0])
		if (!file) return;
		if (file.size > 12000000) {
			cogoToast.error('Please upload an image less than 10MB');
			return;
		}
		avatar.raw && URL.revokeObjectURL(avatar.raw);
		let preview = URL.createObjectURL(file);
		setAvatar({
            preview,
            raw: e.target.files[0]
        })
        uploadProofOfAddressFunc(dispatch, bizActions, updateBizInfo.id,  e.target.files[0])
	};

    const handleSubmit = ()=>{
        if(taxNumber.taxIdentificationNumber){
            tier2Func(dispatch, bizActions, updateBizInfo.id, taxNumber)
        }
    }

    return <>
        <div className={classes.bizInfo}>
            <h1 className="fs-24 fw-500 primary-color">TIER 2 Verification</h1>
            <p className="fs-16 fw-400 secondary-color">This tier give you a daily transaction limit of 1,200,000 naira</p>
            <hr></hr>
            <div>
                <p className="fs-16 fw-600 tertiary-color">UPLOAD DOCUMENTS</p>
                <p>Upload proof of business address ( e.g. copy of your utility bill) .</p>
            </div>
            <div className={`mt-3 w-30 ${classes['image-upload']}`}>
                <div className={`p-2 w-100 ${classes['image-upload-border']}`}>
                    <label   className="cp w-100" htmlFor="file">
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
                    <input type="file" id="file" style={{ display: 'none' }} onChange={(event)=>handleChangeAvatar(event)} />
                </div>
                <p className="mt-2">Supported file format-JPEG, JPG</p>
            </div>
            <div className="mt-4">
                <label>Tax Identification Number(TIN)</label>
                <div className={`w-50 ${classes.input}`}>
                    <input 
                        value={taxNumber.taxIdentificationNumber} 
                        onChange={({target:{value}})=>setTaxNumber({taxIdentificationNumber:value})} 
                        type="number" 
                        placeholder='1234567890'
                        className="w-100"
                    />
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
                    <button 
                        disabled={bizRequestState.loading}
                        onClick={()=>handleSubmit()} 
                        className='btn-default'>Save details</button>
                </div>
            </div>
        </div>
    </>
}

export default Tier2