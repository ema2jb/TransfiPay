import {HiArrowLeft, HiOutlineMailOpen} from 'react-icons/hi'
import {useDispatch}  from 'react-redux'

import classes from "./Home.module.scss"
import Modal from "../Modals"
import { UIActions } from '../../../Store/ui-slice'


const AllInvites = () =>{

    const dispatch = useDispatch()

    return <>
    <Modal width={"60%"} left={"20%"}  hideModal={()=>dispatch(UIActions.changeBizUiState('none'))}>
        <div className="">
            <div className='w-50'>
                <p className="f-20 fw-600 primary-color">All Invites</p>
                <p className='fs-16 fw-400 secondary-color '>See all invites sent to you</p>
            </div>
        </div>
        <table className={`${classes['biz-table']} w-100 mt-4`}>
                <thead>
                    <tr className="bckg5 text-is-white fs-16 mb-2 fw-500">
                        <td className="py-3 pl-3" scope="col">Buisness Name</td>
                        <td scope="col">Merchant ID</td>
                        <td scope="col">Business Email</td>
                        <td scope="col">Role</td>
                        <td scope="col">Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                        <td className="py-3 pl-3">GIG logistics</td>
                        <td>TR123578</td>
                        <td>GIGlogistics@gmail.com</td>
                        <td>Admin</td>
                        <td><span className='br-32 text-color-12 bckg8 p-2'>Invite Accepted</span></td> 
                    </tr>
                    <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                        <td className="py-3 pl-3">GIG logistics</td>
                        <td>TR123578</td>
                        <td>GIGlogistics@gmail.com</td>
                        <td>Operations</td>
                        <td className='text-color-11 p-2'>Accept Invite</td> 
                    </tr>
                    <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                        <td className="py-3 pl-3">GIG logistics</td>
                        <td>TR123578</td>
                        <td>GIGlogistics@gmail.com</td>
                        <td>Support</td>
                        <td className='text-color-11 p-2'>Accept Invite</td> 
                    </tr>
                    <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                        <td className="py-3 pl-3">GIG logistics</td>
                        <td>TR123578</td>
                        <td>GIGlogistics@gmail.com</td>
                        <td>Basic User</td>
                        <td  className='text-color-11 p-2'>Accept Invite</td> 
                    </tr>
                    <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                        <td className="py-3 pl-3">GIG logistics</td>
                        <td>TR123578</td>
                        <td>GIGlogistics@gmail.com</td>
                        <td>Role</td>
                        <td className='text-color-11 p-2'>Accept Invite</td> 
                    </tr>
                </tbody>
        </table>
        <div className={` mt-5 fs-16 fw-600 space-between`} >
            <div>
                <p><span className={`bckg6 text-is-white align-items-center justify-content-center cp mr-2 ${classes['back-arrow']}`}><HiArrowLeft /></span> <span className="fw-500 fs-14 text-color-2 d-inline-block">Go Back</span></p>
            </div>
            <div className={`cp px-4 btn-default ${classes['see-invites']}`}>
                <span className={` fs-24 ${classes.mail}`}><HiOutlineMailOpen  /></span> <span className="ml-2 d-inline-block" style={{textDecoration:"underline"}}>Accept all Invites</span>
            </div>
        </div>
    </Modal>
    </>
}

export default AllInvites