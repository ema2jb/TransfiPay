import React, {useState} from 'react';

import {HiOutlineDotsVertical} from "react-icons/hi"
import classes from './PaymentLink.module.scss'




const PaymentLinks = ()=>{
    const [paymentLinks] = useState([
        {
            productName:'Name Cheap',
            Amount:'$ 300',
            linkType:'Fixed Payment',
            Date:'March 3rd, 2021',
            state:"ACTIVE",
            id:1
        },
        {
            productName:'Thrift sales',
            Amount:'$ 300',
            linkType:'Fixed Payment',
            Date:'March 3rd, 2021',
            state:"UNACTIVE",
            id:1
        },
        {
            productName:'Food delivery',
            Amount:'$ 300',
            linkType:'Flexible Payment',
            Date:'March 3rd, 2021',
            state:"ACTIVE",
            id:1
        },
        {
            productName:'Fundraising',
            Amount:'$ 300',
            linkType:'Fixed Payment',
            Date:'March 3rd, 2021',
            state:"UNACTIVE",
            id:1
        },
        {
            productName:'Name Cheap',
            Amount:'$ 300',
            linkType:'Flexible Payment',
            Date:'March 3rd, 2021',
            state:"ACTIVE",
            id:1
        }]
    )


    return  <> 
        <table className={classes.table}>
            <thead>
                <tr>
                    <th scope="col">Link title/name</th>
                    <th scope="col">Amount (USD)</th>
                    <th scope="col">Link type</th>
                    <th scope="col">Date created</th>
                    <th style={{borderRight:"none"}} scope="col">Active/Unactive</th>
                </tr>
            </thead>
            <tbody>
                {
                    paymentLinks.map((link, i)=>( 
                        <tr key={i} >
                                <td >{link.productName}</td>
                                <td >{link.Amount}</td>
                                <td >{link.linkType}</td>
                                <td >{link.Date}</td> 
                                <td className={classes.previewLink} ><div style={{color: link.state === "ACTIVE" ? "#22C55E" : ""}}>{link.state}</div><span ><HiOutlineDotsVertical /></span></td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
    
}




export default PaymentLinks



