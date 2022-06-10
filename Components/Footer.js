import classses from './Footer.module.css'
import Vector from '../public/Icon/Vector.png'

const Footer = ()=>{
    return<>
    <div className='footer-wrapper'>
        <div>
            <div className="footer row px-3 px-md-5">
                <div className="image col-md-5">
                    <img src="/logo1.png" alt="logo" />
                </div>
                
                <div className='home px-4 col-md-2 mt-4'>
                    <p>Home</p>
                    <p>Mobile App</p>
                    <p>Token</p>
                </div>

                <div className="px-4 col-md-2 mt-4">
                    <p>Company</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='socialVectors px-4 col-md-3'>
                    <h4>Socials</h4>
                    <div className='socials'>
                    <div><img src="/Vector (4).png" alt="logo" /></div>
                    <div><img src="/Vector (5).png" alt="logo" /></div>
                    <div><img src="/Vector (6).png" alt="logo" /></div>
                    <div><img src="/Vector (7).png" alt="logo" /></div>
                    <div><img src="/Vector (8).png" alt="logo" /></div>
                    </div>
                </div>
            </div>
            <p className='copywright'>2022 Transfi. All Rights Reserved </p>
        </div>
            <img className="" src="/Icon/Vector.png" alt="logo" />
    </div>
    </>
}

export default Footer