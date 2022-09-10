import { useEffect } from 'react'
import {HiOutlineUserAdd, HiOutlineUser } from 'react-icons/hi'
import { useDispatch,useSelector } from 'react-redux'
import {useState} from 'react'

import classes from './Teams.module.scss'
import SubHeader from "../../SubHeader"
import { UIActions } from '../../../../Store/ui-slice'
import { bizActions } from '../../../../Store/biz-slice'
import { getBizUsersFunc } from '../../../../requests/bizRequests'
import ReAssign from './reassign'
import Remove from './remove'



const Collaborate = ()=>{

    const dispatch = useDispatch()

    const [toggleModal, setToggleModal] = useState('')

    const {activeBiz, activeBizUsers} = useSelector(state=>state.biz)

    const handleToggleModal =(value)=>{
        setToggleModal(value)
    }

    useEffect(()=>{
        activeBiz && activeBiz.id && getBizUsersFunc(activeBiz.id)
    }, [])

    return <>
        <SubHeader mainTitle={"Teams"} />
        <div className={`m-25`}>
        <div className="space-between">
            <div>
                <h1 className="fs-24 fw-500 primary-color">Collaborate with team members</h1>
                <h2 className="fs-16 fw-400">There is only one person in your team.</h2>
            </div>
            <div onClick={()=>dispatch(UIActions.changeTeamsUiState('invite'))} className={`btn-default`}>
                <span className="mr-2"><HiOutlineUserAdd /> </span> <span> Invite</span>
            </div>
        </div>
        <hr></hr>
        <div>
        <table className={`${classes.table} w-100`}>
            <thead>
                <tr className=" bckg9 text-center fs-16 fw-600 tertiary-color">
                    <td className="py-3 pl-3">Full name</td>
                    <td >Email</td>
                    <td >Role</td>
                    <td >Action</td>
                </tr>
            </thead>
            <tbody >
                <tr className="fs-16 text-center fw-500 secondary-color">
                    <td className="py-3 d-flex align-items-center justify-content-center"><span className={`${classes.user} mx-2 d-flex align-items-center justify-content-center text-is-white`}><HiOutlineUser /></span><span>David Khalid</span></td>
                    <td>n.davmek@gmail.com</td>
                    <td><span className="bckg10 text-is-white p-2 br-4">Owner</span></td>
                    <td  className="text-color-1">
                        <span onClick={()=>handleToggleModal('reassign')} className={`mr-5 ${classes.tooltip}`}>Reassign
                            <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles</span>
                        </span>
                        <span onClick={()=>handleToggleModal('remove')} className={classes.tooltip}>Remove
                            <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles.</span>
                        </span>
                    </td>
                </tr>
                <tr className="fs-16 text-center fw-500 secondary-color">
                    <td className="py-3 d-flex align-items-center justify-content-center"><span className={`${classes.user} mx-2 d-flex align-items-center justify-content-center text-is-white`}><HiOutlineUser /></span><span>David Khalid</span></td>
                    <td>n.davmek@gmail.com</td>
                    <td><span className="bckg10 text-is-white p-2 br-4">Owner</span></td>
                    <td  className="text-color-1">
                        <span onClick={()=>handleToggleModal('reassign')} className={`mr-5 ${classes.tooltip}`}>Reassign
                            <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles</span>
                        </span>
                        <span onClick={()=>handleToggleModal('remove')} className={classes.tooltip}>Remove
                            <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles.</span>
                        </span>
                    </td>
                </tr>
                {
                    activeBizUsers && activeBizUsers.map(user=>(
                        <tr className="fs-16 text-center fw-500 secondary-color">
                            <td className="py-3 d-flex align-items-center justify-content-center">
                                <span className={`${classes.user} mx-2 d-flex align-items-center justify-content-center text-is-white`}>
                                    <HiOutlineUser />
                                </span>
                                <span>{user.profile.fullName}</span>
                            </td>
                            <td>{user.profile.email}</td>
                            <td><span className="bckg10 text-is-white p-2 br-4">{user.role}</span></td>
                            <td  className="text-color-1">
                                <span onClick={()=>handleToggleModal('reassign')} className={`mr-5 ${classes.tooltip}`}>Reassign
                                    <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles</span>
                                </span>
                                <span onClick={()=>handleToggleModal('remove')} className={classes.tooltip}>Remove
                                    <span className={classes.tooltiptext}>Only members who are owners or administrators can reassign team roles.</span>
                                </span>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table> 
        </div>
        </div>
        <div>
            <ReAssign toggleModal={toggleModal} handleToggleModal={handleToggleModal} />
        </div>
        <div>
            <Remove toggleModal={toggleModal} handleToggleModal={handleToggleModal} />
        </div>
    </>
}

export default Collaborate