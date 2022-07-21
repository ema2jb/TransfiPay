import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {HiOutlineCheck, HiOutlineDocumentText} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"


import classes from './Settings.module.scss'


const KycVerification = ()=>{

    const [isInputValue, setIsInputValue] = useState({
        governmentId:"",
        bankStatement:""
    })

    const clearInputHandler = (value) =>{
        setIsInputValue({...isInputValue, [value]:""})
    }

    const onChangeHandler =(e)=>{
        console.log(isInputValue)
        setIsInputValue({...isInputValue, [e.target.name]:e.target.value})
    }


    return <>
        <div className={classes['form-wrapper']}>
            <div className={classes.form}>
                <div className={`mb-3 ${classes.tips}`}>
                    <h1 className="fs-18 fw-600 primary-color">Tips:</h1>
                    <p  className="fs-14 fw-600 secondary-color">
                        Make sure you take and upload clear photos of documents and the 
                        corners of your document are visible
                    </p>
                </div>
            <form>
                <div className={classes['form-group']}>
                    <label>Proof of Identification( any Goverment issued ID)</label>
                    <div className={classes['file-upload']}>
                        <span  style={{opacity:isInputValue.governmentId ? '0' : '1'}} className={classes.placeholder}>Upload a file</span>
                        <div className={`centralize-10 ${classes['file-input']}`} style={{opacity:isInputValue.governmentId ? '1' : '0'}}>
                        {isInputValue.governmentId && <i><HiOutlineDocumentText /></i>}
                        <input   
                            type='file' name="governmentId" 
                            onChange={onChangeHandler}
                            value={isInputValue.governmentId}
                        />
                        {isInputValue.governmentId && <i onClick={()=>clearInputHandler('governmentId')} className={classes['close']}><AiOutlineClose /></i>}
                        </div>
                        <span>{isInputValue.governmentId ? <i className={classes['check']}>< HiOutlineCheck  /></i> : <AiOutlineCloudUpload />}</span>
                    </div>
                </div>
                <div className={classes['form-group']}>
                    <label>Proof of Residence( Bank statement)</label>
                    <div className={classes['file-upload']}>
                        <span style={{opacity:isInputValue.bankStatement ? '0' : '1'}} className={classes.placeholder}>Upload a file</span>
                        <div className={`centralize-10 ${classes['file-input']}`} style={{opacity:isInputValue.bankStatement ? '1' : '0'}}>
                        {isInputValue.bankStatement && <i><HiOutlineDocumentText /></i>}
                        <input 
                            type='file' 
                            name="bankStatement" 
                            onChange={onChangeHandler}
                            value={isInputValue.bankStatement}
                        />
                        {isInputValue.bankStatement && <i onClick={()=>clearInputHandler('bankStatement')} className={classes['close']}><AiOutlineClose /></i>}
                        </div>
                        <span>{isInputValue.bankStatement ? <i className={classes['check']}>< HiOutlineCheck  /></i> : <AiOutlineCloudUpload />}</span>
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button  className='btn-default px-5'>Save</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </>
}

export default KycVerification