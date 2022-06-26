import {AiOutlineCloudDownload} from 'react-icons/ai'
import {AiOutlinePrinter} from 'react-icons/ai'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'
import classes from './Sell.module.scss'
import Modal from '../../Modals'


const Step4 = ({handleStepVisibility})=>{
    return<>
        <Modal hideModal={()=>handleStepVisibility('')}>
        <div className={classes.step4}>
            <div className={`py-4 ${classes.header}`}>
                <h1 className="fs-20 fw-600 success-color">Link generated successfully</h1>
                <p className="fs-16 fw-400 secondary-color">You can now use this link to recieve payments from anyone </p>
            </div>
            <div className={classes.qrCode}>
                <div className="centralize mt-5">
                    <div className={classes.image}>
                        <img src="/dashboard/Qrcode.png" alt="Qrcode"  />
                    </div>
                </div>
                <div className="centralize mt-2">
                    <div className='centralize mx-3'>
                        <AiOutlineCloudDownload/>
                        <p className="fs-16 fw-500 secondary-color mx-1">Download as PDF </p>
                    </div>
                    <div className='centralize'>
                        <AiOutlinePrinter/>
                        <p className="fs-16 fw-500 secondary-color mx-1">Print QR Code</p>
                    </div>
                </div>
            </div>
            <div className={`mb-3 mt-4 ${classes['product-link']}`}>
                <label className="fs-16 fw-500 secondary-color"> Your Payment Link </label>
                <div className={`space-between w-100 bckg4 br-8 ${classes.input}`}> 
                    <input className="w-100 tetiary-color fs-20 fw-500" type="text" value="https://transfi.finance/pay/mybagcollections" />
                    <HiOutlineDocumentDuplicate style={{fontSize:"18px"}} />
                </div>
            </div>
        </div>
        </Modal>
    </>
}

export default Step4