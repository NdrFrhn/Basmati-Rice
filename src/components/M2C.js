import React, {useState} from "react";
import img2 from '../img/img2.jpg';
import Modal from "react-modal";

const M2C = () => {
    const [modal_2_IsOpen, set_2_IsOpen ] = useState(false);

    const openModal_2_ = () => {
        set_2_IsOpen(true);
    }

    const closeModal_2_ = () => {
        set_2_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_2_} className="square" src={img2}/>
        <Modal
            isOpen={modal_2_IsOpen}
            onRequestClose={closeModal_2_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img2} />
                <div className="modal-pile">
                    <h3> Cut asparagi as shown.</h3>
                    <button className="next-button" onClick={closeModal_2_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M2C as default}; 