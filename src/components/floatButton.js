import styles from './floatButton.module.css';
import {ReactComponent as SpeakerIcon} from "../assets/ico-speak.svg";
import {Link} from "react-router-dom";

const floatButton = () =>{
    return(
        <Link to={"/contact"}>
            <button className={styles.btn}>
                <SpeakerIcon />
            </button>
        </Link>
    )
}
export default floatButton;