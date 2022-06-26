import classes from './Sell.module.scss'
import SubHeader from '../../SubHeader'
import {AiOutlineSearch} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import Transactions from '../../Transactions/Transactions'


const Sell =({handlePageDisplay})=>{
    

    return<>
        <div className={classes['sell-product']}>
            <SubHeader mainTitle="Sell a Product" />
            <div  className={`${classes['sub-header']} space-between py-4`}>
                <div>
                    <h1 className="fw-500 fs-24 primary-color">Products</h1>
                    <p className="fs-16 fw-400 secondary-color">Create and manage payment links for all your products</p>
                </div>
                <div>
                    <button onClick={()=>handlePageDisplay('product-link')} className="btn-default fs-16" >Sell a new Prodcut</button>
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
            <div className="m-25">
                <Transactions  />
            </div>
            <div className={`${classes['search-filter']} space-between`}>
                <div className={`centralize ${classes.pagination}`}>
                    <p>page 1 of 24</p>
                </div>
                <div className={`centralize ${classes.pagination}`}>
                    <p>Next</p>
                </div>
            </div>
        </div>
    </>
}

export default Sell