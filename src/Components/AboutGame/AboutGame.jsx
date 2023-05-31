/* eslint-disable no-undef */
import styles from "./AboutGame.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFaceSmile, faHandPointer} from '@fortawesome/free-regular-svg-icons'
import {faHeadphones, faEarthAmericas} from "@fortawesome/free-solid-svg-icons"
import Contacts from "./headerPart/Contacts"

const AboutGAme = () =>{
    return(
        <div className={styles.aboutGame}>
            <div className={styles.aboutGame_container}>
                <div className={styles.aboutGame_statics}>
                    <div className={styles.statics_bacground}>
                        <div className={styles.statics_list}>
                            <div>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faFaceSmile}  style={{color: "#ff0000",  }} />
                                        <h3>2570</h3>
                                        <p>Happy Clients</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHandPointer} style={{color: "#ff0000", }} />
                                        <h3>99</h3>
                                        <p>Satisfaction</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEarthAmericas}  style={{color: "#ff0000",}} />
                                        <h3>12</h3>
                                        <p>Battlefields</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHeadphones}  style={{color: "#ff0000",}} />
                                        <h3>15</h3>
                                        <p>Instructors</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    )
}

export default AboutGAme