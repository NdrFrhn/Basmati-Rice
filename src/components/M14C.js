import React, {useState} from "react";
import img14 from '../img/img14.jpg';
import Modal from "react-modal";

const M14C = () => {
    const [modal_14_IsOpen, set_14_IsOpen ] = useState(false);

    const openModal_14_ = () => {
        set_14_IsOpen(true);
    }

    const closeModal_14_ = () => {
        set_14_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_14_} className="square" src={img14}/>
        <Modal
            isOpen={modal_14_IsOpen}
            onRequestClose={closeModal_14_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img14} />
                <div className="modal-pile">
                    <h3> Close the pot with a lid. Put the fire to the minimum and , without
                        opening the lide at all, let it cook for 60/70 minutes.
                    </h3>
                    <button className="next-button" onClick={closeModal_14_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M14C as default}; 