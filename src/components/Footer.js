import styles from './Footer.module.css';
export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.footerLinks}>
                <a href="/about">Sobre mim</a>
                <a href="/contact">Contato</a>
                <a href="/projects">Projetos</a>
            </div>
            <p className={styles.footerDesc}>&copy; {new Date().getFullYear()} Vinicius Carvalho. Todos os direitos reservados.</p>
        </div>
    )
}