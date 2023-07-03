import AboutGAme from "../AboutGame/AboutGame"
import AboutUs from "../AboutUs/AboutUs"
import Gallery from "../Gallery/Gallery"
import Games from "../Games/Games"
import styles from "./Navbar.module.css"
import { Routes, Route, NavLink } from "react-router-dom"
import React, { useEffect,useState } from "react"


const NavBar = () =>{

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
        <div>
            {windowSize > 806?
            <div className={styles.navbar}>
                <div className={styles.navbar_container}>
                    
                    <div className={styles.navbar_menu}>
                        <ul>
                            <li>
                                <NavLink
                                 style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                 to={"/"}>մեր մասին</NavLink> 
                            </li>
                            <li>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"games"}>խաղեր</NavLink> 
                            </li>
                            <li>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"gallery"}>պատկերասրահ</NavLink> 
                            </li>
                            <li>
                                <NavLink
                                style={({isActive}) => {return {color: isActive ? '#dd3c4d' : ""}}}
                                to={"aboutgame"}>խաղի մասին</NavLink> 
                            </li>
                        </ul>
                    </div>
                    {/*<div className={styles.hamburger_menu_elements}> 
                            <Hamburger color="red" toggled = {isOpen} size="40" rounded toggle={setOpen} style = {{padding: "25px"}}/>
                        {isOpen?
                        <div className={styles.hamburger_menu}>
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
                        </div>*/}
                    
                </div>  
            </div>
            :null}
            <Routes>
                <Route path="/" element = {<AboutUs/>}/>
                <Route path="/games" element = {<Games/>}/>
                <Route path="/gallery" element = {<Gallery/>}/>
                <Route path="/aboutgame" element = {<AboutGAme/>}/>
            </Routes>
        </div>
    )
}

export default NavBar