import React from 'react';

import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <img src={logo} className={styles.header__logo} alt="Traffic Isobar logo" />
                <Navigation />
            </div>
            
        </header>
    )
}

export default Header;