import {useEffect} from 'react'
import {HiArrowLeft, HiOutlineBell, HiChevronRight, HiOutlineMail} from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMyBizFunc, setActiveBizFunc } from '../../../requests/bizRequests'
import { bizActions } from '../../../Store/biz-slice'

import Modal from '../Modals'
import classes from './Home.module.scss'


const ChooseAccount = ({hideModal}) =>{

    const dispatch =useDispatch()
    const allMyBiz = useSelector(state=>state.biz.allMyBiz)

    useEffect(()=>{
        getAllMyBizFunc(dispatch, bizActions, 1, 5)
    }, [])

    const chooseAccount = (bizId, role)=>{
        setActiveBizFunc(dispatch, bizActions, bizId, role)
        hideModal()
    }

    return <>
        <Modal hideModal={hideModal}>
            <div>
                <div className='space-between mt-2 mb-5'>
                    <div>
                        <p><span className={`bckg6 text-is-white align-items-center justify-content-center cp mr-2 ${classes['back-arrow']}`}><HiArrowLeft /></span> <span className="fw-500 fs-14 text-color-2 d-inline-block">Go Back</span></p>
                    </div>
                    <div className={classes['invites-notification']}>
                        <div><span className={`fs-24  mr-1 text-color-5 ${classes.bell}`}><HiOutlineBell/></span><span className="fs-16 ml-4 fw-500 secondary-color">You have</span> <span className="fs-16 fw-500 secondary-color">4 new invites</span></div>
                    </div>
                </div>
            </div>
            <div className="space-between mt-4 mb-4">
                <div className='centralize'>
                    <p className={`bckg5 centralize text-is-white fw-600 fs-18 mr-4 ${classes['user-initial']}`}>N</p>
                    <div>
                        <p className="fs-20 fw-500 text-color-5">Nwaokoro David Emeka</p>
                        <p className="fs-16 fw-500 secondary-color">Owner</p>
                    </div>
                </div>
                <div>
                    <p className="fs-28 fw-500 text-color-5"><HiChevronRight /></p>
                </div>
            </div>
            <hr></hr>
            {
                allMyBiz && allMyBiz.map(biz=>(
                    <>
                    <div onClick={()=>chooseAccount(biz.business.id, biz.role)} className="space-between mt-4 cp mb-5">
                        <div className='centralize'>
                            <p className={`bckg5 centralize text-is-white fw-600 fs-18 mr-4 ${classes['user-initial']}`}>{biz.business.name[0]}</p>
                            <div>
                                <p className="fs-20 fw-500 text-color-5">{biz.business.name}</p>
                                <p className="fs-16 fw-500 secondary-color">{biz.role}</p>
                            </div>
                        </div>
                        <div>
                            <p className="fs-28 fw-500 text-color-5"><HiChevronRight /></p>
                        </div>
                    </div>
                     <hr></hr>
                     </>
                ))
            }
            <div>
                <div className={`primary-color fs-16 fw-600 centralize`} >
                    <div  className={`cp px-4 ${classes['see-invites']}`}>
                        <span className={` fs-24 ${classes.mail}`}><HiOutlineMail  /></span> <span className="ml-2 d-inline-block" style={{textDecoration:"underline"}}>See all Invites</span>
                    </div>
                </div>
            </div>
        </Modal>
    </>

}

export default ChooseAccount