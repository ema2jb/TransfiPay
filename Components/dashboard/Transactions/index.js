import React, {useState} from 'react';
import {BsChevronRight} from "react-icons/bs"
import {HiOutlineDotsVertical} from "react-icons/hi"
import classes from './Transactions.module.scss'
import Transactions from './Transactions'


const Home = ()=>{
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


    return  <> 
        <div className={classes.transactions}>
        <div className={classes.header}>
            <h1>Transactions</h1>
            <p>See all transactions <span><BsChevronRight /></span></p>
        </div>
       <Transactions />
        </div>
    </>
    
}




export default Home



