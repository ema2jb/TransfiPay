import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { HiOutlineSwitchHorizontal} from "react-icons/hi"
import {AiOutlineSearch} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"


const SwapPair = ({from, to}) =>{
    return<>
        <div className="swap-pair centralize-10">
            <div className='image'>
                <img src={from} alt="coin logo"  />
            </div>
            <div>
                <i style={{color:"#000000"}} className='fw-500 fs-18'><HiOutlineSwitchHorizontal /></i>
            </div>
            <div className='image' >
                <img src={to} alt="coin logo" />
            </div>
        </div>
    </>
}


const SwapHistory = ()=>{
   
  const {tradeHistory} = useSelector(state=>state.wallet)


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
                    { tradeHistory &&
                        tradeHistory.map((trade, i)=>( 
                            <tr key={i} >
                                    <td >{trade.fromCoinAmount.splice(0, 5)}</td>
                                    <td >{trade.toCoinAmount.splice(0, 5)}</td>
                                    <td ><SwapPair from={trade.fromCoin.picUrl} to={trade.toCoin.picUrl} /></td>
                                    <td style={{borderRight:"none"}}>{trade.fee.splice(0, 5)}</td> 
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



