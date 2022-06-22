

const authSlider = ()=>{
    return<>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="3000" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
            <div className="carousel-inner">
                <div className="carousel-item first-item active">
                <img className="d-block w-100" src="/dashboard/authSliderImage1.png" alt="First slide" />
                <div className="">
                    <h1>Send and Receive From Over 10+ Crypto & Stablecoin</h1>
                    <p>
                        Whether you’re a trader, merchant, developer, or 
                        someone that loves crypto
                    </p>
                    <div className="imageRow">
                        <img src="/img4.png" alt="coin"/>
                        <img src="/img3.png" alt="coin"/>
                        <img src="/img5.png" alt="coin"/>
                        <img src="/frame1.png" alt="coin"/>
                    </div>
                </div>
                </div>
                <div className="carousel-item second-item">
                <img className="d-block w-100" src="/dashboard/authSliderImage2.png" alt="Second slide" />
                <div className="">
                    <h1>Enabling Limitless Movements With Frictionless Payments</h1>
                    <p> 
                        Whether you’re a trader, merchant, developer, or 
                        someone that loves crypto
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
}

export default authSlider