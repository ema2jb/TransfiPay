import classes from './UsabilityInsights.module.css'

const UsabilityInsights = ()=>{
    return<>
        <section className={`${classes.section} sky-blue-background`}>
            <div className={`${classes.usabilityInsights}`}>
                <h1><span>USABILITY</span>  INSIGHTS</h1>
                <p>Benefit of all that the utility token of 
                    TransFi payment system and ecosystem brings. Accepting, owning, 
                    holding or staking it confers innate benefits as well as reward benefits.
                </p>
            </div>
            <div className={`${classes.explainUsability} row px-md-5 py-md-5 `}>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`mb-3`}>
                        <img src="/Icon/Icon1.png" />
                    </div>
                    <div >
                        <h3 className='mb-3'>Zero fees</h3>
                        <p> When you accept or pay with $TFT, you 
                            get charged little to nothing compared to other Crypto. 
                        </p>
                    </div>
                </div>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`mb-3`}>
                        <img src="/Icon/Icon2.png" />
                    </div>
                    <div className='mb-3'>
                        <h3>Refferal Rewards</h3>
                        <p>Customers and Businesses get rewards 
                            for referring friends, businesses & associates to 
                            leverage TransFi to receive crypto payment
                        </p>
                    </div>
                </div>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`mb-3`}>
                        <img src="/Icon/Icon.png" />
                    </div>
                    <div>
                        <h3 className='mb-3'>Transaction Rewards</h3>
                        <p>Users of our platform (individuals & Businesses) get rewarded 
                            based on transaction volume, whether it is sent or received.
                        </p>
                    </div>
                </div>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`${classes.imageCard} mb-3`}>
                        <img src="/Icon/Icon6.png" />
                    </div>
                    <div>
                        <h3 className='mb-3'>Cash-back Rewards</h3>
                        <p> For holding $TFT, users of TransFi get rebates for every payment processed.
                        </p>
                    </div>
                </div>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`mb-3`}>
                        <img src="/Icon/Icon5.png" />
                    </div>
                    <div >
                        <h3 className='mb-3'>Issue Gift Cards</h3>
                        <p>Through our gift card feature, businesses can 
                            reward specific high value customers with $TFT and TransFi will top the reward up.
                        </p>
                    </div>
                </div>
                <div className={`${classes.card} col-md-3 mx-md-5 my-3 my-md-4`}>
                    <div className={`mb-3`}>
                        <img src="/Icon/Icon3.png" />
                    </div>
                    <div>
                        <h3 className='mb-3'>Staking Rewards</h3>
                        <p>Add liquidity to our pool. Stake your $TFT and earn more coins</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default UsabilityInsights