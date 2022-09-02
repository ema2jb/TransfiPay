import {useDispatch}  from 'react-redux'

import Modal from '../../Modals'
import classes from '../Home.module.scss'
import { UIActions } from '../../../../Store/ui-slice'

const Step2 =()=>{

    const dispatch = useDispatch()

    return<>
        <Modal hideModal={()=>dispatch(UIActions.changeBizUiState('none'))}>
            <div className="space-between">
                <div className='w-70'>
                    <p className="f-20 fw-600 primary-color">Add a Business</p>
                    <p className='fs-16 fw-400 secondary-color '>Enter information about your business, we’ll automatically create a cutom link for you</p>
                </div>
                <p className='fs-14 fw-500 secondaery-color step-indicator p-2'><span>Step 2 of 2</span></p>
            </div>
            <div className="mt-4">
                <p className="fs-16 fw-500 mb-2 tertiary-color">Business Description</p>
                <textarea rows="5" cols="50">
                    Tell us more about your business
                </textarea>
            </div>
            <div>
                <p className='fs-16 fw-400 tertiary-color'>Social Media Links <span className='secondary-color'>( Optional )</span></p>
                <p className="fs-14 fw-400 secondary-color">If provided, the links will appear on your business profile</p>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Instagram</p>
                <div className={classes.input}>
                    <input type="text" placeholder="@" />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Facebook</p>
                <div className={classes.input}>
                    <input type="text" placeholder="name@example.com" />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Twitter</p>
                <div className={classes.input}>
                    <input type="text" placeholder="@" />
                </div>
            </div>
            <p className="fs-16 fw-500 tertiary-color">Other Store Details</p>
            <p className="fs-14 fw-600 tertiary-color">Transaction charge: <span className="secondary-color">Chose who pays the transaction charge</span></p>
            <div>
                <input type="radio" /> <span className='fs-14 fw-400 secondary-color'>Business Owner</span>
            </div>
            <div>
                <input type="radio" /> <span className="fs-14 fw-400 secondary-color">Customer</span>
            </div>
            <div className=" mt-2 justify-right">
                <button onClick={()=>dispatch(UIActions.changeBizUiState('step1'))} className="btn-transparent fs-16 fw-600 px-4 primary-color"> Previous</button>
                <button className="btn-default text-is-white fs-16 fw-500 px-4"> Add Business</button>
            </div>
        </Modal>
    </>
}

export default Step2