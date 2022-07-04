import React, {useState} from "react";
import img18 from '../img/img18.jpg';
import Modal from "react-modal";

const M18C = () => {
    const [modal_18_IsOpen, set_18_IsOpen ] = useState(false);

    const openModal_18_ = () => {
        set_18_IsOpen(true);
    }

    const closeModal_18_ = () => {
        set_18_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_18_} className="square" src={img18}/>
        <Modal
            isOpen={modal_18_IsOpen}
            onRequestClose={closeModal_18_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img18} />
                <div className="modal-pile">
                    <h3> The food is ready. Enjoy!</h3>
                    <button className="next-button" onClick={closeModal_18_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M18C as default}; 