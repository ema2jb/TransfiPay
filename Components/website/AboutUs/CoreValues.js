import classes from './CoreValues.module.css'

const CoreValues = ()=>{
    return<>
        <div className={classes.coreValues}>
            <div className={classes.bckg2}>
                <img src="/bckg2.png" alt="ellipse" />
            </div>
            <h1 
                 data-aos="fade-down" 
                 data-aos-easing="ease-in"
                 data-aos-duration="1000"
                 data-aos-once = "true"
            className="mb-3"><span>OUR CORE</span> VALUES</h1>
            <p
                 data-aos="fade-down" 
                 data-aos-easing="ease-in"
                 data-aos-duration="1000"
                 data-aos-once = "true"
            >At TransFi, what keeps us right on 
                track are the value we allow to guide us. 
                In times of success or challenges, these values keep us going.
            </p>
            <div className={classes.values}>
                <div
                    data-aos="slide-up" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                >
                    <h3 className="mb-3">Transparency</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, 
                        whether it is sent or received. 
                    </p>
                </div>
                <div
                    data-aos="slide-up" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1500"
                    data-aos-once = "true"
                >
                    <h3 className="mb-3">Reliability</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, whether it is sent or received.  
                    </p>
                </div>
                <div
                    data-aos="slide-up" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1900"
                    data-aos-once = "true"
                >
                    <h3 className="mb-3">Transaction Rewards</h3>
                    <p>Users of our platform 
                        (individuals & Businesses) get rewarded based on transaction volume, whether it is sent or received.   
                    </p>
                </div>
            </div>
            <div className={classes.bckg1}>
                <img src="/bckg1.png" alt="ellipse" /> 
            </div>
        </div>
    </>
}

export default CoreValues