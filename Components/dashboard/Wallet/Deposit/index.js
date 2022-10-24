import{useState} from 'react'

import DepositStep1 from './step1'
import DepositStep2 from './step2'
import DepositStep3 from './step3'
import DepositFinalStep from './FinalStep'


const Deposit = ({currentStep, handleCurrentStep})=>{

    const [clearEntries, setClearEntries] = useState('')

  const handleEntries = (value)=>{
    console.log(value)
    setClearEntries(value)
  }
  
    return <>
    <div className={currentStep !== 'deposit-step1' ? 'd-none' : ""}>
        <DepositStep1 handleEntries={handleEntries}  handleCurrentStep={handleCurrentStep}/>
    </div>
    <div className={currentStep !== 'deposit-step2' ? 'd-none' : ""}>
        <DepositStep2 clearEntries={clearEntries} handleCurrentStep={handleCurrentStep}/>
    </div>
      {
        /*
         <div className={currentStep !== 'deposit-step3' ? 'd-none' : ""}>
          <DepositStep3 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'deposit-finalStep' ? 'd-none' : ""}>
            <DepositFinalStep handleCurrentStep={handleCurrentStep}/>
        </div>
        */
      }
    </>
} 

export default Deposit