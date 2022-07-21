import { useState } from 'react'

import Header from "./header"
import SubHeader from '../SubHeader'
import classes from './Settings.module.scss'

import PersonalInformation from './PersonalInformation'
import KycVerification from './KycVerification'
import ApiKey from './ApiKey'
import SecurityIndex from './Security'


const SettingsIndex = () =>{

    const [activeHeader, setActiveHeader] = useState('PI')
    const [showSecurityDetails, setShowSecurityDetails] = useState(false)

    const activeHeaderHandler = (value) =>{
        setActiveHeader(value)
    }

    const securityDetailsHandler = value => setShowSecurityDetails(value)

    return <>
        <SubHeader  mainTitle="Settings" />
        <div className={classes.settings}>
            {!showSecurityDetails && <Header activeHeader={activeHeader} activeHeaderHandler={activeHeaderHandler} />}
            <div className={activeHeader !== "PI" ? 'd-none' : 'fade-in'}>
                <PersonalInformation />
            </div>
            <div className={activeHeader !== "KV" ? 'd-none' : 'fade-in'}>
                <KycVerification />
            </div>
            <div className={activeHeader !== "AK" ? 'd-none' : 'fade-in'}>
                <ApiKey activeHeader={activeHeader} />
            </div>
            <div className={activeHeader !== "SE" ? 'd-none' : 'fade-in'}>
                <SecurityIndex securityDetailsHandler={securityDetailsHandler} activeHeader={activeHeader} />
            </div>
        </div>
    </>
}

export default SettingsIndex