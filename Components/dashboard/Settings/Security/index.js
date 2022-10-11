import {useState} from 'react'

import classes from '../Settings.module.scss'
import Security from './Security'
import ChangePassword from './ChangePassword'
import ChangeEmail from './ChangeEmail'
import ChangePin from './ChangePin'
import TwoFactorVerification from './TwoFactorVerification'


const SecurityIndex = ({showSecurityDetails, securityDetailsHandler}) =>{

    const [show, setShow] = useState('')

    const showHandler = value => setShow(value)

    return <>
        <div className={classes.security}>
            <div className={showSecurityDetails && 'd-none'}>
                <Security securityDetailsHandler={securityDetailsHandler} showHandler={showHandler} />
            </div>
            <div className={show !== 'changeEmail'? 'd-none' : "fade-in"}>
                <ChangeEmail securityDetailsHandler={securityDetailsHandler} showHandler={showHandler} />
            </div>
            <div className={show !== 'changePassword'? 'd-none' : "fade-in"}>
                <ChangePassword securityDetailsHandler={securityDetailsHandler} showHandler={showHandler} />
            </div>
            <div className={show !== 'changePin' ? 'd-none' : "fade-in"}>
                <ChangePin securityDetailsHandler={securityDetailsHandler} showHandler={showHandler} />
            </div>
            <div className={show !== '2FA' ? 'd-none' : "fade-in"}>
                <TwoFactorVerification securityDetailsHandler={securityDetailsHandler} showHandler={showHandler} />
            </div>
        </div>
    </>
}

export default SecurityIndex