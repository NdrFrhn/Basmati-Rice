import React, {useState} from "react";
import img1 from '../img/img1.jpg';
import Modal from "react-modal";

const M1C = () => {
    const [modal_1_IsOpen, set_1_IsOpen ] = useState(false);

    const openModal_1_ = () => {
        set_1_IsOpen(true);
    }

    const closeModal_1_ = () => {
        set_1_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_1_} className="square" src={img1}/>
        <Modal
            isOpen={modal_1_IsOpen}
            onRequestClose={closeModal_1_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img1} />
                <div className="modal-pile">
                    <h3> Clean asparagi. Sciacqua bene gli asparagi sotto l'acqua corrente.</h3>
                    <button className="next-button" onClick={closeModal_1_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M1C as default}; 