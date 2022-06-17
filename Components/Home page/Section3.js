import classes from './Section3.module.css'

const Section3 =()=>{
    return<>
        <section className={`${classes.section3} row`}>
            <div className={`${classes.firstDiv} col-md-7`}>
                <div>
                    <h1 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>CREATE UNIQUE</span> APIS <span>AND</span> ASSETS</h1>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1500"
                        data-aos-once = "true"
                    >When you get on the ride, we let you 
                        tell us exactly how you want your funds 
                        remitted. Whether you accept BTC, ETH, 
                        USDT or BUSD, you can choose to get paid 
                        in any crypto, fiat equivalent, or both.
                    </p>
                </div>
            </div>
            <div className={`${classes.secondDiv} col-md-5`}>
                <img src="/mockup3.png" alt="image"/>
            </div>
        </section>
    </>
}

export default Section3