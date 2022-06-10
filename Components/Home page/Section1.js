import classes from './Section1.module.css'


const Section1 = ()=>{
    return<>
         <div className={`${classes.firstRow} row`}>
          <div className={`${classes.firstCol} col-md-7`}>
            <img src="/ellipse1.png" alt="ellipse" />
            <div className={`${classes.title}`}>
              <h1><span>ENABLING</span> LMITLESS<br/> <span> MOVEMENTS WITH</span><br /> FRICTIONLESS <span>PAYMENTS</span></h1>
              <p>Enjoy unmatched payment speed, gain new customer base, 
                tackle charge backs, avoid ridiculously high-fees. Commuters,
                goods & services move faster when you accept Crypto.
              </p>
            </div>
            <div className={classes.form}>
              <form>
                <input 
                  type="email"
                  placeholder='Enter Email to join waitlist'
                />
                <button>
                  join the waitlist
                </button>
              </form>
            </div>
            <div className={classes.img}>
              <img   src="/rectangle1.png" alt="ellipse" />
            </div>
          </div>
          <div className={`${classes.image} d-none d-md-block col-md-5`}>
            <img src="/img1.png" alt="image" />
          </div>
          <div className={`${classes.image} d-block d-md-none col-md-5`}>
            <img src="/img6.png" alt="image" />
          </div>
        </div>
    </>
}

export default  Section1