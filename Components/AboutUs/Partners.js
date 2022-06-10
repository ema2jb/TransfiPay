import classes from './Partners.module.css'

const Partners =()=>{
    return<>
        <section className={classes.ourPartners}>
            <h1><span>OUR</span> PARTNERS</h1>
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