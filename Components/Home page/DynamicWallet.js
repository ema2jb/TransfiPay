import classes from './DynamicWallet.module.css'


const DynamicWallet = () =>{
    return<>
        <section className={`${classes.dynamicwallet}`}>
            <div className={`${classes.firstDiv}`}
                >
                <h1
                    data-aos="fade-down" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                >ONE <span>LINK</span>. ONE <span>BUTTON</span></h1>
                <p
                    data-aos="fade-down" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                >With zero-knowledge, we make
                    receiving, saving, storing or 
                    transferring crypto seamless and 
                    instant for you and your customers.
                    Activation is seamless, set-up is easy, settlement is daily.
                </p>
            </div>
            <div className={`${classes.firstRow} row`}>
                <div className={`image col-md-6`}>
                    <img src="/mockup4.png" alt="mockup" />
                </div>
                <div className={`${classes.wallet} col-md-6`}>
                    <h1
                        data-aos="fade-left" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>Dynamic</span> Wallet</h1>
                    <p
                        data-aos="fade-left" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    >With our dynamic wallet system, you can 
                        deposit, withdraw, or hold supported Cryptocurrencies.
                        Easily transfer funds and settle contractors & affiliates. 
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default DynamicWallet