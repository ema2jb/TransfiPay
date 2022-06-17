import classes from './Partners.module.css'

const Partners =()=>{
    return<>
        <section className={classes.ourPartners}>
            <h1
                data-aos="zoom-in" 
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-once = "true"
            ><span>OUR</span> PARTNERS</h1>
            <div className={classes.partners}>
                <img src="/partners1.png" alt=""/>
                <img src="/partners2.png" alt=""/>
                <img src="/partners3.png" alt=""/>
                <img className="d-none d-md-block" src="/partners4.png" alt=""/>
            </div>
        </section>
    </>
}

export default Partners