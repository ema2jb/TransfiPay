import {useEffect} from 'react'
import {HiOutlineBell, HiOutlineMail} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

import classes from "./Home.module.scss"
import Modal from "../Modals"
import { UIActions } from '../../../Store/ui-slice'
import { bizActions } from '../../../Store/biz-slice'
import { getAllMyBizFunc, setActiveBizFunc } from '../../../requests/bizRequests'



const AllBiz = () =>{

    const dispatch =useDispatch()
    const allMyBiz = useSelector(state=>state.biz.allMyBiz)
    const activeBiz = useSelector(state=>state.biz.activeBiz)

    const switchAccount = (bizId)=>{
        if(activeBiz.id !== bizId){
            setActiveBizFunc(dispatch, bizActions, bizId)
        }
    }

    useEffect(()=>{
        getAllMyBizFunc(dispatch, bizActions, 1, 5)
    }, [])

    return <>
    <Modal width={"60%"} left={"20%"} hideModal={()=>dispatch(UIActions.changeBizUiState('none'))}>
        <div className="space-between">
            <div className='w-50'>
                <p className="f-24 fw-600 primary-color">All Business</p>
                <p className='fs-16 fw-400 secondary-color '>Easily switch between all businesses</p>
            </div>
            <div className={classes['invites-notification']}>
                <div><span className={`fs-24  mr-1 text-color-5 ${classes.bell}`}><HiOutlineBell/></span><span className="fs-16 ml-4 fw-500 secondary-color">You have</span> <span className="fs-16 fw-500 text-color-11">4 new invites</span></div>
            </div>
        </div>
        <table className={`${classes['biz-table']} w-100 mt-5`}>
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
                        <td>Operations</td>
                        <td  className='text-color-1 p-2'>Switch Account</td> 
                    </tr>
                    {
                        allMyBiz && allMyBiz.map(biz=>(
                            <tr className="bckg2 secondary-color fs-16 py-3 mb-2 fw-400">
                                <td className="py-3 pl-3">{biz.business.name}</td>
                                <td>TR123578</td>
                                <td>{biz.business.email}</td>
                                <td>{biz.role}</td>
                                <td 
                                    onClick={()=>switchAccount(biz.business.id)}>
                                    <span 
                                        className={`cp ${activeBiz.id === biz.business.id ? 'br-32 text-color-12 bckg8 p-2' : 'text-color-1 p-2'}`} >{activeBiz.id === biz.business.id ? 'Active' : 'Switch Account'}</span></td> 
                            </tr>
                        ))
                    }
                </tbody>
        </table>
        <div className={` mt-5 fs-16 fw-600 justify-right`} >
            <div className={`cp px-4 btn-default ${classes['see-invites']}`}>
                <span className={` fs-24 ${classes.mail}`}><HiOutlineMail  /></span> <span onClick={()=>dispatch(UIActions.changeBizUiState('invites'))} className="ml-2 d-inline-block" style={{textDecoration:"underline"}}>See all Invites</span>
            </div>
        </div>
    </Modal>
    </>
}

export default AllBiz