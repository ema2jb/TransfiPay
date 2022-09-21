import { useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import {useDispatch, useSelector} from 'react-redux'

import Modal from '../../Modals'
import classes from './Teams.module.scss'
import { reAssignRoleFunc } from '../../../../requests/bizRequests'




const ReAssign = ({handleToggleModal, toggleModal}) =>{

    const [successful, setSuccessful] = useState(false)
    const [teamMemberDetails, setTeamMemberDetails] = useState({
        email:"",
        role:""
    })
    
    const dispatch = useDispatch()
    const bizId = useSelector(state=>state.biz.activeBiz.id)
    const loading = useSelector(state=>state.biz.bizRequestState.loading)

    const submitHandler = ()=>{
       reAssignRoleFunc(dispatch, bizActions, bizId, teamMemberDetails)
       /*
       setSuccessful(true)
        handleToggleModal("")

        setTimeout(()=>{
            setSuccessful(false)
        }, 1000)
        */
    }

    return <>
        <div className={toggleModal !== 'reassign' && 'd-none'}>
        <Modal hideModal={()=>handleToggleModal("")}>
            <div>
                <div>
                    <h1 className='fs-20 fw-600 primary-color'>Reassign team member</h1>
                    <h2 className="fs-16 fw-400 secondary-color">Reassigning a member changes their access and permission</h2>
                </div>
                <hr></hr>
                <div>
                    <label>Team member</label>
                    <div className={`space-between ${classes.input}`}>
                        <input onChange={({target:{value}})=>setTeamMemberDetails(prev=>({...prev, email:value}))} type="text" placeholder='David Khalid' />
                        <i><HiOutlineChevronDown /></i>
                    </div>
                </div>
                <div className=" mt-4">
                    <p>Curent role: <span className=" mx-3 p-2 text-is-white bckg11 br-4">Owner</span></p>
                </div>
                <div className="mt-4">
                    <p>reassign to:
                        <select onChange={({target:{value}})=>setTeamMemberDetails(prev=>({...prev, role:value}))} className="mx-3 py-2">
                            <option className={` py-4 fs-16 fs-400 tertiary-color ${classes.option}`} value="Administrator">administrator</option>
                            <option className={` fs-16 fs-400 tertiary-color ${classes.option}`} value="Operational role">Operational role</option>
                            <option className={` fs-16 fs-400 tertiary-color ${classes.option}`} value="Customer support">Customer support</option>
                            <option className={` fs-16 fs-400 tertiary-color ${classes.option}`} value="Basic User">Basic User</option>
                        </select>
                    </p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={handleToggleModal} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button disabled={loading} onClick={()=>submitHandler()}  className='btn-default'>{loading?'loading':"save"}</button>
                    </div>
                </div>
            </div>
        </Modal>
        </div>
        <div className={!successful && 'd-none'}>
            <Modal alert={true}>
                <p className="fs-20 fw-400 secondary-color">You have reassigned <span className="tertiary-color">David Khalid</span> to the <span className='text-color-12'>Administrator role</span></p>
            </Modal>
        </div>
    </>
}

export default ReAssign