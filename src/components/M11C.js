import React, {useState} from "react";
import img11 from '../img/img11.jpg';
import Modal from "react-modal";

const M11C = () => {
    const [modal_11_IsOpen, set_11_IsOpen ] = useState(false);

    const openModal_11_ = () => {
        set_11_IsOpen(true);
    }

    const closeModal_11_ = () => {
        set_11_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_11_} className="square" src={img11}/>
        <Modal
            isOpen={modal_11_IsOpen}
            onRequestClose={closeModal_11_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img11} />
                <div className="modal-pile">
                    <h3> Fill a pot with rise, asparagi and abundant water. Put on the hob 
                          with high flame till it start boiling (2/3 minutes). After remove
                          the pot from the fire, empty the whole into a colander. Remember to 
                          clean the pot that is going to be used again.
                    </h3>
                    <button className="next-button" onClick={closeModal_11_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M11C as default}; 