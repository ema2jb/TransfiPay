import  classes from './Advisers.module.css'

const Advisers = ()=>{
    return <>
        <section className={classes.teamMembers}>
            <div className={`${classes.team} row`}>
                <div className={` col-md-6`}>
                    <h1 
                        data-aos="fade-right" 
                        data-aos-easing="ease-in"
                        data-aos-duration="1000"
                        data-aos-once = "true"
                    className="mt-4"><span>MEET OUR</span> ADVISERS</h1>
                    <p
                       data-aos="fade-right" 
                       data-aos-easing="ease-in"
                       data-aos-duration="1000"
                       data-aos-once = "true"
                    > Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Sit cras turpis felis pretium est 
                        facilisi posuere congue. Nulla lectus quisque pellentesque 
                        imperdiet mi nisi, sit. Cursus feugiat sapien proin elit convallis 
                        in magna proin. Ut id.
                    </p>
                </div>
                <div className={`${classes.teamPics} col-md-6`}>
                    <div className="row">
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team1.png" alt="team" />
                        </div>
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team2.png" alt="team" />
                        </div>
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team3.png" alt="team" />
                        </div>
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team4.png" alt="team" />
                        </div>
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team5.png" alt="team" />
                        </div>
                        <div 
                            data-aos="flip-right" 
                            data-aos-easing="ease-in"
                            data-aos-duration="1000"
                            data-aos-once = "true"
                        className="col-4">
                            <img src="/team6.png" alt="team" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bckg3}>
                <img src="/bckg3.png" alt="ellipse" />
            </div>
        </section>
    </>
}

export default Advisers