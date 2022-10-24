import {useState} from 'react'

import Sell from "../../../Components/dashboard/biz-tools/Sell"
import CreateProductLink from "../../../Components/dashboard/biz-tools/Sell/CreateProductLink"
import Layout from "../../../Components/dashboard/Layout";

const SellProduct =()=>{
    const [page, setPage] = useState('sell')

    const handlePageDisplay = (pageName)=>{
        setPage(pageName)
    }

    return<>
        <Layout>
            <div className={page !== 'sell' && 'd-none'}>
                <Sell handlePageDisplay={handlePageDisplay} />
            </div>
            <div className={page !== 'product-link' && 'd-none'}>
                <CreateProductLink handlePageDisplay={handlePageDisplay} />
            </div>
        </Layout>
    </>
}

export default SellProduct