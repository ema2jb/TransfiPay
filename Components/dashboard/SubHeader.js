import { useState } from "react";

import {BsChevronRight} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai"
import {HiOutlineClipboardList, HiOutlineChevronRight} from "react-icons/hi"

const SubHeader = ({
    mainTitle, 
    subTitle, 
    swapToken,
    seeHistory,
    seeHistoryHandler,
    showIndexPage
    })=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(showIndexPage)

    return <>
        <div className="sub-header">
            <div className="title">
                <h4 
                style={{color:`${subTitle ? "#64748B" : "#0F172A" }`}} 
                className="main-title"
                onClick={showIndexPage ? ()=>showIndexPage(true): ()=>{}}
                >
                    {mainTitle}
                </h4>
                <i >{subTitle && <BsChevronRight />}</i>
                <h3 className="sub-title fs-20 fw-600">{subTitle && `${subTitle}`}</h3>
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