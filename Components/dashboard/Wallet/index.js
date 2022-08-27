import {useState} from 'react'

import WalletHome from "./WalletHome"
import WalletHistory from "./WalletHistory"


const WalletIndex = ()=>{

    const [showHistory, setShowHistory] = useState(true)

    const showHistoryHandler = (value) =>{
        setShowHistory(value)
    }

    return <>

        <div className={!showHistory && 'd-none'}>
            <WalletHome showHistoryHandler={showHistoryHandler} />
        </div>
        <div className={showHistory && "d-none"}>
            <WalletHistory showHistoryHandler={()=>showHistoryHandler(true)} />
        </div>

    </>
}

export default WalletIndex