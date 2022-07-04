import React, {useState} from "react";
import img6 from '../img/img6.jpg';
import Modal from "react-modal";

const M6C = () => {
    const [modal_6_IsOpen, set_6_IsOpen ] = useState(false);

    const openModal_6_ = () => {
        set_6_IsOpen(true);
    }

    const closeModal_6_ = () => {
        set_6_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_6_} className="square" src={img6}/>
        <Modal
            isOpen={modal_6_IsOpen}
            onRequestClose={closeModal_6_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img6} />
                <div className="modal-pile">
                    <h3> Cut onions, celery and carrots for the "soffritto".</h3>
                    <button className="next-button" onClick={closeModal_6_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M6C as default}; 