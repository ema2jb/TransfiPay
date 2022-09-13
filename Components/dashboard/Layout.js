import { useEffect } from "react"
import { useSelector } from "react-redux"
import {useRouter} from 'next/router'

import SideBar from "./SideBar"
import MainHeader from "./MainHeader"


const Layout = (props)=>{
    const {authRequestState} =useSelector(state=>state.auth)

    const router = useRouter()

    /*
    if(typeof(window) !== 'undefined'){
        
    }
    */

    useEffect(()=>{
        if(Boolean(authRequestState.isAuthenticated) === false){
            router.push('/auth')
        }
    }, [])

    return<>
    <div>
    { Boolean(authRequestState.isAuthenticated) &&
        <div className="dashboard-layout">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="children">
                <MainHeader />
                {props.children}
            </div>
        </div>
    }
    </div>
    </>
}

export default Layout