import OurMission from '../Components/website/AboutUs/OurMission'
import CoreValues from '../Components/website/AboutUs/CoreValues'
import Partners from '../Components/website/AboutUs/Partners'
import Advisers from '../Components/website/AboutUs/Advisers'
import Team from '../Components/website/Home page/Team'
import JoinWaitlist from "../Components/website/Home page/JoinWaitlist"
import Layout from "../Components/website/Layout";

const AboutUsPage = ()=>{
    return<>
        <Layout>
            <OurMission />
            <CoreValues />
            <Partners />
            <Advisers />
            <Team />
            <JoinWaitlist />
        </Layout>
    </>
}

export default AboutUsPage