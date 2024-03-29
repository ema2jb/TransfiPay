import classes from './PaymentAndApi.module.css'


const PaymentAndApi = () =>{
    return <>
        <section className={`row`}>
            <div className={`col-md-6 order-2 order-sm-1`}>
                <div className="content">
                    <h2
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>Flexible</span> Payment Bridge</h2>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    >From BTC to USDT or from USD 
                        to ETH, our bridge helps you 
                        to move in between currencies 
                        in less than 2 mins. Crypto to 
                        crypto, crypto to fiat, fiat to 
                        crypto. It's fast, efficient &apos secure.
                    </p>
                </div>
            </div>
            <div className={`image col-md-6 order-1 order-sm-2 mb-5 mb-md-0`}>
                <img src="/mockup5.png" alt="image"/>
            </div>
        </section>
        <section className={`sky-blue-background row`}>
            <div className={`image col-md-6 mt-3 mt-sm-0  mb-5 mb-md-0`}>
                <img src="/mockup7.png" alt="image"/>
            </div>
            <div className={`col-md-6`}>
                <div className="content">
                    <h2 data-aos="fade-left" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                        ><span>Unique</span> Payment Link</h2>
                    <p
                        data-aos="fade-left" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    >Works for everyone. Both Businesses and individuals. Create a link, 
                        customize it to fit your brand colors if you wish, share your link via email, 
                        SMS or any other means, get paid from over 10+ Cryptocurrencies & Stablecoins. 
                    </p>
                </div>
            </div>
        </section>
        <section className={`row`}>
            <div className={`col-md-6 order-2 order-sm-1`}>
                <div className="content">
                    <h1
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>Instant</span> API’s</h1>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    >Customize exactly how you want to accept payment. With our easy to use 
                        developer's document, we help you make modifications to customers deposit 
                        and checkout experience.
                    </p>
                </div>
            </div>
            <div className={`image col-md-6 mt-3 mt-sm-0  order-1 order-sm-2 mb-5 mb-md-0`}>
                <img src="/mockup6.png" alt="image"/>
            </div>
        </section>
    </>
}

export default PaymentAndApi