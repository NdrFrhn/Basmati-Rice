import React, {useState} from "react";
import img10 from '../img/img10.jpg';
import Modal from "react-modal";

const M10C = () => {
    const [modal_10_IsOpen, set_10_IsOpen ] = useState(false);

    const openModal_10_ = () => {
        set_10_IsOpen(true);
    }

    const closeModal_10_ = () => {
        set_10_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_10_} className="square" src={img10}/>
        <Modal
            isOpen={modal_10_IsOpen}
            onRequestClose={closeModal_10_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img10} />
                <div className="modal-pile">
                    <h3> Rinse the rise under fresh water to clean up.</h3>
                    <button className="next-button" onClick={closeModal_10_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M10C as default}; 