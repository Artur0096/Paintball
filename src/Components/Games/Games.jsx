import styles from "./Games.module.css"
import React,{useState} from "react"



const Games = () =>{

    const [plan,] = useState(
        [
            {id:1, plan:"Sandard Plan", price: 39},
            {id:2, plan:"Golden Plan", price: 69},
            {id:3, plan:"Platinum Plan", price: 99},
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
                        <div className={styles.block_price} style = { val.price ===69 ? { backgroundColor:'#E43D4E'} : (val.price ===99)? {backgroundColor:'#AED13B'} : {}}>
                            <span>$</span><h2>{val.price}</h2><span>99</span>
                        </div>
                        <div className={styles.block_features}>
                            <div className={styles.features_list}>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                            </div>
                            <div className={styles.block_features_button}>
                                <button>BOOK NOW!</button>
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