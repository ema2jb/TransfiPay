import Modal from '../../Modals'
import classes from './Sell.module.scss'
import {HiOutlinePencilAlt} from 'react-icons/hi'

const Step3 = ({showStep, handleStepVisibility})=>{
    return<>
        <Modal hideModal={()=>handleStepVisibility('')}>
            <div className={`${classes.step3}`}>
                <div className={`py-4 ${classes.header}`}>
                    <h1 className='fw-600 fs-20 primary-color'>Review your Payment link</h1>
                    <p className='fw-400 fs-16 secondary-color' >Make sure everything is in place you activate this link</p>
                </div>
                <div className={` space-between-top bckg4 br-8 mt-4 px-3 py-3`}>
                    <div>
                        <p className='fw-400 fs-16 secondary-color'>Product Name</p>
                        <p className='fw-500 fs-20 tetiary-color'>My Bag Collection</p>
                    </div>
                    <HiOutlinePencilAlt />
                </div>
                <div className='bckg4 br-8 mt-3 px-3 py-3'>
                    <p className='fw-400 fs-16 secondary-color'>Amount attached to link</p>
                    <p className='fw-500 fs-20 tetiary-color'>0.000003460 USDT</p>
                </div>
                <div className='bckg4 br-8 mt-3 px-3 py-3'>
                    <p className='fw-400 fs-16 secondary-color'>Date Created</p>
                    <p className='fw-500 fs-20 tetiary-color'>2nd Novemeber, 2022</p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button className="btn-transparent">Add more products</button>
                    </div>
                    <div>
                        <button onClick={()=>handleStepVisibility('step4')} className='btn-default'>Proceed</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step3