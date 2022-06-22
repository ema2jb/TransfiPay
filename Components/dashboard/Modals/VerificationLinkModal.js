
import  Modal from './index'

const VerificationLinkModal = ({hideModal})=>{
        return<>
            <Modal hideModal={hideModal}>
                <div className="verification-link">
                    <div className="image">
                        <img src="/dashboard/sent.png" alt="verification link sent"  />
                    </div>
                    <p className='link-sent'>Verfication link sent</p>
                    <p>A a link has been sent <span>Example@gmail.com</span>, kindly click the link to verify your account.</p>
                    <p className="check-inbox">Kindly check your Inbox/spam folder</p>
                </div>
                <div className="close-button-wrapper">
                    <button className='close-button' onClick={hideModal}>
                        Okay! Got it
                    </button>
                </div>
            </Modal>
        </>
}

export default VerificationLinkModal

