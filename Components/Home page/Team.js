import classes from './Team.module.css'


const Team =()=>{
    return<>
        <section>
            <div className={classes.serviceteam}>
                <h1 
                    data-aos="fade-down" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true"
                ><span>AT YOUR</span> SERVICE</h1>
                <div
                    data-aos="fade-down" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1000"
                    data-aos-once = "true" 
                 className={classes.ourteam}>
                    <hr />
                    <span>Our Team</span>
                    <hr />
                </div>
            </div>
            <div className={classes.teammembers}>
                <div
                     data-aos="flip-right" 
                     data-aos-easing="ease-in"
                     data-aos-duration="1000"
                     data-aos-once = "true"
                >
                    <img src="/team1.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div
                    data-aos="flip-right" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1300"
                    data-aos-once = "true"
                >
                    <img src="/team2.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div
                    data-aos="flip-right" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1500"
                    data-aos-once = "true"
                >
                    <img src="/team3.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div
                    data-aos="flip-right" 
                    data-aos-easing="ease-in"
                    data-aos-duration="1900"
                    data-aos-once = "true"
                >
                    <img src="/team4.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
            </div>
            <div className={classes.btn}>
                <button className="px-4 mt-3 mb-3 mb-md-0 defaultBtn">
                    Learn more about us
                </button>
            </div>
        </section>
    </>
}

export default Team