import {useState} from 'react'

import SubHeader from "../SubHeader"
import classes from './Wallet.module.scss'
import {AiOutlineSearch} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import {HiOutlineDotsVertical} from "react-icons/hi"
import Modal from "../Modals"
import {HiOutlineDocumentDuplicate} from 'react-icons/hi'


const   WalletReciept = ({showRecieptHandler}) =>{
    return <>
        <Modal hideModal={()=>showRecieptHandler(false)}>
            <div className={classes.step3}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Deposit Order Review</h1>
                        <p className="fs-16 fw-400 secondary-color">#Order 1232NEUB3456NC</p>
                    </div>
                </div>
                <div className="centralize mt-4">
                    <div className={`${classes.recieve}`}>
                        <p className="fs-16 fw-500 secondary-color">You made a deposit of</p>
                        <p className="fs-24 fw-600 secondary-color"><span className='text-color-1'>0.000056876</span> BTC</p>
                    </div>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Recieving address</p>
                    <p className="fs-16 fw-500 tetiary-color"><span><HiOutlineDocumentDuplicate /></span>  Oxa5...37b7</p>
                </div>
                <div className="space-between mt-3 pb-4 border-bottom">
                    <p className="fs-16 fw-400 secondary-color">Network</p>
                    <p className="fs-16 fw-500 tetiary-color">TRC20</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Coin</p>
                    <p className="fs-16 fw-500 tetiary-color">USDT</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Amount (USD)</p>
                    <p className="fs-16 fw-500 tetiary-color">0.0000344</p>
                </div>
                <div className="space-between mt-3">
                    <p className="fs-16 fw-400 secondary-color">Transaction fee</p>
                    <p className="fs-16 fw-500 tetiary-color">1.00 USDT</p>
                </div>
                <div className='justify-right mt-5 mb-2'>
                <div>
                    <button  className='btn-default px-5'>ok</button>
                </div>
            </div>
            </div>
        </Modal>
    </>
}


const WalletHistory = ({showHistoryHandler})=>{

    const [showReciept, setShowReciept] = useState(false)

    const showRecieptHandler = (value)=>{
        setShowReciept(value)
    }


    const [walletHistory] = useState([
        {   
            logo:"/dashboard/bitcoin.png",
            tokenName:"BITCOIN",
            activity:"Deposit",
            amount:"$ 200",
            status:"failed"  
        },
        {   
            logo:"/dashboard/etheruem.png",
            tokenName:"ETHEREUM",
            activity:"Transfer",
            amount:"$ 200",
            status:"successfull"   
        },
        {   
            logo:"/dashboard/tether.png",
            tokenName:"USDT",
            activity:"Swap",
            amount:"$ 200", 
            status:"pending"  
        },
        {   
            logo:"/dashboard/bitcoin.png",
            tokenName:"BITCOIN",
            activity:"Deposit",
            amount:"$ 200", 
            status:"failed"  
        },
        {   
            logo:"/dashboard/etheruem.png",
            tokenName:"ETHEREUM",
            activity:"Transfer",
            amount:"$ 200",
            status:"successfull"    
        },
        {   
            logo:"/dashboard/tether.png",
            tokenName:"USDT",
            activity:"Withdrawal to fiat",
            amount:"$ 200",
            status:"pending"   
        },
    ])


    return<>
        <SubHeader showIndexPage={showHistoryHandler} mainTitle="Wallet" subTitle="Wallet Transactions" />
        <div className={classes['wallet-history']}>
        <div  className={`${classes['sub-header']} py-4`}>
            <div>
                    <h1 className="fw-500 fs-24 primary-color">Wallet Transactions</h1>
                    <p className="fs-16 fw-400 secondary-color">See and manage all token transactions from your wallet </p>
                </div>
            </div>
            <div className='search-filter space-between'>
                <div className='centralize search'>
                    <input className="w-100" type="text" placeholder="Search payment type, amount" />
                    <AiOutlineSearch />
                </div>
                <div className='centralize filter'>
                    <p>filter by</p>
                    <BiChevronDown />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Token/Coin</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th style={{borderRight:"none"}} scope="col">Order Receipts</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        walletHistory.map((history, i)=>( 
                            <tr key={i} >
                                    <td ><span><img src={history.logo} alt=""/></span>{history.tokenName}</td>
                                    <td >{history.activity}</td>
                                    <td >{history.amount}</td>
                                    <td >{history.status}</td> 
                                    <td className={`space-between preview-link `} onClick={()=>showRecieptHandler(true)}><div>Preview</div><span onClick={()=>showInvoicePreview(true)}><HiOutlineDotsVertical /></span></td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="mb-5 search-filter space-between">
                <div className={`centralize pagination`}>
                    <p>page 1 of 24</p>
                </div>
                <div className="centralize pagination">
                    <p>Next</p>
                </div>
            </div>
        </div>
        <div className={!showReciept && 'd-none' }>
            <WalletReciept showRecieptHandler={showRecieptHandler} />
        </div>
    </>
}

export default WalletHistory