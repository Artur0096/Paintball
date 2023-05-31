import styles from "./Banner.module.css"
import BannerHeader from "./BannerHeader/BannerHeader"
import { Link } from 'react-router-dom';


const Banner = () =>{
    return(
        <div className={styles.banner}>
          <BannerHeader/>
          <div className={styles.banner_hero}>
            <div className={styles.banner_hero_container}>
                <div className={styles.banner_hero_title}>
                    <h1>ժամանակն է սկսել խաղը</h1>
                </div>
                <div className={styles.banner_hero_text}>
                    <p>Մենք կապահովենք ձեր ուրախ ժամանցը և այլն և այլն</p>
                </div>
                <div className={styles.banner_order_button}>
                    <Link to="/">
                        <button >
                            ամրագրել
                        </button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Banner