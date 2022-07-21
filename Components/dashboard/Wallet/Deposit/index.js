import DepositStep1 from './step1'
import DepositStep2 from './step2'
import DepositStep3 from './step3'
import DepositFinalStep from './FinalStep'


const Deposit = ({currentStep, handleCurrentStep})=>{
    return <>
    <div className={currentStep !== 'deposit-step1' ? 'd-none' : ""}>
        <DepositStep1 handleCurrentStep={handleCurrentStep}/>
    </div>
    <div className={currentStep !== 'deposit-step2' ? 'd-none' : ""}>
        <DepositStep2 handleCurrentStep={handleCurrentStep}/>
    </div>
    <div className={currentStep !== 'deposit-step3' ? 'd-none' : ""}>
        <DepositStep3 handleCurrentStep={handleCurrentStep}/>
    </div>
    <div className={currentStep !== 'deposit-finalStep' ? 'd-none' : ""}>
        <DepositFinalStep handleCurrentStep={handleCurrentStep}/>
    </div>
    </>
} 

export default Deposit