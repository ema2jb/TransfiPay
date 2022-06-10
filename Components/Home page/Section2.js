import classes from './Section2.module.css'

const Section2 =()=>{
    return <>
        <div className={`${classes.section2} row`}>
            <div className={`${classes.firstDiv} order-2 order-md-1 col-md-6`}>
                <img src="/img2.png" alt="section2 Image" />
            </div>
            <div className={`${classes.secondDiv} order-1 order-md-2 col-md-6`}>
                <div>
                    <h1><span>SEND & RECIEVE</span> PAYMENTS <span>IN</span> CRYPTO</h1>
                    <p> When payment moves faster, business
                        moves faster. With a few clicks, your 
                        customers pay for your service from anywhere 
                        around the world and you receive it in less 
                        than 5 mins!
                    </p>
                    <h3>Send and Receive From Over 10+ Crypto & Stablecoin</h3>
                    <div className={`${classes.imageRow}`}>
                        <img src="/img4.png" alt="coin"/>
                        <img src="/img3.png" alt="coin"/>
                        <img src="/img5.png" alt="coin"/>
                        <img src="/frame1.png" alt="coin"/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Section2