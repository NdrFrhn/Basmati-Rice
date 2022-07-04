import React, {useState} from "react";
import img17 from '../img/img17.jpg';
import Modal from "react-modal";

const M17C = () => {
    const [modal_17_IsOpen, set_17_IsOpen ] = useState(false);

    const openModal_17_ = () => {
        set_17_IsOpen(true);
    }

    const closeModal_17_ = () => {
        set_17_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_17_} className="square" src={img17}/>
        <Modal
            isOpen={modal_17_IsOpen}
            onRequestClose={closeModal_17_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img17} />
                <div className="modal-pile">
                    <h3> Using a flat tool, remove the rice trying to not touch the bottom
                        layer of potatoes. You can remove the potatoe layer eventually.</h3>
                    <button className="next-button" onClick={closeModal_17_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M17C as default}; 