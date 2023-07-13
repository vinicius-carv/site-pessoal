import React, { useState, useEffect } from 'react';
import pfp from '../assets/profilebg.png';
import styles from './Homepage.module.css';
import Footer from './Footer';
import {Link} from "react-router-dom";

const Homepage = () => {
    const [text, setText] = useState('');
    const fullText =
        'Ola, Seja bem-vindo(a) ao meu portfolio, primeiramente, obrigado pela visita! Aqui voce tem acesso aos projetos (Pessoais, Profissionais e Academicos) que eu faco parte alem de poder visualizar os meus repositorios onde mantenho o codigo fonte dos meus projetos, e por fim, voce tambem pode entrar em contato comigo atraves da barra de navegacao.';

    useEffect(() => {
        // Para a animacao funcionar, temos o currentText que e o que ja foi digitado
        let currentText = '';
        // index que e a posicao do "cursor" no texto inteiro
        let index = 0;

        const typeAnimation = setInterval(() => {
            // Adicionando cara caractere do texto inteiro para o texto que aparece na tela
            currentText += fullText[index];
            setText(currentText);
            index++;

            if (index === fullText.length) {
                clearInterval(typeAnimation);
            }
            // Tempo de intervalo para digitar cada letra, em ms
        }, 40);

        return () => {
            clearInterval(typeAnimation);
        };
    }, []);

    return (
        <>
            <div className={styles.homepageContainer}>
                <h1 className={styles.title}>Hey! I'm Vinicius</h1>
                <h2 className={styles.title2}>a Fullstack Software Engineer</h2>
            </div>
            <img src={pfp} alt="Vinicius" className={styles.pfp} />
            <div className={styles.infoContainer}>
                <p>{text}<span className={styles.cursor}>&nbsp;</span></p>
            </div>
            <Link to={"/projects"}><button className={styles.butao}>Quero Conhecer</button></Link>
            <Footer />
        </>
    );
};

export default Homepage;