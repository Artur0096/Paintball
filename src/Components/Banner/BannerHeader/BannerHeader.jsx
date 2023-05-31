import styles from "./BannerHeader.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react';
import { Divide as Hamburger } from "hamburger-react";
import { Routes, Route, NavLink } from "react-router-dom"
const BannerHeader = () =>{
    const [isOpen, setOpen] = useState(false)
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
      ]);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return(
        <div className={styles.BannerHeader}>
            <div className={styles.BannerHeader_container}>
                <div className={styles.BannerHeader_elements}>
                    <div className={styles.BannerHeader_logo}>
                        <img src="/images/logoArm.png" alt="armpaintball" />
                    </div>
                    {windowSize > 805?
                    <div className={styles.BannerHeader_info}>
                        <div className={styles.BannerHeader_info_list}>
                            <ul>
                                <li>
                                    <img src="/images/phone.png" alt="phone" />
                                    <div>
                                        <p>05555555</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/images/location.png" alt="location" />
                                    <div>
                                        <p>asdasdasd</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/images/time.png" alt="time" />
                                    <div>
                                        <p>10:00 - 21:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>:null}
                    {windowSize > 805?
                    <div className={styles.BannerHeader_social}>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" style={{color:"white", border: "2px solid white", borderRadius:"50%", padding:"7px 11px", marginRight: "15px", cursor:"pointer"}}/>
                        <FontAwesomeIcon icon={faInstagram} size="lg" style={{color:"white", border: "2px solid white", borderRadius:"50%", padding:"7px 8px", cursor: "pointer"}}/>
                    </div>
                    :
                    <div className={styles.BannerHeader_socialSecond}>
                        <Hamburger color="red" toggled = {isOpen} size="40" rounded toggle={setOpen}/>
                        {isOpen?
                        <div className={styles.BannerHeader_socialSecond_list}>
                           
                            <ul>
                            <li onClick={() => setOpen(!isOpen)}>
                                <NavLink
                                 style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                 to={"/"}>մեր մասին</NavLink> 
                            </li>
                            <li onClick={() => setOpen(!isOpen)}>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"games"}>խաղեր</NavLink> 
                            </li>
                            <li onClick={() => setOpen(!isOpen)}>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"gallery"}>պատկերասրահ</NavLink> 
                            </li>
                            <li onClick={() => setOpen(!isOpen)}>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"aboutgame"}>խաղի մասին</NavLink> 
                            </li>
                            </ul>
                        </div>:null}
                    </div>   
                }
                </div>
            </div>
        </div>
    )
}

export default BannerHeader