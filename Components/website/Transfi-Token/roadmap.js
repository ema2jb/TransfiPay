import classes from './roadmap.module.css'


const Roadmap =()=>{
    return<>
        <section className={classes.section}>
                <h1>OUR ROADMAP</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras turpis felis 
                    pretium est facilisi posuere congue. Nulla lectus quisque pellentesque imperdiet mi nisi, 
                </p>
                <div className={`${classes.roadmap} row `}>
                    <div className={`${classes.roadmapDetails} ${classes.firstDiv} mt-5 py-4  sky-blue-background col-lg-6`}>
                            <h1>Q1</h1>
                        {[1, 2, 3, 4].map((item, i)=> (
                            <div className={`${classes.roadmapItem} mb-3`} key={i}>
                                <div>
                                    <img src="/Icon/marked.png" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras 
                                    turpis felis pretium est. 
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={`${classes.roadmapDetails} mb-md-5 py-4  sky-blue-background col-lg-6`}>
                        <h1>Q2</h1>
                        {[1, 2, 3, 4].map((item, i)=> (
                            <div className={`${classes.roadmapItem} mb-3`} key={i}>
                                <div>
                                    <img src="/Icon/unmark.png" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras 
                                    turpis felis pretium est. 
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${classes.roadmap} row `}>
                    <div className={`${classes.roadmapDetails} ${classes.firstDiv} py-4 mt-md-5 sky-blue-background col-lg-6`}>
                        <h1>Q3</h1>
                        {[1, 2, 3, 4].map((item, i)=> (
                            <div className={`${classes.roadmapItem} mb-3`} key={i}>
                                <div>
                                    <img src="/Icon/marked.png" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras 
                                    turpis felis pretium est. 
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={`${classes.roadmapDetails} py-4 mb-md-5  sky-blue-background col-lg-6`}>
                        <h1>Q4</h1>
                        {[1, 2, 3, 4].map((item, i)=> (
                            <div className={`${classes.roadmapItem} mb-3`} key={i}>
                                <div>
                                    <img src="/Icon/unmark.png" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras 
                                    turpis felis pretium est. 
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    </>
}

export default Roadmap