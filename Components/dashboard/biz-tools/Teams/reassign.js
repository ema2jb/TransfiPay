import { useState } from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select';

import Modal from '../../Modals'
import classes from './Teams.module.scss'
import { reAssignRoleFunc } from '../../../../requests/bizRequests'




const ReAssign = ({handleToggleModal, toggleModal, userDetails}) =>{

    const [successful, setSuccessful] = useState(false)
    const [role, setRole] = useState('')
    const [selectedRole, setSelectedRole] = useState({value:"", label:""})
    
    const dispatch = useDispatch()
    const bizId = useSelector(state=>state.biz.activeBiz.id)
    const loading = useSelector(state=>state.biz.bizRequestState.loading)

    const submitHandler = ()=>{
       reAssignRoleFunc(dispatch, bizActions, bizId, {email:userDetails.email, role})
       /*
       setSuccessful(true)
        handleToggleModal("")

        setTimeout(()=>{
            setSuccessful(false)
        }, 1000)
        */
    }

    const roleOptions = [
		{ value: 'Administrator', label: 'Administrator' },
		{ value: 'Operational role', label: 'Operational role' },
        { value: 'Customer support', label: 'Customer support' },
        { value: 'Basic user', label: 'Basic user' },
	];

    const customStyles = {
		control: (provided, state) => ({
			...provided,
			color: '#6E7191',
            border: '1px solid #CBD5E1',
            'border-radius': '4px',
            'margin-bottom': '1.3rem',
            width:'50%'
		}),
	};

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
                    <div className={`${classes.input}`}>
                        <input className="w-100" value={userDetails.email || '@example.com'} type="email" placeholder='David Khalid' />
                    </div>
                </div>
                <div className=" mt-4">
                    <p>Curent role: <span className=" mx-3 p-2 text-is-white bckg11 br-4">{userDetails.role || 'owner'}</span></p>
                </div>
                <div className="mt-4">
                    <p>reassign to:</p>
                    <Select
                        onChange={(selectedOption) =>{
                            setRole(selectedOption.value)
                            setSelectedRole(selectedOption)
                            }
                        }
                        value={selectedRole}
                        options={roleOptions}
                        styles={customStyles}
                    />
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