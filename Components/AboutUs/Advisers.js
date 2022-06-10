import  classes from './Advisers.module.css'

const Advisers = ()=>{
    return <>
        <section className={classes.teamMembers}>
            <div className={`${classes.team} row`}>
                <div className={` col-md-6`}>
                    <h1 className="mt-4"><span>MEET OUR</span> ADVISERS</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Sit cras turpis felis pretium est 
                        facilisi posuere congue. Nulla lectus quisque pellentesque 
                        imperdiet mi nisi, sit. Cursus feugiat sapien proin elit convallis 
                        in magna proin. Ut id.
                    </p>
                </div>
                <div className={`${classes.teamPics} col-md-6`}>
                    <div className="row">
                        <div className="col-4">
                            <img src="/adviser1.png" alt="team" />
                        </div>
                        <div className="col-4">
                            <img src="/adviser2.png" alt="team" />
                        </div>
                        <div className="col-4">
                            <img src="/adviser3.png" alt="team" />
                        </div>
                        <div className="col-4">
                            <img src="/adviser4.png" alt="team" />
                        </div>
                        <div className="col-4">
                            <img src="/team5.png" alt="team" />
                        </div>
                        <div className="col-4">
                            <img src="/team6.png" alt="team" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Advisers