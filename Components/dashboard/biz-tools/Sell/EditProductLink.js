import Modal from '../../Modals'
import classes from './Sell.module.scss'
import {BiTrash} from 'react-icons/bi'
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'

const EditProductLink = ({handleEditProductLink})=>{
    return<>
        <Modal hideModal={()=>handleEditProductLink(false)}>
            <div className={`${classes['edit-product-link']}`}>
                <div className={`py-4 ${classes.header}`}>
                    <h1 className='fw-600 fs-20 primary-color'>My Bag Collections</h1>
                    <p className='fw-400 fs-16 secondary-color' >Created <span className="text-color-2">2nd Novemeber, 2022</span></p>
                </div>
                <div className={`mb-3 mt-4 centralize ${classes['product-link']}`}>
                    <div className={classes['form-btn']}>
                            <button className="w-100 fw-400 fs-16">Visit Link</button>
                    </div>
                    <div className={`space-between  bckg4 br-8 ${classes.input}`}> 
                        <input className="w-100 secondary-color fs-16 fw-400" type="text" value="https://transfi.finance/pay/mybagcollections" />
                        <HiOutlineDocumentDuplicate style={{fontSize:"18px"}} />
                    </div>
                </div>
                <div className={`bckg4 br-8 mt-4 px-3 py-3`}>
                    <div>
                        <p className='fw-400 fs-16 secondary-color'>Page Description</p>
                        <p className='fw-500 fs-20 tetiary-color'>My Bag Collection</p>
                    </div>
                </div>
                <div className='bckg4 br-8 mt-3 px-3 py-3'>
                    <p className='fw-400 fs-16 secondary-color'>Currency accepted</p>
                    <p className='fw-500 fs-20 tetiary-color'>USDT</p>
                </div>
                <div className='bckg4 br-8 mt-3 px-3 py-3'>
                    <p className='fw-400 fs-16 secondary-color'>Listed Products</p>
                    <p className='fw-500 fs-20 tetiary-color'>3 Items Listed</p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button className="btn-delete"><span><BiTrash style={{color:"#DC2626"}} /></span> Trash Link</button>
                    </div>
                    <div>
                        <button className='btn-default'>Edit product link</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default EditProductLink