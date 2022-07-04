import React, {useState} from "react";
import img7 from '../img/img7.jpg';
import Modal from "react-modal";

const M7C = () => {
    const [modal_7_IsOpen, set_7_IsOpen ] = useState(false);

    const openModal_7_ = () => {
        set_7_IsOpen(true);
    }

    const closeModal_7_ = () => {
        set_7_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_7_} className="square" src={img7}/>
        <Modal
            isOpen={modal_7_IsOpen}
            onRequestClose={closeModal_7_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img7} />
                <div className="modal-pile">
                    <h3> Metti a soffriggere il trito a fiamma media.</h3>
                    <button className="next-button" onClick={closeModal_7_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M7C as default}; 