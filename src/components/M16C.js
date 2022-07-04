import React, {useState} from "react";
import img16 from '../img/img16.jpg';
import Modal from "react-modal";

const M16C = () => {
    const [modal_16_IsOpen, set_16_IsOpen ] = useState(false);

    const openModal_16_ = () => {
        set_16_IsOpen(true);
    }

    const closeModal_16_ = () => {
        set_16_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_16_} className="square" src={img16}/>
        <Modal
            isOpen={modal_16_IsOpen}
            onRequestClose={closeModal_16_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img16} />
                <div className="modal-pile">
                    <h3> Switch off the rice afte 60-70 minutes. Remove the lid to let the
                          vapour come out.
                    </h3>
                    <button className="next-button" onClick={closeModal_16_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M16C as default}; 