import classes from './Section2.module.css'

const Section2 =()=>{
    return <>
        <section className={`row`}>
            <div className={`${classes.firstDiv} order-2 order-md-1 col-md-6`}>
                <img src="/img2.png" alt="section2 Image" />
            </div>
            <div className={`${classes.secondDiv} order-1 order-md-2 col-md-6`}>
                <div>
                    <h1
                        data-aos="fade-left" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>SEND & RECIEVE</span> PAYMENTS <span>IN</span> CRYPTO</h1>
                    <p
                    data-aos="fade-left" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1500"
                    data-aos-once = "true"
                    > When payment moves faster, business
                        moves faster. With a few clicks, your 
                        customers pay for your service from anywhere 
                        around the world and you receive it in less 
                        than 5 mins!
                    </p>
                    <h3
                    data-aos="fade-left" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1900"
                    data-aos-once = "true"
                    >Send and Receive From Over 10+ Crypto & Stablecoin</h3>
                    <div 
                        data-aos="fade" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1900"
                        data-aos-once = "true"
                    className={`${classes.imageRow}`}>
                        <img src="/img4.png" alt="coin"/>
                        <img src="/img3.png" alt="coin"/>
                        <img src="/img5.png" alt="coin"/>
                        <img src="/frame1.png" alt="coin"/>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Section2