import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, callback }) => {
    return (
        <button type="button" className={styles.button} onClick={callback}>{text}</button>
    )
}

export default Button;
