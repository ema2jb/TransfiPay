import classes from './WhatIsTransfi.module.css'


const WhatIsTransfi = ()=>{
    return<>
        <section className="">
            <div className={`${classes.whatIsTransfi} row`}>
                <div className={`${classes.transfidefinition} col-md-6`}>
                    <h1><span>WHAT IS</span> TRANSFI TOKEN</h1>
                    <p>Getting and doing the most on TransFi is tied to $TFT. 
                        It can be bought or sold like any other Crypto. It plays a 
                        crucial role in the system not just as a means of payment but 
                        also as a driver of TransFi vision.
                    </p>
                    <div className="row mt-5">
                        <button className="col-md-6 defaultBtn">
                            Join the community
                        </button>
                        <button className="col-md-6 transparentBtn">
                            <img src="/icon/icon7.png" alt="icon" /> Download the whitepaper
                        </button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img className={classes.image} src='./hand-transfi-coin.png' alt="transfi-coin" />
                </div>
            </div>
        </section>
    </>
}

export default WhatIsTransfi