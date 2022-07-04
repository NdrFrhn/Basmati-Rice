import React, {useState} from "react";
import img15 from '../img/img15.jpg';
import Modal from "react-modal";

const M15C = () => {
    const [modal_15_IsOpen, set_15_IsOpen ] = useState(false);

    const openModal_15_ = () => {
        set_15_IsOpen(true);
    }

    const closeModal_15_ = () => {
        set_15_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_15_} className="square" src={img15}/>
        <Modal
            isOpen={modal_15_IsOpen}
            onRequestClose={closeModal_15_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img15} />
                <div className="modal-pile">
                    <h3> After 15-20 minutes of stiring occasionally and adding water to the 
                         lentils, the mission is complete.</h3>
                    <button className="next-button" onClick={closeModal_15_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M15C as default}; 