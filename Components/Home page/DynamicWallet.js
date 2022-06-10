import classes from './DynamicWallet.module.css'


const DynamicWallet = () =>{
    return<>
        <div className={`${classes.dynamicwallet}`}>
            <div className={`${classes.firstDiv}`}>
                <h1>ONE <span>LINK</span>. ONE <span>BUTTON</span></h1>
                <p>With zero-knowledge, we make
                    receiving, saving, storing or 
                    transferring crypto seamless and 
                    instant for you and your customers.
                    Activation is seamless, set-up is easy, settlement is daily.
                </p>
            </div>
            <div className={`${classes.firstRow} row`}>
                <div className={`image col-md-6 mb-5`}>
                    <img src="/mockup4.png" alt="mockup" />
                </div>
                <div className={`${classes.wallet} col-md-6`}>
                    <h1><span>Dynamic</span> Wallet</h1>
                    <p>With our dynamic wallet system, you can 
                        deposit, withdraw, or hold supported Cryptocurrencies.
                        Easily transfer funds and settle contractors & affiliates. 
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default DynamicWallet