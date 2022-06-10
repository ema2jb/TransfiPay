import classes from './Section3.module.css'

const Section3 =()=>{
    return<>
        <div className={`${classes.section3} row`}>
            <div className={`${classes.firstDiv} col-md-7`}>
                <div>
                    <h1><span>CREATE UNIQUE</span> APIS <span>AND</span> ASSETS</h1>
                    <p>When you get on the ride, we let you 
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
        </div>
    </>
}

export default Section3