import TransferStep1 from "./step1"
import TransferStep2 from "./step2"


const Transfer = ({currentStep, handleCurrentStep})=>{
    return <>
        <div className={currentStep !== 'Transfer-step1' ? 'd-none' : ""}>
            <TransferStep1 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'Transfer-step2' ? 'd-none' : ""}>
            <TransferStep2 handleCurrentStep={handleCurrentStep}/>
        </div>
    </>
}

export default Transfer