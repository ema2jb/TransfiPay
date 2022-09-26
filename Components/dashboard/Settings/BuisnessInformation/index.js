import { useState } from 'react'



import Tier1 from './Tier1'
import Tier2 from './Tier2'
import BuisnessInformation from './BuisnessInformation'
import BuisnessInformation1 from './BuisnessInformation1'





const BizInfoIndex = ({showBizInfoTiersHandler, tier, tierHandler}) =>{

    return <>
        <div>
            <div className={tier!=="bizInfo"  && 'd-none'}>
                <BuisnessInformation tierHandler={tierHandler} showBizInfoTiersHandler={showBizInfoTiersHandler} />
                {/*<BuisnessInformation1 />*/}
            </div>
            <div className={tier!=="tier1"  && 'd-none'}>
                <Tier1 />
            </div>
            <div className={tier!=="tier2"  && 'd-none'}>
                <Tier2 tierHandler={tierHandler} />
            </div>
        </div>
    </>
}

export default BizInfoIndex