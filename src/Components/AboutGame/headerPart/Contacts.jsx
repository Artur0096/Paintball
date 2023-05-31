import styles from "./Contacts.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhone, faEarthAmericas} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF,faPinterestP} from '@fortawesome/free-brands-svg-icons'

const Contacts = () =>{
    return(
        <div className={styles.Contacts}>
            <div className={styles.Contacts_container}>
                <div className={styles.Contacts_background}>
                    <div className={styles.Contacts_list}>
                        <div className={styles.adrees_info}>
                        <h2>կոնտակտներ</h2>
                        <iframe 
                            title="This is a unique title" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9331128666213!2d44.48061271190901!3d40.188301971358214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0a419b32c9%3A0x61373599a8c3300f!2sKaren%20Demirtchian%20Sport%2FConcert%20Complex!5e0!3m2!1sru!2sam!4v1681989733491!5m2!1sru!2sam"
                            width="450" 
                            height="300" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div className={styles.adrees_info_lines}>
                            <div className={styles.adrees_str}>
                                <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ff0000", fontSize: "25px", marginRight:"15px"}} />
                                <span>Karen Demirtchian Sport/Concert Complex</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} style={{color: "#ff0000", fontSize: "25px", marginRight:"15px"}}/>
                                <span>(+374)77-77-77-77</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} style={{color: "#ff0000", fontSize: "25px", marginRight:"15px"}}/>
                                <span>paintball@support.com</span>
                            </div>
                        </div>
                        </div>
                        {/*<div className={styles.workTime_info}>
                            <h2>աշխատանքային ժամեր</h2>
                            <div className={styles.workTime_days}>
                                <div className={styles.workTime_days_week}>
                                    <p>Monday - Friday</p>
                                    <p>9:00 - 17:00</p>
                                </div>
                                <div className={styles.workTime_days_saturday}>
                                    <p>Saturday</p>
                                    <p>9:00 - 20:00</p>
                                </div>
                                <div className={styles.workTime_days_sunday}>
                                    <p>Sunday</p>
                                    <p>10:00 - 15:00</p>
                                </div>
                            </div>
    </div>*/}
                        <div className={styles.social_network}>
                            <h2>հետեվեք մեզ</h2>
                            <div className={styles.social_network_icons}>
                                <ul>
                                    <li><FontAwesomeIcon icon={faFacebookF} size="lg" style={{color:"white", border: "2px solid white", borderRadius:"50%", padding:"7px 11px", marginRight: "15px", cursor:"pointer"}}/></li>
                                    <li><FontAwesomeIcon icon={faInstagram} size="lg" style={{color:"white", border: "2px solid white", borderRadius:"50%", padding:"7px 8px", marginRight: "15px", cursor:"pointer"}}/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts