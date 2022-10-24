import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';

import Modal from '../../Modals/index'
import classes from '../Withdraw/Withdraw.module.scss'
import {BiChevronDown} from "react-icons/bi"
import {walletActions} from '../../../../Store/wallet-slice'

//please do not mind that css from other components are used here

const TransferStep1 = ({handleCurrentStep, handleTransferDetails, handleEntries}) =>{

    const dispatch = useDispatch()

    const {walletRequestState, coinSymbols, coinNetworks, activeCoin} = useSelector(state=>state.wallet)

    const [coin, setCoin] = useState('')
    const [selectedCoin, setSelectedCoin] = useState(null)
    const [transferDetails, setTransferDetails] = useState({
      coinIdOrSymbol:"",
      amount:"",
      email:"",
      note:"",
      otpId:"",
      otpCode:""
    })
    
    let coinOptions = [{value:"select a coin",label:"select a coin"}]

    coinOptions = coinSymbols && coinSymbols.map(coin=>({value:coin.coinSymbol, label:coin.coinSymbol}))

    const customStyles = {
    		control: (provided, state) => ({
    			...provided,
    			color: '#6E7191',
                border: '1px solid #CBD5E1',
                'border-radius': '4px',
                'margin-bottom': '1.3rem',
                width:'100%'
    		}),
    	};

    const handleSubmit = ()=>{
      handleTransferDetails(transferDetails)
      handleCurrentStep('Transfer-step2')
    }

    const resetEntries = ()=>{
      dispatch(walletActions.setActiveCoin(""))
      setCoin("")
      setSelectedCoin(null)
      setTransferDetails({
      coinIdOrSymbol:"",
      amount:"",
      email:"",
      note:"",
      otpId:"",
      otpCode:""
    })
    }

  const closeModal = ()=>{
        resetEntries()
        handleCurrentStep('')
      }


    useEffect(()=>{
          activeCoin.coin && setCoin(activeCoin.coin)
          activeCoin.selectedCoin.value && setSelectedCoin(activeCoin.selectedCoin)
      }, [activeCoin])

  useEffect(()=>{
        handleEntries({closeModal:resetEntries})
      }, [])
  
    return <>
        <Modal hideModal={()=>closeModal()}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Transfer USDT</h1>
                        <p className="fs-16 fw-400 secondary-color">Send tokens to friends using transfi wallet for free</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 2</p>
                </div>
                <div className="mt-4">
                    <div className="space-between mb-1">
                        <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to Transfer</p>
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00</span></p>
                    </div>
                    <Select
                        onChange={(selectedOption) =>{
                            setTransferDetails(prev=>({...prev, coinIdOrSymbol:selectedOption.value}))
                            setSelectedCoin(selectedOption)
                            }
                        }
                        value={selectedCoin}
                        options={coinOptions}
                        styles={customStyles}
                        placeholder="Select a coin"
                    />
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Amount to Transfer</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input 
                            value={transferDetails.amount}
                            onChange={({target:{value}})=>setTransferDetails(prev=>({...prev, amount:value}))}
                            className="fs-16 fw-400" 
                            type="text" 
                            placeholder="Enter amount to withdraw" 
                          />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter receipients email</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input 
                          value={transferDetails.email}
                          onChange={({target:{value}})=>setTransferDetails(prev=>({...prev, email:value}))}
                          className="fs-16 fw-400" 
                          type="text" 
                          placeholder="Enter Email" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Note</p>
                    <div className={`space-between mb-4 ${classes['deposit-coin']}`}>
                        <input 
                          value={transferDetails.note}
                          onChange={({target:{value}})=>setTransferDetails(prev=>({...prev, note:value}))}
                          className="fs-16 fw-500 tetiary-color" 
                          type="text" 
                          placeholder="transaction summary"
                        />
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>handleSubmit()} className='btn-default'>Transfer</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default TransferStep1