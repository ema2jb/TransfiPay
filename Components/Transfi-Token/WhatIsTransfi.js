import classes from './WhatIsTransfi.module.css'


const WhatIsTransfi = ()=>{
    return<>
        <section className="">
            <div className={`${classes.whatIsTransfi} row`}>
                <div className={`${classes.transfidefinition} col-md-8`}>
                    <h1 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>WHAT IS</span> TRANSFI TOKEN</h1>
                    <p
                         data-aos="fade-right" 
                         data-aos-easing="ease-in"
                         data-aos-duration="1000"
                         data-aos-once = "true"
                    >Getting and doing the most on TransFi is tied to $TFT. 
                        It can be bought or sold like any other Crypto. It plays a 
                        crucial role in the system not just as a means of payment but 
                        also as a driver of TransFi vision.
                    </p>
                    <div className={`${classes.buttons} row mt-5`}>
                        <button className="col-md-5 mx-2 defaultBtn">
                            Join the community
                        </button>
                        <button className="col-md-5 mx-2 transparentBtn">
                            <img src="/Icon/Icon7.png" alt="icon" /> Download the whitepaper
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className={classes.image} src='./hand-transfi-coin.png' alt="transfi-coin" />
                </div>
            </div>
        </section>
    </>
}

export default WhatIsTransfi