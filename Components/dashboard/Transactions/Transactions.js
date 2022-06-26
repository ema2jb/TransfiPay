import React, {useState} from 'react';
import {BsChevronRight} from "react-icons/bs"
import {HiOutlineDotsVertical} from "react-icons/hi"
import classes from './Transactions.module.scss'
import EditProductLink from '../biz-tools/Sell/EditProductLink'


const Transactions = ()=>{
    const [transaction] = useState(
        {
            productName:'Khalid Enterprise',
            Amount:'$ 300',
            Status:'Pending',
            Date:'March 3rd, 2021',
            previewLink:"Preview",
            id:1
        }
    )

    const [ editProductLink, setEditProductLink ] = useState(false)

    const handleEditProductLink =(value)=>{
        return setEditProductLink(value)
    }


    return  <> 
        <table className={classes.table}>
            <thead>
                <tr>
                    <th scope="col">Link/Product  Name</th>
                    <th scope="col">Amount (USD)</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date created</th>
                    <th style={{borderRight:"none"}} scope="col">Preview Links</th>
                </tr>
            </thead>
            <tbody>
                {
                    [0, 1, 2, 3].map((num, i)=>( 
                        <tr key={i} className='isClickable'>
                                <td >{transaction.productName}</td>
                                <td >{transaction.Amount}</td>
                                <td >{transaction.Status}</td>
                                <td >{transaction.Date}</td> 
                                <td className={classes.previewLink} ><div>{transaction.previewLink}</div><span onClick={()=>handleEditProductLink(true)}><HiOutlineDotsVertical /></span></td> 
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className={!editProductLink && 'd-none'}>
            <EditProductLink 
                handleEditProductLink={handleEditProductLink} 
            />
        </div>
    </>
    
}




export default Transactions



