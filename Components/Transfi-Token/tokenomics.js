import classes from './tokenomics.module.css'


const Tokenommics =()=>{
    return <>
        <section className={classes.tokenomicsbreakdown}>
            <div className={classes.firstDiv}>
                <h1><span>TOKENOMICS</span> BREAKDOWN</h1>
                <p>Understand everything about $TFT economics. All of the allocations stated. All of 
                    the use of funds made transparent.
                </p>
            </div>
            <div className={`${classes.tokenomics} row`}>
                <div className="col-md-6 ">
                    <div className="sky-blue-background">
                        <h3 className="mt-5">TRANSFI Token Allocation</h3>
                        <div className={`${classes.breakdown} row px-2`}>
                            <div className="col-lg-6 mt-2 order-2 order-md-1 ">
                                <p ><span className={`${classes.span1}`}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span2}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span3}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span4}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span5}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span6}></span>  10% Lorem ipsum monesterea</p>
                            </div>
                            <div className="col-lg-6 mb-4 mb-md-0 order-1 order-md-2 ">
                                <img src="./Token-chart-3.png" alt="token-chart" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sky-blue-background">
                        <h3 className="mt-5">Use of Sale Proceed</h3>
                        <div className={`${classes.breakdown} row px-2`}>
                            <div className="col-lg-6 order-2 order-md-1 mt-2">
                                <p><span className={classes.span1}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span2}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span3}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span4}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span5}></span>  10% Lorem ipsum monesterea</p>
                                <p><span className={classes.span6}></span>  10% Lorem ipsum monesterea</p>
                            </div>
                            <div className="col-lg-6 mb-4 mb-md-0 order-1 order-md-2">
                                <img src="./Token-chart-3.png" alt="token-chart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.tokenInformation} row `}>
                <div className={`${classes.titleDetails} ${classes.firstDiv} py-4  sky-blue-background col-lg-6`}>
                    <div  className="">
                        <p className={classes.title}>Token name</p>
                        <p className={classes.details}>Transfi Token</p>
                    </div>
                    <div>
                        <p className={classes.title}>Initial Circulating Supply</p>
                        <p className={classes.details}>37.5M</p>
                    </div>
                    <div>
                        <p className={classes.title}>INITIAL MARKET CAP</p>
                        <p className={classes.details}>$1.5M</p>
                    </div>
                    <div>
                        <p className={classes.title}>ESTIMATED LISTING</p>
                        <p className={classes.details}>Q1 2022</p>
                    </div>
                </div>
                <div className={`${classes.titleDetails} py-4  sky-blue-background col-lg-6`}>
                    <div>
                        <p className={classes.title}>Token type</p>
                        <p className={classes.details}>ERC20(Polygon)</p>
                    </div>
                    <div>
                        <p className={classes.title}>TGE TOKEN PRICE</p>
                        <p className={classes.details}>$0.040</p>
                    </div>
                    <div>
                        <p className={classes.title}>HARD CAP</p>
                        <p className={classes.details}>$6.5M</p>
                    </div>
                    <div>
                        <p className={classes.title}>TOTAL SUPPLY</p>
                        <p className={classes.details}>1.5 BILLION</p>
                    </div>
                </div>
            </div>
            <div className={`${classes.allocation} sky-blue-background`}>
                <div className="mb-4">
                    <h3>Allocation</h3>
                    <h3>Vesting</h3>
                </div>
                <div className={classes.allocationItem}>
                    <h4>SEED</h4>
                    <p >Vests daily over 22 months, beginning day 61 after listing (approx. 5% per month)</p>
                </div>
                <div className={classes.allocationItem}>
                    <h4 >Private</h4>
                    <p >Vests daily over 17 months, beginning day 31 after listing (approx. 6% per month)</p>
                </div>
                <div className={classes.allocationItem}>
                    <h4>Advisors</h4>
                    <p>Vests daily over 60 months, beginning day 91 after listing (approx. 2% per month)</p>
                </div>
                <div className={classes.allocationItem}>
                    <h4>Team</h4>
                    <p>Vests daily over 50 months, beginning day 181 after listing (approx. 2% per month)</p>
                </div>
                <div className={classes.allocationItem}>
                    <h4>Ecosystem & Referrals</h4>
                    <p>Vests daily over 57 months, beginning day 91 after listing (approx. 2% per month)</p>
                </div>
            </div>
        </section>
    </>
}

export default Tokenommics