import Modal from "../../Modals"
import classes from './Invoice.module.scss'


const PreviewInvoice = ({showInvoicePreview}) =>{

    return <>
        <Modal hideModal={()=>showInvoicePreview(false)}>
            
            <div className={classes['preview-invoice']}>
                <div className={`mt-3 ${classes.header}`}>
                    <div>
                        <p className="fs-16 fw-400 secondary-color">March 3rd, 2021</p>
                        <h1 className="fw-600 fs-20 primary-color">#Order 1232NEUB3456NC</h1>
                    </div>
                </div>

                <div className={`mt-3 ${classes['invoice-details']}`}>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Customer Email</p>
                        <p className="fs-16 fw-500 tetiary-color">n.davmek@gmail.com</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Phone number</p>
                        <p className="fs-16 fw-500 tetiary-color">07069196059</p>
                    </div>
                </div>

                <div className={`mt-3 ${classes['invoice-details']}`}>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Paid in</p>
                        <p className="fs-16 fw-500 tetiary-color">BITCOIN</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Amount</p>
                        <p className="fs-16 fw-500 tetiary-color">0.0000344 BTC</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Receiving address</p>
                        <p className="fs-16 fw-500 tetiary-color">Oxa5...37b7</p>
                    </div>
                </div>

                <div className={`mt-3 ${classes['invoice-details']}`}>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Recieved in</p>
                        <p className="fs-16 fw-500 tetiary-color">USD</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Amount</p>
                        <p className="fs-16 fw-500 tetiary-color">$ 300</p>
                    </div>
                    <div className="space-between mt-2">
                        <p className="fs-16 fw-400 secondary-color">Status</p>
                        <p className="fs-16 fw-500 success-color">Successful</p>
                    </div>
                </div>
            </div>
        </Modal>
    </>
}

export default PreviewInvoice