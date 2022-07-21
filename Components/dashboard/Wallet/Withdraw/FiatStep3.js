import {useState, useRef, useEffect } from 'react'
import Modal from '../../Modals/index'
import classes from './Withdraw.module.scss'


const FiatStep3 =({handleCurrentStep})=>{

    const [pin, setPin] = useState({
        input1:"",
        input2:"",
        input3:"",
        input4:""
    })

    const [isLoading, setIsLoading] = useState(false)

    const onChangeHandler = ({target:{name, value}})=>{
        console.log(name, value)
        setPin({...pin, [name]:value})
        if(name==="input4" && input4Ref.current.value){
            setIsLoading(true)
            setTimeout(()=>{
                setIsLoading(false)
                handleCurrentStep('withdraw-finalStep')
            }, 2000)
        }
    }

    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()

    useEffect(()=>{
        input1Ref.current.addEventListener('keyup', ()=>{
            if(input1Ref.current.value){
                input2Ref.current.focus()
            }
        })
        input2Ref.current.addEventListener('keyup', ()=>{
            if(input2Ref.current.value){
                input3Ref.current.focus()
            }
        })
        input3Ref.current.addEventListener('keyup', ()=>{
            if(input3Ref.current.value){
                input4Ref.current.focus()
            }
        })
    }, [])

    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            {
                !isLoading  &&
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Withdraw to Local Bank</h1>
                        <p className="fs-16 fw-400 secondary-color">withdrawals to banks takes 24hrs to be credited</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 </span>of 3</p>
                </div>
                <div className={classes['authentication-pin']}>
                    <input 
                        ref={input1Ref} 
                        type="password" 
                        maxLength={1}
                        name="input1"
                        value={pin.input1}
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input2Ref} 
                        type="password" 
                        maxLength={1}
                        name="input2"
                        value={pin.input2} 
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input3Ref} 
                        type="password" 
                        maxLength={1}
                        name="input3"
                        value={pin.input3}
                        onChange={onChangeHandler}
                    />
                    <input 
                        ref={input4Ref} 
                        type="password" 
                        maxLength={1}
                        name="input4"
                        value={pin.input4}  
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
            }
            { isLoading &&
            <div className={classes.finalStep}>
                 <div className={classes['order-approved']}>
                     <div className={classes.image}>
                         <img src="/dashboard/loading.png" alt="verification link sent"  />
                     </div>
                     <p className='fs-20 fw-700 tetiary-color mt-4 mb-2'>Processing Order....</p>
                     <p className='fs-16 fw-400 secondary-color'>Kindly wait while we process your order for you </p>
                     <p className="fs-16 fw-400 secondary-color mt-4">This won’t take long</p>
                 </div>
                 <div className='justify-right mt-5 mb-2'>
                     <div>
                         <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                     </div>
                     <div>
                         <button onClick={()=>handleCurrentStep('withdraw-step1')} className='btn-default'>Try Again</button>
                     </div>
                 </div>
             </div>
            }
        </Modal>
    </>
}

export default FiatStep3