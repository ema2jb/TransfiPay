import classes from './Team.module.css'


const Team =()=>{
    return<>
        <section>
            <div className={classes.serviceteam}>
                <h1><span>AT YOUR</span> SERVICE</h1>
                <div className={classes.ourteam}>
                    <hr />
                    <span>Our Team</span>
                    <hr />
                </div>
            </div>
            <div className={classes.teammembers}>
                <div>
                    <img src="/team1.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div>
                    <img src="/team2.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div>
                    <img src="/team3.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
                <div>
                    <img src="/team4.png" alt="team member" />
                    <p>coo</p>
                    <h3>John Doe</h3>
                </div>
            </div>
        </section>
    </>
}

export default Team