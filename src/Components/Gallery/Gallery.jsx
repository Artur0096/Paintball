import styles from "./Gallery.module.css"
import { galeryObj, galeryObj2 } from "./galleryObj"
import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {makeAnimationSlideUpDown} from "./AnimatedVisibility";




function Slider(){
    return(
        <div className={styles.slider_Style}>   
                    
        <ImageGallery
        items={galeryObj}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        showIndex={true}
        />
</div>
    )
}
function Slider2(){
    return(
        <div className={styles.slider_Style}>            
        <ImageGallery
        items={galeryObj2}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={3000}
        slideOnThumbnailOver={true}
        showIndex={true}
        />
</div>
    )
}
const AnimatedNavbar = makeAnimationSlideUpDown(Slider);
const AnimatedNavbar2 = makeAnimationSlideUpDown(Slider2);
const Gallery = () =>{
    const [games,setGames] = useState(true)
    const [ware, setWare] = useState(false)

    const gamesHandleChange = () =>{
        setGames(!games)
    }
    const wareHandleChange = () =>{
        setWare(!ware)
    }

    return(
        <div className={styles.gallery}>
            <div>
                <div className={styles.gallery_gamesLine}>
                    <h1 onClick={gamesHandleChange}>խաղեր</h1>
                    {!games ?
                    <FontAwesomeIcon onClick={gamesHandleChange} icon={faAngleDown} style={{color: "#fafcff", cursor: "pointer"}} size="2xl"/>
                    :
                    <FontAwesomeIcon onClick={gamesHandleChange} icon={faAngleUp} style={{color: "#fafcff", cursor: "pointer"}} size="2xl"/>
                    }
                </div>
                <AnimatedNavbar2 open={games} />
               
            </div>
            
            
            <div>
                <div className={styles.gallery_Ware}>
                    <h1 onClick={wareHandleChange}>հանդերձանք</h1>
                    {!ware ?
                    <FontAwesomeIcon onClick={wareHandleChange} icon={faAngleDown} style={{color: "#fafcff", cursor: "pointer"}} size="2xl"/>
                    :
                    <FontAwesomeIcon onClick={wareHandleChange} icon={faAngleUp} style={{color: "#fafcff", cursor: "pointer"}} size="2xl"/>
                    }
                </div>
                <AnimatedNavbar open={ware} />
            </div>
      </div>
    )

    /*let arr = galeryObj.slice(0, 6)
    const [state, setState] = useState(false)
    const [modal, setModal] = useState(false)
    const changeState = () =>{
        setState(!state)
    }

   

    const [imageIndex, setImageIndex] = useState()
    


    const changeStateBoth = (val,index) =>{
        setImageIndex(index)
        setModal(true);
    }
 

    const item = galeryObj.filter((val,index) =>{
        return index === imageIndex 
    })
    let item2 = item.map(val => val.img)
    return(
        <><div className={styles.gallery}>
            <div className={styles.gallery_elements}>
                {!state ?
                    arr.map((val, index) => {
                        return (
                            <div className={styles.gallery_images} key={index} onClick={() => changeStateBoth(val, index)}>
                                <img src={val.img} alt="alt" />
                            </div>
                        )
                    }) :
                    galeryObj.map((val, index) => {
                        return (
                            <div className={styles.gallery_images} key={index} onClick={() => changeStateBoth(index)}>
                                <img src={val.img} alt="alt" />
                            </div>
                        )
                    })}
            </div>
            <div className={styles.gallery_button}>
                <button onClick={changeState}>
                    {!state ? "ամբողջը" : "close"}
                </button>
            </div>
        </div>
        
            </>
    )*/
}

export default Gallery