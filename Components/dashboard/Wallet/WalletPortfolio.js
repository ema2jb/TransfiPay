import {useState} from  'react'
import {useSelector, useDispatch} from 'react-redux'

import classes from './Wallet.module.scss'
import {AiOutlineSearch} from "react-icons/ai"
import {UIActions} from '../../../Store/ui-slice'


const WalletPortfolio = ()=>{

    const currentStep = useSelector(state=>state.UI.walletActionsUI.currentStep)
    
    const dispatch = useDispatch()

    const handleCurrentStep = (value)=>{
            console.log(value)
            dispatch(UIActions.changeWalletActionsUI(value))
    }

    const [tokens] = useState([
        {   
            logo:"/dashboard/bitcoin.png",
            tokenName:"Bitcoin",
            balance:"0.00345 BTC",
            value:"$ 200",   
        },
        {   
            logo:"/dashboard/etheruem.png",
            tokenName:"Etheruem",
            balance:"0.00345 BTC",
            value:"$ 200",   
        },
        {   
            logo:"/dashboard/tether.png",
            tokenName:"Tether",
            balance:"0.00345 BTC",
            value:"$ 200",   
        }
    ])

    return<>
        <div className={classes.portfolio}>
            <div className='space-between'>
                <p className='fs-20 fw-600 tetiary-color'>Wallet Portfolio</p>
                <div className={`space-between ${classes.search}`}>
                    <input className="fw-400 fs-14" type="text" placeholder='Search Portfolio' />
                    <AiOutlineSearch />
                </div>
            </div>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className="fs-16 fw-500 text-color-3" scope="col">Token/Coin</th>
                        <th className="fs-16 fw-500 text-color-3" scope="col">Token Balance</th>
                        <th className="fs-16 fw-500 text-color-3" scope="col">USD Value</th>
                        <th className="fs-16 fw-500 text-color-3" scope="col" colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tokens.map((token, i)=>( 
                            <tr key={i}>
                                    <td className="fs-16 fw-500 secondary-color" ><span><img src={token.logo} alt=""/></span>{token.tokenName}</td>
                                    <td className="fs-16 fw-500 secondary-color">{token.balance}</td>
                                    <td className="fs-16 fw-500 secondary-color">{token.value}</td>
                                    <td className={`fs-16 fw-500 primary-color`}><span onClick={()=>handleCurrentStep('deposit-step1')} className={classes.deposit}>Deposit</span></td>
                                    <td className={`fs-16 fw-500 primary-color`}><span onClick={()=>handleCurrentStep('withdraw-step1')} className={classes.withdraw}>Withdraw</span></td>
                                    <td className={`fs-16 fw-500 primary-color`}><span onClick={()=>handleCurrentStep('Transfer-step1')} className={classes.transfer}>Transfer</span></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default WalletPortfolio