import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FormContato.module.css';

export default function FormContato() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // Redirect to the successful completion page
        navigate('/success');
    };

    return (
        <>
            <p className={styles.pageTitle}>Informe os seus dados, entrarei em contato!</p>
            <form className={styles.formContato} onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" className={styles.nome} id="nome" required />
                </label>
                <label>
                    Email:
                    <input type="text" className={styles.email} id="email" required />
                </label>
                <label>
                    Empresa:
                    <input type="text" className={styles.empresa} id="telefone" required />
                </label>
                <label>
                    Assunto:
                    <input type="text" className={styles.assunto} id="assunto" required />
                </label>
                <label>
                    <input type="submit" className={styles.submitBtn} id="submitBtn" value="Enviar" />
                </label>
            </form>
        </>
    );
}