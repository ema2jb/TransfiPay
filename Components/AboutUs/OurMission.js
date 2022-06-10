import classes from './OurMission.module.css'

const OurMission = ()=>{
    return<>
        <div className=" row ">
                <div className={`${classes.ourMission} col-md-7`}>
                    <h1 className="mb-3"><span>OUR MISSION</span> IS TO BRIDGE THE CRYPTO GAP</h1>
                    <p>To contribute to the drive of global crypto adoption by helping 
                        businesses and individuals experience limitless potentials with 
                        frictionless and borderless crypto payment solutions.
                    </p>
                </div>
                <div className={`${classes.globeImage} col-md-5 `}>
                    <img src="/Vector (9).png" alt="logo" />
                </div>
        </div>
    </>
}

export default OurMission