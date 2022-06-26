import { useState } from "react";

import {BsChevronRight} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai"

const SubHeader = ({mainTitle, subTitle})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return <>
        <div className="sub-header">
            <div className="title">
                <h4 style={{color:`${subTitle ? "#64748B" : "#0F172A" }`}} className="main-title">{mainTitle}</h4>
                <i >{subTitle && <BsChevronRight />}</i>
                <h3 className="sub-title fs-20 fw-600">{subTitle && `${subTitle}`}</h3>
            </div>
            {
                isLoggedIn && 
                <div className="search">
                    <i><AiOutlineSearch /></i>
                    <input type="text" placeholder="search prodcuts, store ...." />
                </div>
            }
            {
                !isLoggedIn &&
                <div className="walkthrough">
                    <div className="image"><img src='/dashboard/walkthrough.png' alt="page-walkthrough" /></div>
                    <div>
                        <p className="confused">Confused? Watch this video</p>
                        <p className="more-insights">Get more insights on this page</p>
                    </div>
                </div>
            }
        </div>
    </>
}

export default SubHeader