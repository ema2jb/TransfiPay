import {useState} from 'react'


import SubHeader from "../../SubHeader"
import classes from './Invoice.module.scss'
import {AiOutlineSearch} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import Invoices from './invoices'
import PreviewInvoice from './PreviewInvoice'



const InvoiceIndex = ()=>{

    const [previewInvoice, setPreviewInvoice] = useState(false)

    const showInvoicePreview = (value)=>{
            setPreviewInvoice(value)
    }


    return <>
    <SubHeader mainTitle="Invoices" />
       <div className={classes['invoice']}>
            <div  className={`${classes['sub-header']} space-between py-4`}>
                <div>
                    <h1 className="fw-500 fs-24 primary-color">All Invoices</h1>
                    <p className="fs-16 fw-400 secondary-color">Create and manage payment links invoice</p>
                </div>
                <div>
                    <button  className="btn-default fs-16" >Export as  CSV</button>
                </div>
            </div>
            <div className={`${classes['search-filter']} space-between`}>
                <div className={`centralize ${classes.search}`}>
                    <input className="w-100" type="text" placeholder="search business name, payment types......" />
                    <AiOutlineSearch />
                </div>
                <div className={`centralize ${classes.filter}`}>
                    <p>filter by</p>
                    <BiChevronDown />
                </div>
            </div>
            <div>
                <Invoices showInvoicePreview={showInvoicePreview}  />
            </div>
            <div className={`mb-5 ${classes['search-filter']} space-between`}>
                <div className={`centralize ${classes.pagination}`}>
                    <p>page 1 of 24</p>
                </div>
                <div className={`centralize ${classes.pagination}`}>
                    <p>Next</p>
                </div>
            </div>
        </div>
        <div className={!previewInvoice && 'd-none'}>
            <PreviewInvoice showInvoicePreview={showInvoicePreview} />
        </div>
    </>
}

export default InvoiceIndex