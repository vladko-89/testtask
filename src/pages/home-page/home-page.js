import React from 'react';
import { useNavigate } from 'react-router-dom';

import MainTitle from '../../components/MainTitle/MainTitle';
import Button from '../../components/Button/Button';

import author from '../../images/author.jpg'
import styles from './home-page.module.css';

const HomePage = () => {

    const navigate = useNavigate();
    return (
        <section className={styles.person}>
            <MainTitle title="Обо мне" />
            <div className={`${styles.person__content} container`}>
                <div className={styles.person__container}>
                    <h2 className={styles.person__title}>Всем привет</h2>
                    <p className={styles.person__text}>Меня зовут Владислав и я фронтенд-разработчик. Летом этого года закончил курс Веб-разработчик и React-разработчик Яндекс.Практикума. На данный момент участвую в качестве фронтенд-разработчика в коммерческом проекте и продолжаю углублять свои знания в разработке самостоятельно. </p>
                    <p className={styles.person__text}>Из хобби: занимаюсь музыкой - играю на скрипке и гитаре</p>
                    <Button text="Смотреть работу" callback={() => navigate('/example')} />
                </div>
                <img className={styles.person__image} src={author} alt="Фото автора"/>
            </div>
            
        </section>
    )
}

export default HomePage;