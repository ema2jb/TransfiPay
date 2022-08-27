import WhatIsTransfi from "../Components/website/Transfi-Token/WhatIsTransfi"
import UsabilityInsights from "../Components/website/Transfi-Token/UsabilityInsights"
import Tokenommics from "../Components/website/Transfi-Token/tokenomics"
import Roadmap from "../Components/website/Transfi-Token/roadmap"
import Layout from "../Components/website/Layout";

const TransfiTokenPage = ()=>{
    return<>
        <Layout>
            <WhatIsTransfi />
            <UsabilityInsights />
            <Tokenommics />
            <Roadmap />
        </Layout>
    </>
}

export default TransfiTokenPage