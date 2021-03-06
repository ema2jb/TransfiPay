import { useState } from 'react'


import classes from './Navigation.module.css'
import Link from 'next/link'
import Header from './Head'

export default function Home() {

  const [toggleNav, setToggleNav] = useState(false)

  const toggle = ()=>{
    setToggleNav(prev=>!prev)
  }

  return (
    <>
    <div className="d-none d-md-block ">
      <header className={classes.header} >
        <div className={classes.div}>
            <div className={`${classes.navLogo}`}>
              <img src="/logo.png" alt="logo"/>
            </div>
            <nav style={{
              "background-image":"url('./bluebckg.png')",
              "background-position": "bottom",
              "background-size": "cover",
              "background-repeat": "no-repeat",
            }}>
                <ul>
                    <li>
                      <Link style={{textDecoration:"underline"}} href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/transfi-token">Transfi Token</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </nav>
          </div>
      </header>
    </div>
    <>
    <div className={`d-md-none ${classes.mobileHeader}`}>
      <div className={classes.mobileLogo}>
        <img src="/logo.png" alt="logo"/>
      </div>
      <div onClick={toggle} className={classes.NavIcon}>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    </>
    <>
    { 
    <div className={toggleNav? `${classes.mobileNav} ${classes.active}` : classes.mobileNav}>
    <i onClick={toggle} className="fas fa-times closes"></i>
    <img  src="/logo.png" alt="logo"/>
    <nav>
        <ul>
            <li onClick={toggle}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={toggle}>
              <Link href="/transfi-token">Transfi Token</Link>
            </li>
            <li onClick={toggle}>
              <Link href="/about">About Us</Link>
            </li>
        </ul>
    </nav>
    </div>
    }
    </>
    </>
  )
}
