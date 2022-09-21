import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Modal from "../../Modals"
import {RiUserUnfollowLine} from 'react-icons/ri'
import classes from './Teams.module.scss'
import { deleteUserFromBizFunc } from '../../../../requests/bizRequests'
import { bizActions } from '../../../../Store/biz-slice'




const Remove = ({handleToggleModal, toggleModal, userId}) =>{

    const [successful, setSuccessful] = useState(false)
    const {activeBiz, bizRequestState} = useSelector(state=>state.biz)
    const  loading = bizRequestState.loading
    const dispatch = useDispatch()

    const handleSave=()=>{
        deleteUserFromBizFunc(dispatch, bizActions, activeBiz.id, userId)
        /*
        setSuccessful(true)
        handleToggleModal("")
        setTimeout(()=>{
            setSuccessful(false)
        }, 1000)*/
    }

    return <>
        <div className={toggleModal !== 'remove' && 'd-none'}>
            <Modal hideModal={()=>handleToggleModal('')}>
                <div >
                    <div className={classes.remove}>
                        <h1 className="fs-20 fw-600 primary-color">Remove team member</h1>
                        <div className={classes.unfollowIcon}>
                            <RiUserUnfollowLine />
                        </div>
                        <p className="fs-16 fw-600 tertiary-color">Are you sure you want to remove team member?</p>
                        <p className="fs-16 fw-600 secondary-color"> 
                            Removing a team member revokes all their access and 
                            permission settings. They will no longer be able to 
                            contribute to this account
                        </p>
                    </div>
                    <div className='justify-right mt-5 mb-2'>
                        <div>
                            <button disabled={loading} onClick={()=>handleSave()} className="btn-delete">{loading?"loading":"Delete Team Member"}</button>
                        </div>
                        <div>
                            <button onClick={()=>handleToggleModal('')}  className='btn-default'>No Cancel </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        <div className={!successful && 'd-none'}>
            <Modal alert={true}>
                <p className="fs-20 fw-400 secondary-color">You have successfully removed <span className="tertiary-color">David Khalid</span> from your team</p>
            </Modal>
        </div>
    </>
}

export default Remove