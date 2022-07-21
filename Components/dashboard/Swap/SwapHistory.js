import React, {useState} from 'react';

import { HiOutlineSwitchHorizontal} from "react-icons/hi"
import {AiOutlineSearch} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"


const SwapPair = () =>{
    return<>
        <div className="swap-pair centralize-10">
            <div className='image'>
                <img src="/dashboard/bitcoin.png" alt="bitcoin"  />
            </div>
            <div>
                <i style={{color:"#000000"}} className='fw-500 fs-18'><HiOutlineSwitchHorizontal /></i>
            </div>
            <div className='image' >
                <img src="/dashboard/etheruem.png" alt="ethereum" />
            </div>
        </div>
    </>
}


const SwapHistory = ()=>{
    const [swaps] = useState(
        {
            amountSwapped:'0.0000234 BTC',
            aomuntRecieved:'0.0000234 ETH',
            swapPair:  <SwapPair />,
            swapFee:'1.00 USDT',
        }
    )


    return  <> 
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
                        <th scope="col">Amount swapped</th>
                        <th scope="col">Amount received</th>
                        <th scope="col">Swap pair</th>
                        <th style={{borderRight:"none"}} scope="col">Swap fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [0, 1, 2, 3, 4, 5].map((link, i)=>( 
                            <tr key={i} >
                                    <td >{swaps.amountSwapped}</td>
                                    <td >{swaps.aomuntRecieved}</td>
                                    <td >{swaps.swapPair}</td>
                                    <td style={{borderRight:"none"}}>{swaps.swapFee}</td> 
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
    </>
    
}




export default SwapHistory



