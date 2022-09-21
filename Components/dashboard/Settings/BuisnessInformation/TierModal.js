import classes from '../Settings.module.scss'
import Modal from '../../Modals'


const TierModal = ({handleShowModal,tierHandler, showBizInfoTiersHandler}) =>{

    const showTierHandler = (value) =>{
        handleShowModal(false)
        showBizInfoTiersHandler(true)
        tierHandler(value)
    }


    return <>
        <Modal width={"60%"} left={"20%"} hideModal={()=>handleShowModal(false)}>
            <div>
                <h1 className="fw-600 fs-20 primary-color">KYC ( Know Your Customer)</h1>
                <p className="mb-3 fw-400 fs-16 secondary-color">This verification allows us verify your busienss details. You can pick any tier of verification </p>
                <hr></hr>
                <div className='centralize-top-15'>
                    <div >
                        <div className="bckg5">
                            <p className="fs-16 fw-600 text-is-white text-center p-2">Tier 1</p>
                        </div>
                        <div className="bckg2 p-3">
                            <p className="fs-16 fw-500 mb-4">Requires a valid email address and OTP verification.</p>
                            <p className="fs-16 fw-500 mb-4">Daily transaction limit: 200,000 naira.</p>
                            <div className="centralize mb-2">
                                <button onClick={()=>showTierHandler('tier1')} className='mt-2 btn-transparent1 fs-16 fw-600'>Verify Buisness</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bckg5">
                            <p className="fs-16 fw-600 text-is-white text-center p-2">Tier 2</p>
                        </div>
                        <div className="bckg2 p-3">
                            <p className="fs-16 fw-500 mb-4">Requires a valid email address and OTP verification.</p>
                            <p className="fs-16 fw-500 mb-4">Daily transaction limit: 200,000 naira.</p>
                            <div className="centralize mb-2">
                                <button onClick={()=>showTierHandler('tier2')} className='mt-2 btn-transparent1 fs-16  fw-600'>Verify Buisness</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    </>
}

export default TierModal