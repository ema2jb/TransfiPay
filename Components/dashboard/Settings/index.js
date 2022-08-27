import { useState } from 'react'

import Header from "./header"
import SubHeader from '../SubHeader'
import classes from './Settings.module.scss'

import PersonalInformation from './PersonalInformation'

import ApiKey from './ApiKey'
import SecurityIndex from './Security'
import BuisnessInformation from './BuisnessInformation'
import { AiFillDingtalkSquare } from 'react-icons/ai'


const SettingsIndex = () =>{

    const [activeHeader, setActiveHeader] = useState('PI')
    const [showSecurityDetails, setShowSecurityDetails] = useState(false)
    const [showBizInfoTiers, setShowBizInfoTiers] = useState(false)
    const [tier, setTierHeader] = useState('bizInfo')

    const tierHandler = (value)=>{
        setTierHeader(value)
    }

    const activeHeaderHandler = (value) =>{
        setActiveHeader(value)
    }

    const showIndexPage=()=>{
        showBizInfoTiersHandler(false)
        tierHandler('bizInfo')
    }

    const securityDetailsHandler = value => setShowSecurityDetails(value)
    const showBizInfoTiersHandler = value => setShowBizInfoTiers(value)

    return <>
        {!showBizInfoTiers && <SubHeader showIndexPage={()=>showIndexPage()} mainTitle="Settings" />}
        {showBizInfoTiers && <SubHeader showIndexPage={()=>showIndexPage()}  mainTitle="Settings" subTitle={'Buisness Information'} subTitle1={'KYC'} />}
        <div className={classes.settings}>
            {!showSecurityDetails && !showBizInfoTiers && <Header activeHeader={activeHeader} activeHeaderHandler={activeHeaderHandler} />}
            <div className={activeHeader !== "PI" ? 'd-none' : 'fade-in'}>
                <PersonalInformation />
            </div>
            <div className={activeHeader !== "KV" ? 'd-none' : 'fade-in'}>
                <BuisnessInformation tier={tier} tierHandler={tierHandler} showBizInfoTiersHandler={showBizInfoTiersHandler} />
            </div>
            <div className={activeHeader !== "AK" ? 'd-none' : 'fade-in'}>
                <ApiKey activeHeader={activeHeader} />
            </div>
            <div className={activeHeader !== "SE" ? 'd-none' : 'fade-in'}>
                <SecurityIndex showSecurityDetails={showSecurityDetails} securityDetailsHandler={securityDetailsHandler} activeHeader={activeHeader} />
            </div>
        </div>
    </>
}

export default SettingsIndex