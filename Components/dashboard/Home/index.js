import { useState } from "react"
import Link from 'next/link'

import {FiEyeOff} from "react-icons/fi"
import {FiEye} from "react-icons/fi"
import {BsChevronRight} from "react-icons/bs"

import classes from "./Home.module.scss"
import SubHeader from "../SubHeader"




const Home =()=>{

    const [seeBalance, setSeeBalance] = useState(false)

    return<>
        <SubHeader mainTitle="Dashboard" />
        <div className={classes['wallet-row']}>
            <div className={` ${classes.wallet}`}>
                <div className={classes['wallet-balance']}>
                    <p>Total Wallet Balance <span><i>{!seeBalance ? <FiEyeOff /> : <FiEye/> }</i></span></p>
                    <h1 className="mt-2">5000.00 <span>USD</span></h1>
                </div>
                <div className={`mt-4 ${classes['last-div']}`}>
                    <p>Go to Wallet <span><BsChevronRight /></span></p>
                </div>
            </div>
            <div className={`${classes['sell-product']}`}>
                <div className={classes.sell}>
                    <p>Sell a Product</p>
                    <p>Create payment links for your products easliy here</p>
                </div>
                <i><BsChevronRight /></i>
            </div>
        </div>
        <div className={classes['link-row']}>
            <div className={`${classes['create-link']}`}>
                <div>
                    <p>Payment Links</p>
                    <p>Get a unique link to recieve payments on any platform</p>
                </div>
                <div>
                <Link href="/dashboard/biz-tools/sell"><button className="btn-default">Create a link</button></Link>
                </div>
            </div>
        </div>
    </>
}


export default Home