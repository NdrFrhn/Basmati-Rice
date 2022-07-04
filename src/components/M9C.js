import React, {useState} from "react";
import img9 from '../img/img9.jpg';
import Modal from "react-modal";

const M9C = () => {
    const [modal_9_IsOpen, set_9_IsOpen ] = useState(false);

    const openModal_9_ = () => {
        set_9_IsOpen(true);
    }

    const closeModal_9_ = () => {
        set_9_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_9_} className="square" src={img9}/>
        <Modal
            isOpen={modal_9_IsOpen}
            onRequestClose={closeModal_9_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img9} />
                <div className="modal-pile">
                    <h3> Combine the lentils with the "soffritto" and some oil in a soucepan.
                        Add boiling water to the mixture when it dries out. The hob flame is intense.
                    </h3>
                    <button className="next-button" onClick={closeModal_9_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M9C as default}; 