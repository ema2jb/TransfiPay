import classes from './Swap.module.scss'
import {HiOutlineChevronDown, HiOutlineSwitchVertical} from 'react-icons/hi'


const SwapToken =({successHandler})=>{
    
    return <>
        <div>
            <div className={classes['swap-token']}>
                <div className="space-between mb-3">
                    <p>From</p>
                    <p>Available Balance ~ <span>0.00089 ETH</span></p>
                </div>
                <div className={`space-between border p-2 ${classes['swap-coins']}`} >
                    <div className="centralize-10">
                        <div className={classes.image}>
                            <img src="/dashboard/etheruem.png" alt="coin" />
                        </div>
                        <p>Ethereum</p>
                        <i> <HiOutlineChevronDown /> </i>
                        <p>0.00</p>
                    </div>
                    <div className="centralize-10">
                        <p>15%</p>
                        <p>25%</p>
                        <p>50%</p>
                        <p>ALL</p>
                    </div>
                </div>

                <div className={classes['swap-icon']}>
                    <hr></hr>
                    <i className={classes.switch}><HiOutlineSwitchVertical /></i>
                    <hr></hr>
                </div>

                <div className={`space-between border p-2 mb-5 ${classes['swap-coins']}`}>
                    <div className="centralize-10">
                        <div className={classes.image}>
                            <img src="/dashboard/bitcoin.png" alt="coin" />
                        </div>
                        <p>Ethereum</p>
                        <i> <HiOutlineChevronDown /> </i>
                    </div>
                    <div>
                        <p>0.00</p>
                    </div>
                </div>

                <hr className="mb-4 mt-4"></hr>

                <div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">Price</p>
                        <p className="fs-16 fw-500 tetiary-color"><span className="secondary-color">1 ETH ~</span> 0.00089 BTC</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">Swap Fee</p>
                        <p className="fs-16 fw-500 tetiary-color">1.00 USDT</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-500 secondary-color">You will receive</p>
                        <p className="fs-16 fw-500 tetiary-color">0.000000025 USDT</p>
                    </div>
                </div>

                <div className='justify-right mt-5 mb-2'>
                <div>
                    <button onClick={()=>successHandler(true)} className='btn-default'>Swap Instantly</button>
                </div>
                </div>
            </div>
        </div>
    </>
}

export default SwapToken