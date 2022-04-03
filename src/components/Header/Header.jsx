
import React from 'react';
import styles from './Header.module.css';


const Header = () => (
    
    <header>
        <div className={styles.overlay}>
            <h1 data-testid='logo'>Chuck Norris Joke App</h1>
        </div>
    </header>

    
);

export default Header;
                