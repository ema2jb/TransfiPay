

import {useDispatch} from 'react-redux'


import classes from './Teams.module.scss'
import SubHeader from "../../SubHeader"
import { UIActions } from '../../../../Store/ui-slice'


const Invite = ()=>{

    const dispatch = useDispatch()

    return  <>
        <div>
            <SubHeader showIndexPage={()=>dispatch(UIActions.changeTeamsUiState('collaborate'))} mainTitle={"Teams"} subTitle={"Invite Team Members"} />
            <div className={'m-25'}>
            <div >
                <div>
                    <h1 className="fs-24 fw-500 primary-color">Collaborate with team members</h1>
                    <h2 className="fs-16 fw-400">There is only one person in your team.</h2>
                </div>
            </div>
            <hr></hr>
            <div className={`bckg7 br-12 p-25`}>
                <div>
                    <div className='mb-4'>
                        <p className="fs-16 fw-500 mb-2 tertiary-color">Email Address</p>
                        <div className={classes.input}>
                            <input type="text" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="space-between">
                        <p className="fs-16 fw-500 mb-2 tertiary-color">Role</p>
                        <p className="text-color-1">Learn more about roles</p>
                    </div>
                    <div className="border p-3">
                        <div className="centralize-start-start-10 mb-3">
                            <div className={` centralize ${classes.radio}`} ><input type="radio" /></div>
                            <div >
                                <p classsName="fs-18 fw-500 tertiary-color">Owner</p>
                                <p className="fs-14 fw-400 tertiary-color">Full access: team management, can delete and add team members, reassign roles and delete business.</p>
                            </div>
                        </div>
                        <div className="centralize-start-start-10 mb-3">
                            <div className={` centralize ${classes.radio}`} ><input type="radio" /></div>
                            <div>
                                <p classsName="fs-18 fw-500 tertiary-color">Administrator</p>
                                <p className="fs-14 fw-400 tertiary-color">Full access: team management, can add team members, reassign roles and delete business.</p>
                            </div>
                        </div>
                        <div className="centralize-start-start-10 mb-3">
                            <div className={` centralize ${classes.radio}`} ><input type="radio" /></div>
                            <div>
                                <p classsName="fs-18 fw-500 tertiary-color">Operation role</p>
                                <p className="fs-14 fw-400 tertiary-color">Access to read permissions.</p>
                            </div>
                        </div>
                        <div className="centralize-start-start-10 mb-3">
                            <div className={` centralize ${classes.radio}`} ><input type="radio" /></div>
                            <div>
                                <p classsName="fs-18 fw-500 tertiary-color">Customer support</p>
                                <p className="fs-14 fw-400 tertiary-color">Access to read permission and create refunds.</p>
                            </div>
                        </div>
                        <div className="centralize-start-start-10 mb-3">
                            <div className={` centralize ${classes.radio}`} ><input type="radio" /></div>
                            <div>
                                <p classsName="fs-18 fw-500 tertiary-color">Basic User</p>
                                <p className="fs-14 fw-400 tertiary-color">Read access only</p>
                            </div>
                        </div>
                    </div>
                        <div className="mt-4">
                            <p className="fs-16 fw-500 mb-2 tertiary-color">(Optional) Customise a message to send with your invite</p>
                            <textarea className={`bckg7 ${classes.textarea}`} rows="7" cols="50">
                               (300)
                            </textarea>
                        </div>
                        <div className="mt-3">
                            <button className="text-is-white btn-default">Send invite</button>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </>
}


export default Invite