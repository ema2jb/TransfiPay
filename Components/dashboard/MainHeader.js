import {BiChevronDown} from "react-icons/bi"

const MainHeader = ()=>{
    return<>
        <div className='main-header'>
            <div className="currency">
                <p>Default Currency</p>
                <div className="select-currency">
                    <div className='selected'><p>USD</p><i><BiChevronDown /></i></div>
                    <div className="currencies">
                        <span>EUR</span>
                        <span>NGN</span>
                        <span>USD</span>
                    </div>
                </div>
            </div>
            <div className="test-mode">
                <div className="initials">
                    <p>TM</p>
                    <span className="online"></span>
                </div>
                <p className="mode">Test Mode</p>
                <i><BiChevronDown style={{fontSize:"1.5rem"}} /></i>
            </div>
        </div>
    </>
}

export default MainHeader