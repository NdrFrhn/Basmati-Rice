import React, {useState} from "react";
import img8 from '../img/img8.jpg';
import Modal from "react-modal";

const M8C = () => {
    const [modal_8_IsOpen, set_8_IsOpen ] = useState(false);

    const openModal_8_ = () => {
        set_8_IsOpen(true);
    }

    const closeModal_8_ = () => {
        set_8_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_8_} className="square" src={img8}/>
        <Modal
            isOpen={modal_8_IsOpen}
            onRequestClose={closeModal_8_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img8} />
                <div className="modal-pile">
                    <h3> Wash and rinse multiple times the red lentils, till the water is crystl-clear.</h3>
                    <button className="next-button" onClick={closeModal_8_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M8C as default}; 