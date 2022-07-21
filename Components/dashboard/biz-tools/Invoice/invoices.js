import React, {useState} from 'react';

import {HiOutlineDotsVertical} from "react-icons/hi"
import classes from './Invoice.module.scss'




const Invoices = ({showInvoicePreview})=>{
    const [paymentLinks] = useState([
        {
            transactionId:'#1232NEUB3456NC',
            Amount:'$ 300',
            paymentType:'Fixed Payment',
            Date:'March 3rd, 2021',
            id:1
        },
        {
            transactionId:'#1232NEUB3456NC',
            Amount:'$ 300',
            paymentType:'Fixed Payment',
            Date:'March 3rd, 2021',
            id:1
        },
        {
            transactionId:'#1232NEUB3456NC',
            Amount:'$ 300',
            paymentType:'Flexible Payment',
            Date:'March 3rd, 2021',
            id:1
        },
        {
            transactionId:'#1232NEUB3456NC',
            Amount:'$ 300',
            paymentType:'Fixed Payment',
            Date:'March 3rd, 2021',
            id:1
        },
        {
            transactionId:'#1232NEUB3456NC',
            Amount:'$ 300',
            paymentType:'Flexible Payment',
            Date:'March 3rd, 2021',
            id:1
        }]
    )


    return  <> 
        <table className={classes.table}>
            <thead>
                <tr>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Amount (USD)</th>
                    <th scope="col">Payment type</th>
                    <th scope="col">Date created</th>
                    <th style={{borderRight:"none"}} scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    paymentLinks.map((link, i)=>( 
                        <tr key={i} >
                                <td >{link.transactionId}</td>
                                <td >{link.Amount}</td>
                                <td >{link.paymentType}</td>
                                <td >{link.Date}</td> 
                                <td className={classes.previewLink} ><div>Preview Invoice</div><span onClick={()=>showInvoicePreview(true)}><HiOutlineDotsVertical /></span></td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
    
}




export default Invoices



