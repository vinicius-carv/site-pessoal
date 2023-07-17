import styles from './Sobre.module.css'
import {Link} from "react-router-dom";
import pfp from '../assets/profilebg.png';

export default function Sobre() {
    return (
        <>
            <img src={pfp} alt={"Vinicius"} className={styles.pfp}/>
            <div className={styles.sobreContainer}>
                <p className={styles.desc}>Meu nome é Vinicius Alves de Carvalho. Nasci em 2002 em Brasília. Sou graduado em
                    Ciência da Computação pelo CEUB (Centro Universitário de Brasília) em 2023. Tenho uma paixão pelo
                    desenvolvimento tanto back-end quanto front-end. Meu sonho e aspiração é me tornar uma referência na
                    área. Atualmente, estou envolvido em projetos pessoais, acadêmicos (incluindo meu TCC) e também atuo
                    como pesquisador voluntário na UnB (Universidade de Brasília). Fique à vontade para explorar meus
                    projetos. Estou aberto a sugestões, propostas ou qualquer outro assunto. Além disso, você pode visitar
                    meus links externos abaixo:</p>
            </div>
            <div className={styles.extLinks}>
                <Link to={"https://www.linkedin.com/in/vinicius-carv/"} target={"_blank"} rel={"noreferrer"}><button>Linkedin</button></Link>
                <Link to={"https://github.com/vinicius-carv"} target={"_blank"} rel={"noreferrer"}><button>Github</button></Link>
                <Link to={"/projects"}><button>Projetos</button></Link>
                <Link to={"https://vinicius-carv.infinityfreeapp.com/static/media/curriculum_pt.pdf"} target={"_blank"} rel={"noreferrer"}><button>Curriculo PT-BR</button></Link>
                <Link to={"https://vinicius-carv.infinityfreeapp.com/static/media/curriculum_en.pdf"} target={"_blank"} rel={"noreferrer"}><button>Curriculo EN</button></Link>
            </div>
        </>
    )
}