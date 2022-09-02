import {useState} from 'react'
import {useDispatch} from 'react-redux'

import {BiChevronDown} from "react-icons/bi"
import {HiChevronRight} from 'react-icons/hi'
import {RiAddFill} from 'react-icons/ri'
import { UIActions } from '../../Store/ui-slice'

const MainHeader = ()=>{

    const [showBiz, setShowBiz] = useState(false)

    const dispatch = useDispatch()

    const addBiz=()=>{
        setShowBiz(prev=>!prev)
        dispatch(UIActions.changeBizUiState('step1'))
    }

    const seeAllBiz =()=>{
        setShowBiz(prev=>!prev)
        dispatch(UIActions.changeBizUiState('allBiz'))
    } 

    return<>
        <div className='main-header'>
            <div className="currency">
                <p className="fs-18 fw-500 text-color-9">Default Currency</p>
                <div className="select-currency">
                    <div className='selected'><p className="fs-14 fw-500 text-color-10">USD</p><i><BiChevronDown /></i></div>
                    <div className="currencies">
                        <span>EUR</span>
                        <span>NGN</span>
                        <span>USD</span>
                    </div>
                </div>
            </div>
            <div className="test-mode">
                <div className="initials">
                    <p className="fs-14 fw-700 text-color-8">TM</p>
                    <span className="online"></span>
                </div>
                <p className="fs-16 fw-500 text-is-white">Store 1</p>
                <i onClick={()=>setShowBiz(prev=>!prev)} className="text-is-white cp chevron-down"><BiChevronDown style={{fontSize:"1.5rem"}} /></i>
                <div className={`buisnesses bckg7 p-3 ${showBiz?"show":""}`}>
                    <p className="fs-14 fw-500 secondary-color">Current role</p>
                    <p className="fs-14 fw-600 tertiary-color">Admin</p>
                    <hr></hr>
                    <p onClick={()=>seeAllBiz()} className="space-between fs-14 fw-500 secondary-color cp">All Buisnesses <span><HiChevronRight /></span></p>
                    <hr></hr>
                    <p onClick={()=>addBiz()} className="button cp btn-default text-is-white fs-14 fw-600"><span><RiAddFill /></span> Add Add Business</p>
                </div>
            </div>
        </div>
    </>
}

export default MainHeader