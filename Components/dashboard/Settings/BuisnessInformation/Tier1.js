import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from '../Settings.module.scss'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineCloudUpload} from  'react-icons/ai'
import Select from 'react-select';
import cogoToast from 'cogo-toast';
import { uploadDocFrontFunc, uploadDocBackFunc, tier1Func } from '../../../../requests/bizRequests';
import { bizActions } from '../../../../Store/biz-slice'

const Tier1 = ()=>{

    const [tier1Data, setTier1Data] = useState({
        firstName:"",
        lastName:"",
        middleName:"",
        dateOfBirth:"",
        gender:"",
        address:"",
        phoneNumber:"",
        country:"",
        documentUploadType:"",
    })

    const dispatch = useDispatch()

    const {updateBizInfo, bizRequestState} = useSelector(state=>state.biz)
    console.log(bizRequestState.loading)

    const [selectedGender, setSelectedGender] = useState({value:"", label:""})
    const [avatar, setAvatar] = useState({
        image1:{ preview:null, raw: null },
        image2:{ preview:null, raw: null }
    });

    const genderOptions = [
		{ value: 'male', label: 'male' },
		{ value: 'female', label: 'female' },
	];

    const customStyles = {
		control: (provided, state) => ({
			...provided,
			color: '#6E7191',
            border: '1px solid #CBD5E1',
            'border-radius': '4px',
            'margin-bottom': '1.3rem'
		}),
	};

    const handleChangeAvatar = (e, image) => {
        console.log('why')
        if(Boolean(tier1Data.documentUploadType) === false){
            return
        }
		const file = e.target.files[0];
        console.log(e.target.files[0])
		if (!file) return;
		if (file.size > 12000000) {
			cogoToast.error('Please upload an image less than 10MB');
			return;
		}
		avatar.raw && URL.revokeObjectURL(avatar.raw);
		let preview = URL.createObjectURL(file);
		setAvatar(prev=>({...prev, [image]:{
			preview,
			raw: e.target.files[0],
        }
		}));
        if(image === 'image1'){
            uploadDocFrontFunc(dispatch, bizActions, updateBizInfo.id, tier1Data.documentUploadType, e.target.files[0])
        } 
        if(image==='image2'){
            uploadDocBackFunc(dispatch, bizActions, updateBizInfo.id, tier1Data.documentUploadType, e.target.files[0])
        }
	};

    const handleSubmit = ()=>{
        console.log(tier1Data)
        tier1Func(dispatch, bizActions, updateBizInfo.id, tier1Data)
    }

    const checkForDocumentType = ()=>{
        if(Boolean(tier1Data.documentUploadType) === false){
            cogoToast.error('please pick a document type', {position:"top-center"})
            return
        }
    }

    return <>
        <div className={`${classes.bizInfo}`}>
            <h1 className="fs-24 fw-500 primary-color">TIER 1 Verification</h1>
            <p className="fs-16 fw-400 secondary-color">This tier give you a daily transaction limit of 1,200,000 naira</p>
            <hr></hr>
            <div>
                <div className="centralize-10">
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Fist Name</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.firstName}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, firstName:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='first name' 
                            />
                        </div>
                    </div>
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Last Name</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.lastName}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, lastName:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='last name' 
                            />
                        </div>
                    </div>
                </div>
                <div className="centralize-10">
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Middle Name</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.middleName}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, middleName:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='middle name' 
                            />
                        </div>
                    </div>
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Gender</label>
                            <Select
                                onChange={(selectedOption) =>{
                                    setTier1Data(prev=>({...prev, gender:selectedOption.value}))
                                    setSelectedGender(selectedOption)
                                    }
                                }
                                value={selectedGender}
                                options={genderOptions}
                                styles={customStyles}
                            />
                    </div>
                </div>
                <div className="centralize-10">
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Date Of Birth</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.dateOfBirth}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, dateOfBirth:value}))}
                                className="w-100" 
                                type="date" 
                                placeholder='date of birth' 
                            />
                        </div>
                    </div>
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Phone Number</label>
                        <div className={classes.input}>
                            <input 
                                 value={tier1Data.phoneNumber}
                                 onChange={({target:{value}})=>setTier1Data(prev=>({...prev, phoneNumber:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='phone number' />
                        </div>
                    </div>
                </div>
                <div className="centralize-10">
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Country</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.country}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, country:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='country' />
                        </div>
                    </div>
                    <div className={`w-50 ${classes['form-group']}`}>
                        <label className='fs-16 fw-500 text-color-3'>Address</label>
                        <div className={classes.input}>
                            <input 
                                value={tier1Data.address}
                                onChange={({target:{value}})=>setTier1Data(prev=>({...prev, address:value}))}
                                className="w-100" 
                                type="text" 
                                placeholder='address' />
                        </div>
                    </div>
                </div>
                {
                    /*
                        <p className="fs-16 fw-600 tertiary-color">UPLOAD DOCUMENTS</p>
                    */
                }
                <p  className="mt-2">Select  the type of document you want to upload. (supported file format-JPEG, JPG)</p>
                <div className="mt-2">
                    <input 
                        onClick={()=>setTier1Data(prev=>({...prev, documentUploadType:'nic'}))}
                        type="radio" 
                        name="id_card" />
                    <label className="px-2">National ID card</label>
                </div>
                <div className="">
                    <input 
                        onClick={()=>setTier1Data(prev=>({...prev, documentUploadType:'passport'}))}
                        type="radio" 
                        name="id_card" 
                    />
                    <label className="px-2">International passport</label>
                </div>
                <div className="">
                    <input 
                        onClick={()=>setTier1Data(prev=>({...prev, documentUploadType:'cac'}))}
                        type="radio" 
                        name="id_card" 
                    />
                    <label className="px-2">Corporate affairs commission document</label>
                </div>
            </div>
            <div className='d-flex  '>
                <div className={`mt-3 w-30 ${classes['image-upload']}`}>
                    <div className={`p-2 ${classes['image-upload-border']}`}>
                        <label 
                            onClick={checkForDocumentType} 
                            className="cp" 
                            htmlFor={tier1Data.documentUploadType?"image1":null}
                        >
                            {
                                !avatar.image1.preview && 
                                    <div className="bckg2 p-2">
                                        <i ><AiOutlineCloudUpload /></i>
                                        <p className="fs-18 fw-400">Image should have a size limit of 5MB</p>
                                    </div>
                            }
                            {
                                avatar.image1.preview &&  
                                    <div className={classes.image}>
                                        <img src={avatar.image1.preview ? avatar.image1.preview : "/dashboard/productImage.png"} alt="image" />
                                        <i className="centralize"><BiTrash /></i>
                                    </div>
                            }
                        </label> 
                        <input  type="file" id="image1"  style={{ display: 'none' }} onChange={(event)=>handleChangeAvatar(event,'image1')} />
                    </div>
                </div>
                <div className={`mt-3 mx-4 w-30 ${classes['image-upload']}`}>
                    <div className={`p-2 w-100 ${classes['image-upload-border']}`}>
                        <label onClick={checkForDocumentType}  className="cp w-100" htmlFor={tier1Data.documentUploadType?"image2":null}>
                            {
                                !avatar.image2.preview && 
                                    <div className="bckg2 p-2">
                                        <i ><AiOutlineCloudUpload /></i>
                                        <p className="fs-18 fw-400">Image should have a size limit of 5MB</p>
                                    </div>
                            }
                            {
                                avatar.image2.preview &&  
                                    <div className={classes.image}>
                                        <img src={avatar.image2.preview ? avatar.image2.preview : "/dashboard/productImage.png"} alt="image" />
                                        <i className="centralize"><BiTrash /></i>
                                    </div>
                            }
                        </label>
                        <input type="file" id="image2" style={{ display: 'none' }} onChange={(event)=>handleChangeAvatar(event,'image2')} />
                    </div>
                </div>
            </div>
            <div className=" mt-4 ">
        <button
            disabled={bizRequestState.loading}
            onClick={()=>handleSubmit()}
            className="btn-default text-is-white fs-16 fw-500 px-5">
            {bizRequestState.loading ? "Loading":"Submit"}
        </button>
      </div>
        </div>
    </>
}

export default Tier1