import { useState } from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'

import {BsChevronRight} from "react-icons/bs"
import {AiOutlineHome, AiOutlinePlus, AiOutlineShopping} from "react-icons/ai"
import { HiOutlineColorSwatch, HiOutlineRefresh } from "react-icons/hi";
import { FiLink, FiUsers, FiDatabase } from "react-icons/fi";
import { BiCube, BiCog, BiLogOut } from "react-icons/bi"

const SideBar = ()=>{
    const router = useRouter()
    const [showBuisTools, setShowBuisTools] = useState(false)

    const showBuisToolsHandler = () =>{
        setShowBuisTools(prev=>!prev)
    }

    const isActive = (pathname)=>{
        if(router.pathname === pathname){
            return true
        }
        return false
    }

    return<>
        <div className="sidebar-content">
            <div className="logo">
               <h1>Trans<span>Fi</span></h1>
            </div>
            <div className="kyc">
                <h5>KYC Verification <span>(80%)</span></h5>
                <p>Complete KYC verification</p>
                <i><BsChevronRight /></i>
            </div>
            <div className="navigation">
                <div className={`nav-item ${isActive('/dashboard') && "active"}`}>
                    <i><AiOutlineHome/></i>
                    <Link href="/dashboard"><p>Home</p></Link>
                </div>
                <div className={`nav-item ${isActive('/dashboard/wallet') && "active"}`}>
                    <i><HiOutlineColorSwatch /></i>
                    <Link href="/dashboard/wallet"><p>Wallet</p></Link>
                </div>
                <div className={`nav-item ${isActive('/dashboard/payment-link') && "active"}`}>
                    <i><FiLink /></i>
                    <Link href="/dashboard/payment-link"><p>Payment Link</p></Link>
                </div>
                <div className={`nav-item ${isActive('/dashboard/swap') && "active"}`}>
                    <i><HiOutlineRefresh /></i>
                    <Link href="/dashboard/swap"><p>Swap</p></Link>
                </div>
                <div onClick={showBuisToolsHandler} className={`buis-tools-btn nav-item ${showBuisTools ? " show" : ""}`}>
                    <p>Business Tools</p>
                    <i className={showBuisTools ? "rotate" : ""}><AiOutlinePlus /></i>
                </div>
                <div className={showBuisTools ? "buis-tools show" : "buis-tools"}>
                    <div className={`nav-item ${isActive('/dashboard/biz-tools/sell') && "active"}`}>
                        <i><AiOutlineShopping /></i>
                        <Link href="/dashboard/biz-tools/sell"><p>Sell a product</p></Link>
                    </div>
                    <div className={`nav-item ${isActive('/dashboard/biz-tools/customers') && "active"}`}>
                        <i><FiUsers /></i>
                        <Link href="/dashboard/biz-tools/customers"><p>Cutomers</p></Link>
                    </div>
                    <div className={`nav-item ${isActive('/dashboard/biz-tools/invoice') && "active"}`}>
                        <i><FiDatabase /></i>
                        <Link href="/dashboard/biiz-tools/invoice"><p>Invoice</p></Link>
                    </div>
                    <div className={`nav-item ${isActive('/dashboard/biz-tools/api-key') && "active"}`}>
                        <i><BiCube /></i>
                        <Link href="/dashboard/biz-tools/api-key"><p>Api Key</p></Link>
                    </div>
                </div>

                <div className="nav-bottom">
                    <div className="nav-item">
                        <i><BiCog /></i>
                        <Link href="/dashboard"><p>Settings</p></Link>
                    </div>
                    <div className="nav-item">
                        <i><BiLogOut/></i>
                        <Link href="/dashboard"><p>Logout</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SideBar