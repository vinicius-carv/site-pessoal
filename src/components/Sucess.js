import {Link} from "react-router-dom";

export default function Success(){
    return(
        <div style={{
            position: "absolute",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            top:"25%"}}>
            <img src={"https://media.tenor.com/nOCxW5ZYvhMAAAAC/thank-you.gif"} alt={"thank-you.gif"} style={{position:"relative",left:"28%"}}/>
            <p style={{fontSize:"large"}}>Obrigado por entrar em contato, verifique sua caixa de e-mail, enquanto isso, aproveite para dar uma olhada nos meus projetos</p>
            <Link to={"/projects"}><button style={{position:"relative",left:"45%"}}>Projetos</button></Link>
        </div>
    )
}