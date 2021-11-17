import React, { useState, useEffect } from 'react';


import styles from './Footer.module.css';

const Footer = () => {
    const [year, setYear] = useState('');

    useEffect(() => {
        console.log(new Date().getFullYear())
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p className={styles.footer__text}>Copyright &copy; {year}</p>
            </div>
            
        </footer>
    )
}

export default Footer;