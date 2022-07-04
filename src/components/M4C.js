import React, {useState} from "react";
import img4 from '../img/img4.jpg';
import Modal from "react-modal";

const M4C = () => {
    const [modal_4_IsOpen, set_4_IsOpen ] = useState(false);

    const openModal_4_ = () => {
        set_4_IsOpen(true);
    }

    const closeModal_4_ = () => {
        set_4_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_4_} className="square" src={img4}/>
        <Modal
            isOpen={modal_4_IsOpen}
            onRequestClose={closeModal_4_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img4} />
                <div className="modal-pile">
                    <h3> Peel some potatoes.</h3>
                    <button className="next-button" onClick={closeModal_4_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M4C as default}; 