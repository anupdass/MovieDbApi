import React from 'react';
import './SingleMovie.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '70%',
        height: '70%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
    },
};

Modal.setAppElement('#root')

const SingleMovie = ({ title, overView, poster_path, rating, release_date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div >
            <div className='single-movie'>
                <div className='image'>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} onClick={openModal} alt="" />
                    <div className='content'>
                        <span>{title}</span>
                        <span className='ratting'>{rating}</span>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <img className='modal-img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                    </div>
                    <div className='modal-content'>
                        <h4>{title}</h4>
                        <h3>Movie Ratting : {rating}</h3>
                        <h4> Release Date : {release_date}</h4>
                        <span>{overView}</span>
                        <div>
                            <button className='close-btn' onClick={closeModal}>close</button>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>


    );
};

export default SingleMovie;