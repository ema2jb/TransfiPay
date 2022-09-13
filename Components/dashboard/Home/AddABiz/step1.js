import {useDispatch, useSelector}  from 'react-redux'


import Modal from '../../Modals'
import classes from '../Home.module.scss'
import { UIActions } from '../../../../Store/ui-slice'
import { bizActions } from '../../../../Store/biz-slice'

const Step1 =()=>{

    const {createBiz} = useSelector(state=>state.biz)
    const dispatch = useDispatch()


    return<>
        <Modal hideModal={()=>dispatch(UIActions.changeBizUiState('none'))}>
            <div className="space-between">
                <div className='w-70'>
                    <p className="f-20 fw-600 primary-color">Add a Business</p>
                    <p className='fs-16 fw-400 secondary-color '>Enter information about your business, we’ll automatically create a cutom link for you</p>
                </div>
                <p className='fs-14 fw-500 secondaery-color step-indicator p-2'><span>Step 1</span> of 2</p>
            </div>
            <div className="mt-4">
                <p className="fs-16 fw-500 mb-2 tertiary-color">Business name</p>
                <div className={classes.input}>
                    <input 
                     type="text"
                     className="w-100" 
                     placeholder="Enter as written on official documents"
                     value={createBiz.name} 
                     onChange={({target:{value}})=>dispatch(bizActions.changeBizDetailsState({name:value}))}
                     />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color"> Business Email Address</p>
                <div className={classes.input}>
                    <input 
                    type="text" 
                    placeholder="name@example.com" 
                    value={createBiz.email} 
                    onChange={({target:{value}})=>dispatch(bizActions.changeBizDetailsState({email:value}))}
                    />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Business Phone Number</p>
                <div className={classes.input}>
                    <span className="fs-18 fw-500 tertiary-color">+234  </span>
                    <input 
                        type="text" 
                        placeholder="---- ----- -----" 
                        value={createBiz.phoneNumber} 
                        onChange={({target:{value}})=>dispatch(bizActions.changeBizDetailsState({phoneNumber:value}))}
                    />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Country</p>
                <div className={classes.input}>
                    <input 
                    type="text" 
                    placeholder="Enter a Country name" 
                    value={createBiz.country} 
                    onChange={({target:{value}})=>dispatch(bizActions.changeBizDetailsState({country:value}))}
                    />
                </div>
            </div>
            <div>
                <p className="fs-16 fw-500 mb-2 tertiary-color">Business Address</p>
                <div className={classes.input}>
                    <input 
                    type="text" 
                    placeholder="Enter a business Address" 
                    value={createBiz.address} 
                    onChange={({target:{value}})=>dispatch(bizActions.changeBizDetailsState({address:value}))}
                    />
                </div>
            </div>
            <div className=" mt-2 justify-right">
                <button onClick={()=>dispatch(UIActions.changeBizUiState('step2'))} className="btn-default text-is-white fs-16 fw-500 px-4"> Next</button>
            </div>
        </Modal>
    </>
}

export default Step1