import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FormContato.module.css';

export default function FormContato() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        empresa: '',
        assunto: '',
    });
    // eslint-disable-next-line
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // You can use the 'formData' state to access the form data
        // For example, you can send the data to the server using Axios or fetch API
        console.log("Handle Submit")
        // Redirect to the successful completion page (e.g., '/success')
        navigate('/success');
    };return (
        <>
            <p className={styles.pageTitle}>Informe os seus dados, entrarei em contato!</p>
            <form className={styles.formContato} onSubmit={handleSubmit} method="POST" action="http://localhost:8080/submit.php">
                <label>
                    Nome:
                    <input type="text" className={styles.nome} name="nome" required />
                </label>
                <label>
                    Email:
                    <input type="text" className={styles.email} name="email" required />
                </label>
                <label>
                    Empresa:
                    <input type="text" className={styles.empresa} name="telefone" required />
                </label>
                <label>
                    Assunto:
                    <input type="text" className={styles.assunto} name="assunto" required />
                </label>
                <label>
                    <input type="submit" className={styles.submitBtn} name="submitBtn" value="Enviar" />
                </label>
            </form>
        </>
    );
}