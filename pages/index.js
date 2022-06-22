import Section1 from "../Components/website/Home page/Section1"
import Section2 from "../Components/website/Home page/Section2"
import Section3 from "../Components/website/Home page/Section3"
import HowItWorks from "../Components/website/Home page/HowItWorks"
import DynamicWallet from "../Components/website/Home page/DynamicWallet"
import PaymentAndApi from "../Components/website/Home page/PaymentAndApi"
import Team from '../Components/website/Home page/Team'
import JoinWaitlist from "../Components/website/Home page/JoinWaitlist"
import Layout from "../Components/website/Layout";

const HomePage = ()=>{
    return <>
        <Layout>
            <Section1 />
            <Section2 />
            <Section3 />
            <HowItWorks />
            <DynamicWallet />
            <PaymentAndApi />
            <Team />
            <JoinWaitlist />
        </Layout>
      </>
    
    
}

export default HomePage