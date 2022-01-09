import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <span>MovieServerDB</span>
            </div>
            <div className='search'>
                <input type="text" name="" id="" placeholder='Search any kind of Movie....' />
                <input type="submit" className='submit-btn' />
            </div>
            <div>
                <p>Welcome to Movie Server DB</p>
            </div>
        </div >
    );
};

export default Header;