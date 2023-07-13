import styles from "./Games.module.css"
import React,{useState} from "react"
import { Link } from "react-router-dom"



const Games = () =>{

    const [plan,] = useState(
        [
            {id:1, plan:"Sandard Plan", price: 7000},
            {id:2, plan:"Golden Plan", price: 9000},
            {id:3, plan:"Platinum Plan", price: 11000},
        ]
    )
    return(
        <div className={styles.games}>
            <div className={styles.games_container}>
                <div className={styles.games_blocks}>
                    {plan.map((val) =>{
                        return(
                    <div className={styles.games_block} key={val.id}>
                        <div className={styles.block_header}>
                            <h3>{val.plan}</h3>
                        </div>
                        <div className={styles.block_price} style = { val.price ===9000 ? { backgroundColor:'#E43D4E'} : (val.price ===11000)? {backgroundColor:'#AED13B'} : {}}>
                            <h2>{val.price}</h2><span>AMD</span>
                        </div>
                        <div className={styles.block_features}>
                            <div className={styles.features_list}>
                                <ul>
                                    <li>{val.price === 7000 ? "100 գնդակ" : val.price === 9000? "200 գնդակ" : "300 գնդակ"}</li>
                                    <li>{val.price === 7000 ? "հանդերձանք" : val.price === 9000? "հանդերձանք, 2 ատրճանակ" : "հանդերձանք, 2 ատրճանակ, 2 ծխեցման նռնակ"}</li>
                                    <li>Հյուրասիրություն</li>
                                </ul>
                            </div>
                            <div className={styles.block_features_button}>
                                <Link to="/"><button>BOOK NOW!</button></Link>
                            </div>
                        </div>
                    </div>
                    )}
                        )}
                </div>
            </div>
        </div>
    )
}

export default Games