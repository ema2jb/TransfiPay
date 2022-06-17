import classes from "./JoinWaitlist.module.css"


const JoinWaitlist = () =>{
        return<>
            <section className={`${classes.firstRow}  row sky-blue-background`}>
                <div className={`${classes.firstCol} col-md-7`}>
                    <div className={`${classes.title}`}>
                    <h1 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    ><span>JOIN THE</span> WAITLIST</h1>
                    <p
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    >Join hundreds of individuals and businesses leveraging frictionless and 
                        borderless crypto payment to enable limitless movement. Set up is free and takes less than 5mins.
                    </p>
                    </div>
                    <div className={classes.form}>
                    <form>
                        <input 
                        type="email"
                        placeholder='Enter Email'
                        />
                        <button>
                        join the waitlist
                        </button>
                    </form>
                    </div>
                </div>
                <div className={` ${classes.image} d-none d-md-block col-md-5`}>
                    <img className="" src="/Icon/mail.png" alt="image" />
                </div>
            </section>
        </>

}


export default JoinWaitlist