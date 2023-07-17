import styles from "./ProjectsFrame.module.css";
export default function ProjectsFrame({imgLink,nome,lugar,categoria}){
    return(
        <>
            <ul className={styles.resumoProjeto}>
                <img src={imgLink} alt={"project.jpg"}/>
                <li>Nome: {nome}</li>
                <li>Descricao: {lugar}</li>
                <li>Tipo: {categoria}</li>
            </ul>
        </>
    )
}