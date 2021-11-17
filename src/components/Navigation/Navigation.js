import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {


    const location = useLocation();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
                <li className={styles.navigation__item}>
                    <NavLink className={`${styles.navigation__link} ${location.pathname === '/' && styles.navigation__link_active}`} to='/'>Главная</NavLink>
                </li>
                <li className={styles.navigation__item}>
                    <NavLink className={`${styles.navigation__link} ${location.pathname === '/example' && styles.navigation__link_active}`} to='/example' >Пример</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;