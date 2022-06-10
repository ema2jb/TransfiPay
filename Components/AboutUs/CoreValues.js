import classes from './CoreValues.module.css'

const CoreValues = ()=>{
    return<>
        <section className={classes.coreValues}>
            <h1 className="mb-3"><span>OUR CORE</span> VALUES</h1>
            <p>At TransFi, what keeps us right on 
                track are the value we allow to guide us. 
                In times of success or challenges, these values keep us going.
            </p>
            <div className={classes.values}>
                <div>
                    <h3 className="mb-3">Transparency</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, 
                        whether it is sent or received. 
                    </p>
                </div>
                <div>
                    <h3 className="mb-3">Reliability</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, whether it is sent or received.  
                    </p>
                </div>
                <div>
                    <h3 className="mb-3">Transaction Rewards</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, whether it is sent or received.   
                    </p>
                </div>
            </div>
        </section>

    </>
}

export default CoreValues