import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Wallet.module.scss'
import { AiOutlineSearch } from "react-icons/ai"
import { UIActions } from '../../../Store/ui-slice'
import { walletActions } from '../../../Store/wallet-slice'
import { getUserWalletBalancesFunc } from '../../../requests/walletRequests'


const WalletPortfolio = () => {

  const { bizWalletBalances } = useSelector(state => state.wallet)
  //console.log(userWalletBalances)

  const dispatch = useDispatch()

  const handleCurrentStep = (value) => {
    //console.log(value)
    dispatch(UIActions.changeWalletActionsUI(value))
  }

  const walletAction = (action, coin) =>{
    handleCurrentStep(action)
    dispatch(walletActions.setActiveCoin(coin))
  }

  /*
   useEffect(() => {
    getUserWalletBalancesFunc(dispatch, walletActions)
  }, [])
  */


  return <>
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
        {
          bizWalletBalances &&
          <tbody>
            {
              bizWalletBalances.map((wallet, i) => (
                <tr key={i}>
                  <td className="fs-16 fw-500 secondary-color" ><span><img src={wallet.picUrl} alt="" /></span>{wallet.name}</td>
                  <td className="fs-16 fw-500 secondary-color">{`${wallet.balance.slice(0, 4)} ${wallet.symbol}`}</td>
                  <td className="fs-16 fw-500 secondary-color">{wallet.usdValue.slice(0, 4)}</td>
                  <td className={`fs-16 fw-500 primary-color`}><span onClick={() => walletAction('deposit-step1', wallet.symbol)} className={classes.deposit}>Deposit</span></td>
                  <td className={`fs-16 fw-500 primary-color`}><span onClick={() => walletAction('withdraw-crypto-step2', wallet.symbol)} className={classes.withdraw}>Withdraw</span></td>
                  <td className={`fs-16 fw-500 primary-color`}><span onClick={() => walletAction('Transfer-step1', wallet.symbol)} className={classes.transfer}>Transfer</span></td>
                </tr>
              ))
            }
          </tbody>
        }

      </table>
    </div>
  </>
}

export default WalletPortfolio