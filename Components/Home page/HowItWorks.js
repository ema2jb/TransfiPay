import classes from "./HowItWorks.module.css"


const HowItWorks = ()=>{
    return<>
        <section className={`${classes.howitworks}`}>
            <h1
                data-aos="fade-down" 
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-once = "true"
            ><span>HOW IT</span> WORKS</h1>
            <p
                data-aos="fade-down" 
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-once = "true"
            >Getting started with TransFi can't be any easier. With only 3-step 
                process, you get fully onboarded to receive or pay with crypto. 
                It's simple, fast &apos secure.
            </p>
            <div className={`${classes.explanation} `}>
                <div
                    data-aos="fade" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                >
                    <div>
                        <img src="/Icon/user.png" alt="image" />
                    </div>
                    <div>
                        <h3>Create an account</h3>
                        <p>Signup your business in less than 15 minutes.</p>
                    </div>
                </div>
                <div
                    data-aos="fade" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                >
                    <div>
                        <img src="/Icon/document-text.png" alt="image" />
                    </div>
                    <div>
                        <h3>Complete KYC process</h3>
                        <p>Fill in required information to fulfill KYC requirements.</p>
                    </div>
                </div>
                <div
                    data-aos="fade" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                >
                    <div>
                        <img src="/Icon/sparkles.png" alt="image" />
                    </div>
                    <div>
                        <h3>You're good to go!</h3>
                        <p>Go live and start accepting crypto payments!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HowItWorks