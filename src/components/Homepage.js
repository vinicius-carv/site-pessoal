import pfp from '../assets/profile.png'
import styles from './Homepage.module.css';
export default function Homepage(){
    return(
        <>
            <div className={styles.homepageContainer}>
                <h1 className={styles.title}>Hey! I'm Vinicius</h1>
                <h2 className={styles.title2}>a Fullstack Software Engineer</h2>
            </div>
            <img src={pfp} alt={"Vinicius"} className={styles.pfp}/>
            <div className={styles.infoContainer}>
                <p>Ola, Seja bem-vindo(a) ao meu portfolio, primeiramente, obrigado pela visita! Aqui voce tem acesso aos projetos (Pessoais, Profissionais e Academicos) que eu faco parte alem de poder visualizar os meus repositorios onde mantenho o codigo fonte dos meus projetos, e por fim, voce tambem pode entrar em contato comigo atraves da barra de navegacao</p>
            </div>
        </>
    )
}