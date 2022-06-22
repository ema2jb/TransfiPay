import {AiOutlineClose} from 'react-icons/ai'

const Backdrop = props => {
    return <div className='modal-backdrop' />
}

const ModalOverlay = props =>{
    return <div className="modal-overlay">
        <i className='close-icon' onClick={props.hideModal}><AiOutlineClose style={{fontSize:"16px"}} /></i>
        <div>{props.children}</div>
    </div>
}

const Modal =(props)=>{
    return <>
        <Backdrop />
        <ModalOverlay hideModal={props.hideModal}>{props.children}</ModalOverlay>
    </>
}

export default Modal