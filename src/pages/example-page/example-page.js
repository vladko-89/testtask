import React, { useState, useEffect } from 'react';

import MainTitle from '../../components/MainTitle/MainTitle';
import Button from '../../components/Button/Button';
import { getCat } from '../../utils/api'

import styles from './example-page.module.css';

const ExamplePage = () => {

    const [catImage, setCatImage] = useState({});

    const getCatImage = () => {
        console.log('rrreee')
        getCat()
        .then((res) => setCatImage(res[0]))
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getCatImage()
    }, [])

    return (
        <section className={styles.section}>
            <MainTitle title="Пример" />
            <div className={`container ${styles.section__container}`}>
                <h2 className={styles.section__title}>Картинка с котом</h2>
                <img className={styles.section__image} src={catImage.url} alt={catImage.id}/>
                <Button text="Загрузить другую" callback={getCatImage}/>
            </div>
            
        </section>
    )
}

export default ExamplePage;