import {AiOutlineClose} from 'react-icons/ai'

const Backdrop = props => {
    return <div className='modal-backdrop' />
}

const ModalOverlay = props =>{
    return <div style={{width:props.width?props.width:"40%", left:props.left?props.left:"30%"}} className="modal-overlay">
        {!props.alert && <i className='close-icon' onClick={props.hideModal}><AiOutlineClose style={{fontSize:"16px"}} /></i>}
        <div>{props.children}</div>
    </div>
}

const Modal =(props)=>{
    return <>
        <Backdrop />
        <ModalOverlay alert={props.alert} left={props.left} width={props.width} hideModal={props.hideModal}>{props.children}</ModalOverlay>
    </>
}

export default Modal