import { useState } from 'react'

import Modal from "../../Modals"
import {RiUserUnfollowLine} from 'react-icons/ri'
import classes from './Teams.module.scss'




const Remove = ({handleToggleModal, toggleModal}) =>{

    const [successful, setSuccessful] = useState(false)

    const handleSave=()=>{
        setSuccessful(true)
        handleToggleModal("")

        setTimeout(()=>{
            setSuccessful(false)
        }, 1000)
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
                            <button onClick={()=>handleSave()} className="btn-delete">Delete Team Member</button>
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