import styles from "./Gallery.module.css"
import { galeryObj } from "./galleryObj"
import React, {useState} from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () =>{
    return(
        <div className={styles.gallery}>
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