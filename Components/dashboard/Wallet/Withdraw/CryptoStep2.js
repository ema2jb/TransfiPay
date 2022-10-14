import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select';


import Modal from '../../Modals/index'
import classes from './Withdraw.module.scss'
import {HiOutlineInformationCircle} from  'react-icons/hi'
import {walletActions} from '../../../../Store/wallet-slice'


const Step2 = ({handleCurrentStep}) =>{

    const dispatch = useDispatch()

    const [coin, setCoin] = useState('')
    const [coinNetwork, setCoinNetwork] = useState("")
    const [networkOptions, setNetworkOptions] = useState({})
    const [walletDetails, setWalletDetails] = useState({
      address:"",
      amount:""
    })
    const {walletRequestState, coinSymbols, coinNetworks} = useSelector(state=>state.wallet)
  
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
                padding:"5px",
                'border-radius': '4px',
                'margin-bottom': '1.3rem',
                width:'100%'
    		}),
    	};

      useEffect(()=>{
        selectNetworkOptions()
      }, [coin])

    const submitHandler = ()=>{
        const withDrawalDetails = {
          coinIdOrSymbol:coin,
          networkName:coinNetwork,
          address:walletDetails.address,
          amount:walletDetails.amount,
        }
        dispatch(walletActions.setWithdrawalDetails(withDrawalDetails))
       handleCurrentStep('withdraw-crypto-step3')
    }
  
    return <>
        <Modal hideModal={()=>handleCurrentStep('')}>
            <div className={classes.step2}>
                <div className={`space-between mt-3 ${classes.header}`}>
                    <div>
                        <h1 className="fw-600 fs-20 primary-color">Crypto Withdrawal</h1>
                        <p className="fs-16 fw-400 secondary-color">Check recepient wallet address before you proceed.</p>
                    </div>
                    <p className={`secondary-color ${classes['step-indicator']}`}><span className="text-color-1">Step 2 </span>of 3</p>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Select a coin to withdraw</p>
                    <Select
                        onChange={(selectedOption) =>{
                            setCoin(selectedOption.value)
                            }
                        }
                        options={coinOptions}
                        styles={customStyles}
                        placeholder="Select a coin"
                    />
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter wallet address</p>
                    <div className={`mb-4 ${classes['deposit-coin']}`}>
                        <input 
                          onChange={({target:{value}})=>setWalletDetails(prev=>({...prev, address:value}))}
                          value={walletDetails.address}
                          className="fs-16 fw-400 w-100" 
                          type="text" 
                          placeholder="wallet Address" 
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Network  <span> <HiOutlineInformationCircle /></span></p>
                         <Select
                        onChange={(selectedOption) =>{
                            setCoinNetwork(selectedOption.value)
                            }
                        }
                        isDisabled={Boolean(coin)?false:true}
                        options={networkOptions}
                        styles={customStyles}
                        placeholder={coin?"select a network":"Select a coin first"}
                    />
                </div>
                <div className="mt-3">
                    <p className="mb-2 fs-16 fw-400 tetiary-color">Enter amount to withdraw</p>
                    <div className={`space-between ${classes['amount-coin']}`}>
                        <input 
                            onChange={({target:{value}})=>setWalletDetails(prev=>({...prev, amount:value}))}
                            value={walletDetails.amount}
                            className="fs-16 fw-400" 
                            type="text" 
                            placeholder="Enter amount to withdraw" 
                          />
                        <p className="fs-16 fw-400 secondary-color">15%  20%  25%  <span className="tetiary-color">ALL</span></p>
                    </div>
                    <div className=" mt-2 justify-right">
                        <p className="fs-16 fw-400 secondary-color">Availabla Balance~ <span className="fs-16 fw-600 text-color-2">0.00089 USDT</span></p>
                    </div>
                </div>
                <div className='justify-right mt-5 mb-2'>
                    <div>
                        <button onClick={()=>handleCurrentStep('')} className="btn-transparent">Cancel</button>
                    </div>
                    <div>
                        <button onClick={()=>submitHandler()} className='btn-default'>Proceed</button>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default Step2