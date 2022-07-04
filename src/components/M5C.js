import React, {useState} from "react";
import img5 from '../img/img5.jpg';
import Modal from "react-modal";

const M5C = () => {
    const [modal_5_IsOpen, set_5_IsOpen ] = useState(false);

    const openModal_5_ = () => {
        set_5_IsOpen(true);
    }

    const closeModal_5_ = () => {
        set_5_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_5_} className="square" src={img5}/>
        <Modal
            isOpen={modal_5_IsOpen}
            onRequestClose={closeModal_5_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img5} />
                <div className="modal-pile">
                    <h3> Cut the potatoes into 2 cm thick slices.</h3>
                    <button className="next-button" onClick={closeModal_5_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M5C as default}; 