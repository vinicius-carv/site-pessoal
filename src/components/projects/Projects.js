import ProjectsFrame from "./ProjectsFrame";
import styles from "./Projects.module.css"
import React, {useState, useEffect} from "react";

export default function Projects(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        //fetch(`https://vinicius-carv.infinityfreeapp.com/scripts/fetchData.php`)
        fetch(`http://localhost:8080/fetchData.php`)
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return(
        <div>
            {items.map((item) => (
                <div key={item.projectId} className={styles.projectsColumn}>
                    {/* Render each item here */}
                    <li><a href={"/projects/"+item.projectId}>
                        <ProjectsFrame
                            imgLink={item.imgLink} nome={item.nome} lugar={item.description} categoria={item.category}
                        /></a>
                    </li>
                </div>
            ))}
        </div>
    )
}