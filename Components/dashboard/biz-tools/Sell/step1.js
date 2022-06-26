import {BiChevronDown} from "react-icons/bi"
import classes from './Sell.module.scss'


const Step1 = ({handleCurrentStep})=>{
    return<>
        <div className={`${classes['form-input']} space-between`}>
                <div>
                    <label className="fs-18 fw-500">Product Name</label>
                    <div className={`${classes.input}`}>
                        <input className="w-100" type="text" placeholder="Name of product" />
                    </div>
                </div>
                <div>
                    <label className="fs-18 fw-500">Product Description</label>
                    <div className={`${classes.input}`}>
                        <input className="w-100" type="text" placeholder="descriptions" />
                    </div>
                </div>
            </div>
            <div className={`${classes['form-input']} space-between`}>
                <div>
                    <label className="fs-18 fw-500">Set up a fixed amount for this product</label>
                    <div className={`${classes.input}`}>
                        <input className="w-100" type="text" placeholder="Minimum amount is $10" />
                    </div>
                </div>
                <div>
                    <label className="fs-18 fw-500">Choose how you want to be paid?</label>
                    <div className={`space-between ${classes.input}`}> 
                        <input className="w-100" type="text" placeholder="Select a preffered currency  ( i.e USD,EUR, etc)" />
                        <BiChevronDown style={{fontSize:"18px"}} />
                    </div>
                </div>
            </div>
            <div className='m-25 justify-right'>
                <button onClick={()=>handleCurrentStep('step2')} className='btn-default px-5'>Next</button>
            </div>
    </>
}

export default Step1