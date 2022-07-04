import React, {useState} from "react";
import img3 from '../img/img3.jpg';
import Modal from "react-modal";

const M3C = () => {
    const [modal_3_IsOpen, set_3_IsOpen ] = useState(false);

    const openModal_3_ = () => {
        set_3_IsOpen(true);
    }

    const closeModal_3_ = () => {
        set_3_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_3_} className="square" src={img3}/>
        <Modal
            isOpen={modal_3_IsOpen}
            onRequestClose={closeModal_3_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img3} />
                <div className="modal-pile">
                    <h3> Use a tablespoon of sodium bicarbonate in abundant water for 5 min
                         to further clean.
                    </h3>
                    <button className="next-button" onClick={closeModal_3_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M3C as default}; 