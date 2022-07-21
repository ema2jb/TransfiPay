import CreatePaymentLinkStep1 from "./Step1"
import CreatePaymentLinkStep2 from "./Step2"
import CreatePaymentLinkStep3 from "./Step3"



const CreatePaymentLink = ({currentStep, handleCurrentStep})=>{
    return <>
        <div className={currentStep !== 'create-payment-link-step1' ? 'd-none' : ""}>
            <CreatePaymentLinkStep1 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'create-payment-link-step2' ? 'd-none' : ""}>
            <CreatePaymentLinkStep2 handleCurrentStep={handleCurrentStep}/>
        </div>
        <div className={currentStep !== 'create-payment-link-step3' ? 'd-none' : ""}>
            <CreatePaymentLinkStep3 handleCurrentStep={handleCurrentStep}/>
        </div>
    </>
}

export default CreatePaymentLink