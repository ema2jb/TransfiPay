
import Modal from './index'


const RequestSent = ({closeModal, email})=>{
        return<>
            <Modal hideModal={()=>closeModal('')}>
                <div className="finalStep">
                    <div className='order-approved'>
                        <div className="image">
                            <img src="/dashboard/sent.png" alt="verification link sent"  />
                        </div>
                        <p className='fs-20 fw-700 tetiary-color mt-4 mb-2'>Verification Link Sent</p>
                        <p className='fs-16 fw-400 secondary-color'>A Link has been sent to <span className="fw-600 text-color-3">{email}</span>, Kindly click the link to verify your account</p>
                    </div>
                    <div className="justify-right mt-5 mb-2">
                        <button className='btn-default' onClick={()=>closeModal('')}>
                            Got it
                        </button>
                    </div>
                </div>
            </Modal>
        </>
}

export default RequestSent


