import Section1 from "../Components/Home page/Section1"
import Section2 from "../Components/Home page/Section2"
import Section3 from "../Components/Home page/Section3"
import HowItWorks from "../Components/Home page/HowItWorks"
import DynamicWallet from "../Components/Home page/DynamicWallet"
import PaymentAndApi from "../Components/Home page/PaymentAndApi"
import Team from '../Components/Home page/Team'
import JoinWaitlist from "../Components/Home page/JoinWaitlist"

const HomePage = ()=>{
    return <>
       <Section1 />
       <Section2 />
       <Section3 />
       <HowItWorks />
       <DynamicWallet />
       <PaymentAndApi />
       <Team />
       <JoinWaitlist />
      </>
    
    
}

export default HomePage