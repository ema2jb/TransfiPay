import { useState } from "react";

import {BsChevronRight} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai"
import {HiOutlineClipboardList, HiOutlineChevronRight} from "react-icons/hi"

const SubHeader = ({
    mainTitle, 
    subTitle,
    subTitle1, 
    swapToken,
    seeHistory,
    seeHistoryHandler,
    showIndexPage
    })=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    

    return <>
        <div className="sub-header">
            <div className="title">
                <h4 
                style={{color:`${subTitle || subTitle1 ? "#64748B" : "#0F172A" }`}} 
                className="main-title"
                onClick={showIndexPage ? ()=>showIndexPage(): ()=>{}}
                >
                    {mainTitle}
                </h4>
                <i 
                className="px-2"
                style={{color:`${subTitle1 ? "#64748B" : "#0F172A" }`}}
                >{subTitle && <BsChevronRight />}</i>
                <h3 
                style={{color:`${subTitle1 ? "#64748B" : "#0F172A" }`}}
                className="sub-title fs-20 fw-600">{subTitle && `${subTitle}`}</h3>
                <i className="px-2" >{subTitle1 && <BsChevronRight />}</i>
                <h3 className="sub-title fs-20 fw-600">{subTitle1 && `${subTitle1}`}</h3>
            </div>
            {
                isLoggedIn && !swapToken && 
                <div className="search">
                    <i><AiOutlineSearch /></i>
                    <input type="text" placeholder="search prodcuts, store ...." />
                </div>
            }
            {
                !isLoggedIn && !swapToken &&
                <div className="walkthrough">
                    <div className="image"><img src='/dashboard/walkthrough.png' alt="page-walkthrough" /></div>
                    <div>
                        <p className="confused">Confused? Watch this video</p>
                        <p className="more-insights">Get more insights on this page</p>
                    </div>
                </div>
            }
            {
                swapToken && !seeHistory &&
                <div style={{cursor:"pointer"}} onClick={()=>seeHistoryHandler(true)} className="centralize-10 text-color-2">
                    <i className="fs-16 fw-600"><HiOutlineClipboardList /></i>
                    <p className="fs-16 fw-600">Swap History</p>
                    <i className="fs-16 fw-600"><HiOutlineChevronRight /></i>
                </div>
            }
        </div>
    </>
}

export default SubHeader