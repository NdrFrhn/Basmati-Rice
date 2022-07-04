import React, {useState} from "react";
import img12 from '../img/img12.jpg';
import Modal from "react-modal";

const M12C = () => {
    const [modal_12_IsOpen, set_12_IsOpen ] = useState(false);

    const openModal_12_ = () => {
        set_12_IsOpen(true);
    }

    const closeModal_12_ = () => {
        set_12_IsOpen(false);
    }

    return (
        <div className="container">
        <img onClick={openModal_12_} className="square" src={img12}/>
        <Modal
            isOpen={modal_12_IsOpen}
            onRequestClose={closeModal_12_}
            className='modal'
            ariaHideApp={false}
            closeTimeOutMS={200}
        > 
            <div className="img">
                <img className="img" src={img12} />
                <div className="modal-pile">
                    <h3> In the clean pot, pour abundant oil. On top of it lay the potatoes.
                        You can put some thurmeric and mixed herbs on the potatoes. 
                    </h3>
                    <button className="next-button" onClick={closeModal_12_}> Back </button>
                </div>
            </div>
        </Modal>
        </div>
    );
}

export {M12C as default}; 