import { useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";

import VerificationLinkModal from '../Modals/VerificationLinkModal';


const Kyc = ()=>{

    const [isInputValue, setIsInputValue] = useState({
        governmentId:"",
        bankStatement:""
    })
    const [isModalVisible, setIsModalVisible] = useState(false)

    const onChangeHandler =(e)=>{
        console.log(isInputValue)
        setIsInputValue({...isInputValue, [e.target.name]:e.target.value})
    }

    const hideModal = ()=>{
        setIsModalVisible(false)
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        setIsModalVisible(true)
    }


    return <>
        {isModalVisible && <VerificationLinkModal hideModal={hideModal} />}
        <div 
        className="login">
            <h1>KYC Verification</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Upload ID ( any Goverment issued ID) </label>
                    <div className="file-upload">
                        <span style={{opacity:isInputValue.governmentId ? '0' : '1'}} className="placeholder">Upload a file</span>
                        <input style={{opacity:isInputValue.governmentId ? '1' : '0'}}type='file' name="governmentId" onChange={onChangeHandler}/>
                        <span >{<AiOutlineCloudUpload />}</span>
                    </div>
                </div>
                <div className="form-group">
                    <label>Upload Residence proof( Bank statement) </label>
                    <div className="file-upload">
                        <span style={{opacity:isInputValue.bankStatement ? '0' : '1'}} className="placeholder">Upload a file</span>
                        <input style={{opacity:isInputValue.bankStatement ? '1' : '0'}}type='file' name="bankStatement" onChange={onChangeHandler}/>
                        <span >{<AiOutlineCloudUpload />}</span>
                    </div>
                </div>
                <div>
                    <button type="submit">
                        Submit Details
                    </button>
                    <p><span>Skip this for now</span></p>
                </div>
            </form>
        </div>
    </>
}

export default Kyc