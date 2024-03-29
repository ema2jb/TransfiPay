import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';

import classes from './Deposit.module.scss'
import Modal from '../../Modals/index'
import { getBizDepositAddressFunc } from '../../../../requests/walletRequests'
import {walletActions} from '../../../../Store/wallet-slice'


const Step1 = ({handleCurrentStep, handleEntries})=>{

    const {walletRequestState, coinSymbols, coinNetworks, activeCoin} = useSelector(state=>state.wallet)
    const {activeBiz} = useSelector(state=>state.biz)

    const dispatch = useDispatch()

    const [coin, setCoin] = useState("")

  // these are for the purpose of managing react-select
    const [selectedCoin, setSelectedCoin] = useState(null)
    const [selectedNetwork, setSelectedNetwork] = useState(null)
    const [coinNetwork, setCoinNetwork] = useState("")
    const [networkOptions, setNetworkOptions] = useState({})
  
    let coinOptions = [{value:"select a coin",label:"select a coin"}]

     coinOptions = coinSymbols && coinSymbols.map(coin=>({value:coin.coinSymbol, label:coin.coinSymbol}))

      const selectNetworkOptions = ()=>{
        if(coin && coinNetworks){
          const networkOptions = coinNetworks[coin].map(network=>({value:network, label:network}))
          setNetworkOptions(networkOptions)
        }
      }

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

      const resetEntries = () =>{
        dispatch(walletActions.setActiveCoin(""))
        setCoin("")
        setSelectedCoin(null)
        setSelectedNetwork(null)
      }

      useEffect(()=>{
        selectNetworkOptions()
      }, [coin])

      useEffect(()=>{
          activeCoin.coin && setCoin(activeCoin.coin)
          activeCoin.selectedCoin.value && setSelectedCoin(activeCoin.selectedCoin)
      }, [activeCoin])

      useEffect(()=>{
        handleEntries({closeModal:resetEntries})
      }, [])

      const closeModal = ()=>{
        resetEntries()
        handleCurrentStep('')
      }


        const submitHandler = ()=>{
          getBizDepositAddressFunc(dispatch, walletActions, coin, coinNetwork, handleCurrentStep, activeBiz.id)      
        }

  
    return <>
        <Modal hideModal={()=>closeModal()}>
            <div className={classes.step1}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Deposit Amount</h1>
                        <p className="fs-16 fw-400 secondary-color">make instant deposit to your account easily</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 1 </span>of 2</p>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to Deposit</p>
                         <Select
                        onChange={(selectedOption) =>{
                            setCoin(selectedOption.value)
                            setSelectedCoin(selectedOption)
                            }
                        }
                        value={selectedCoin}
                        options={coinOptions}
                        styles={customStyles}
                        placeholder="Select a coin"
                    />
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Select a Network</p>
                         <Select
                        onChange={(selectedOption) =>{
                            setCoinNetwork(selectedOption.value)
                            setSelectedNetwork(selectedOption)
                            }
                        }
                        isDisabled={Boolean(coin)?false:true}
                        value={selectedNetwork}
                        options={networkOptions}
                        styles={customStyles}
                        placeholder={coin?"select a network":"Select a coin first"}
                    />
                </div>
              {/*
              <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Amount to Deposit</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input className="fs-16 fw-400" type="text" placeholder="Enter amount to withdraw" />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                    <div className=" mt-2 justify-right">
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00089 USDT</span></p>
                    </div>
                </div>
              
              */}
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button disabled={walletRequestState.loading} onClick={()=>submitHandler()} className='btn-default'>{walletRequestState.loading?"loading":"Get Address"}</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step1