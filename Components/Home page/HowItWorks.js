import classes from "./HowItWorks.module.css"


const HowItWorks = ()=>{
    return<>
        <div className={`${classes.howitworks}`}>
            <h1><span>HOW IT</span> WORKS</h1>
            <p>Getting started with TransFi can't be any easier. With only 3-step 
                process, you get fully onboarded to receive or pay with crypto. 
                It's simple, fast &apos secure.
            </p>
            <div className={`${classes.explanation} `}>
                <div>
                    <div>
                        <img src="/icon/outline/user.png" alt="image" />
                    </div>
                    <div>
                        <h3>Create an account</h3>
                        <p>Signup your business in less than 15 minutes.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/icon/outline/document-text.png" alt="image" />
                    </div>
                    <div>
                        <h3>Complete KYC process</h3>
                        <p>Fill in required information to fulfill KYC requirements.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/icon/outline/sparkles.png" alt="image" />
                    </div>
                    <div>
                        <h3>You're good to go!</h3>
                        <p>Go live and start accepting crypto payments!</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HowItWorks