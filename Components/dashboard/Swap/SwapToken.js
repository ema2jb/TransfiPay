import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Select from 'react-select';

import classes from './Swap.module.scss'
import {HiOutlineChevronDown, HiOutlineSwitchVertical} from 'react-icons/hi'
import { walletActions } from '../../../Store/wallet-slice'
import { bizSwapFunc, bizSwapRateFunc } from '../../../requests/walletRequests'


const SwapToken =({successHandler})=>{

    const dispatch = useDispatch()

    const {walletRequestState, bizWalletBalances} = useSelector(state=>state.wallet)
    const {activeBiz} = useSelector(state=>state.biz)
  
    const [coin, setCoin] = useState({
      from:"",
      to:""
    })
    const [selectedCoin, setSelectedCoin] = useState({
      from:null,
      to:null,
    })
    const [coinLogo, setCoinLogo] = useState({
      from:"",
      to:""
    })
    const [wallet, setWallet] = useState({
      balance:"",
      symbol:{
        from:"",
        to:""
      }
    })
    const [amount, setAmount] = useState({
      from:"",
      to:""
    })
    const [swapRate, setSwapRate] = useState({
      rate:"",
      rateDescription:""
    })

    const handleSwapRate = (value)=>{
      setSwapRate(value)
    }
    const coinOptions = bizWalletBalances && bizWalletBalances.map(wallet=>({label:wallet.name, value:wallet.name}))

    const customStyles = {
    		control: (provided, state) => ({
    			...provided,
    			color: '#6E7191',
          border: '1px solid #CBD5E1',
          'border-radius': '4px',
          width:'170%',
          padding: '3px 7px 3px 7px',
          backgroundColor:"transparent",
          marginLeft:"10px"
    		}),
    	};

    useEffect(()=>{
      bizWalletBalances.forEach(wallet=>{
        if (wallet.name === coin.from){
          setCoinLogo(prev=>({...prev, from:wallet.picUrl}))
          setWallet(prev=>({...prev, balance:wallet.balance, symbol:{...prev.symbol, from:wallet.symbol}}))
        }else if(wallet.name === coin.to){
          setCoinLogo(prev=>({...prev, to:wallet.picUrl}))
          setWallet(prev=>({...prev, symbol:{...prev.symbol, to:wallet.symbol}}))
        }
      })
    },[coin])

    useEffect(()=>{
      if(wallet.symbol.from && wallet.symbol.to){
        bizSwapRateFunc(dispatch, walletActions, {fromCoin:wallet.symbol.from, toCoin:wallet.symbol.to}, handleSwapRate, activeBiz.id) 
      }
    }, [wallet])

    useEffect(()=>{
      setAmount(prev=>({...prev, to:(swapRate.rate * amount.from)}))
    }, [swapRate, amount.from])

    const handleSubmit = () =>{
      if (wallet.symbol.from && wallet.symbol.to && amount.from){
       bizSwapFunc(dispatch, walletActions, successHandler, {fromCoin:wallet.symbol.from, toCoin:wallet.symbol.to, amount:amount.from }, activeBiz.id) 
      }
    }
    
    return <>
        <div>
            <div className={classes['swap-token']}>
                <div className="space-between mb-3">
                    <p>From</p>
                    <p>Available Balance ~ <span>{`${wallet.balance} ${wallet.symbol.from}`}</span></p>
                </div>
                <div className={`space-between border p-2 ${classes['swap-coins']}`} >
                    <div className="centralize">
                        <div className={classes.image}>
                            <img src={coinLogo.from} alt="coin" />
                        </div>
                        <Select
                        onChange={(selectedOption) =>{
                            setCoin(prev=>({...prev, from:selectedOption.value}))
                            setSelectedCoin(prev=>({...prev, from:selectedOption}))
                            }
                        }
                        value={selectedCoin.from}
                        options={coinOptions}
                        styles={customStyles}
                        placeholder="Select a coin"
                      />    
                    </div>
                    <div>
                      {
                        <div className={classes.input}>
                          <input 
                            onChange={({target:{value}})=>setAmount(prev=>({...prev, from:value}))}
                            value={amount.from && amount.from} 
                            type="text" 
                            placholder="0.00" 
                          />
                        </div>
                        /*
                         <p>15%</p>
                        <p>25%</p>
                        <p>50%</p>
                        <p>ALL</p> 
                        */
                      }
                    </div>
                </div>

                <div className={classes['swap-icon']}>
                    <hr></hr>
                    <i className={classes.switch}><HiOutlineSwitchVertical /></i>
                    <hr></hr>
                </div>

                <div className={`space-between border p-2 mb-5 ${classes['swap-coins']}`}>
                   <div className="centralize">
                        <div className={classes.image}>
                            <img src={coinLogo.to} alt="coin" />
                        </div>
                        <Select
                        onChange={(selectedOption) =>{
                            setCoin(prev=>({...prev, to:selectedOption.value}))
                            setSelectedCoin(prev=>({...prev, to:selectedOption}))
                            }
                        }
                        value={selectedCoin.to}
                        options={coinOptions}
                        styles={customStyles}
                        placeholder="Select a coin"
                      />    
                    </div>
                    <div>
                         <div className={classes.input}>
                          <input value={amount.to && amount.to}  type="text" placeholder="0.00" />
                        </div>
                    </div>
                </div>

                <hr className="mb-4 mt-4"></hr>

                <div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">Price</p>
                        <p className="fs-16 fw-500 tetiary-color"><span className="secondary-color">{`${swapRate &&  swapRate.rateDescription.split('~')[0]} ~`}</span>{swapRate && swapRate.rateDescription.split('~')[1]}</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">Swap Fee</p>
                        <p className="fs-16 fw-500 tetiary-color">1.00 USDT</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">You will receive</p>
                        <p className="fs-16 fw-500 tetiary-color">{`${amount.to} ${wallet.symbol.to}`}</p>
                    </div>
                </div>

                <div className='justify-right mt-5 mb-2'>
                <div>
                    <button onClick={()=>handleSubmit()} className='btn-default'>Swap Instantly</button>
                </div>
                </div>
            </div>
        </div>
    </>
}

export default SwapToken