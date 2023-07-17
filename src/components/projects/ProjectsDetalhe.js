import axios from 'axios';
import {Link, useParams} from "react-router-dom";
import React, {useEffect,useState} from "react";
import styles from "./ProjectsDetalhe.module.css"

export const ProjectsDetalhe = () =>{
    const params = useParams();
    const projectId = params.projectId;

    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        axios
            // .get(`https://vinicius-carv.infinityfreeapp.com/scripts/fetchDetails.php?value=${encodeURIComponent(projectId)}`)
            .get(`http://localhost:8080/fetchDetails.php?value=${encodeURIComponent(projectId)}`)
            .then((response) => {
                const responseData = response.data; // Access the correct index containing the object
                console.log(responseData[0])
                setResponseData(responseData[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [projectId]);
    return(
        <div>
            {responseData ? (
                <div key={responseData.projectId} className={styles.informacoesProjeto}>
                    <img src={responseData.imgLink} alt={"programmer-coding.jpg"} />
                    <h1 className={styles.nomeProjeto}>{responseData.nome}</h1>
                    <p className={styles.descProjeto}>{responseData.description}</p>
                    <Link to={responseData.projectLink} target={"_blank"} rel={"noreferrer"}><button>Acesse o projeto</button></Link>
                </div>
            ) : (
                <div className={styles.loadingIcon}></div>
            )}
        </div>
    )
}