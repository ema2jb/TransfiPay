import SideBar from "./SideBar"
import MainHeader from "./MainHeader"




const Layout = (props)=>{
    return<>
        <div className="dashboard-layout">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="children">
                <MainHeader />
                {props.children}
            </div>
        </div>
    </>
}

export default Layout