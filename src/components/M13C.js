import React, {useState} from "react";
import img13 from '../img/img13.jpg';
import Modal from "react-modal";

const M13C = () => {
    const [modal_13_IsOpen, set_13_IsOpen ] = useState(false);

    const openModal_13_ = () => {
        set_13_IsOpen(true);
    }

    const closeModal_13_ = () => {
        set_13_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_13_} className="square" src={img13}/>
        <Modal
            isOpen={modal_13_IsOpen}
            onRequestClose={closeModal_13_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img13} />
                <div className="modal-pile">
                    <h3> Pour the rise and asparagi on top of the potato layer. 
                         Do not press the mix.
                    </h3>
                    <button className="next-button" onClick={closeModal_13_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M13C as default}; 