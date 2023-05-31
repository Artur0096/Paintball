import styles from "./AboutUs.module.css";
import React, { useRef, useState } from "react";
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser';
import 'react-phone-number-input/style.css'



const AboutUs = () =>{
    const [value, setValue] = useState()
    const [text, setText] = useState({
        fullName: "",
        email: "",
        message: "",
    })

    const handleChange = (e) =>{
        setText({ ...text, [e.target.name]: e.target.value });
        console.log(text)
    }
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
     
      emailjs.sendForm('service_nkm0jv7', 'template_bv4ttgq', form.current, '_yHuJsVCTpXzXTQJZ')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setValue("")
    };

    return(
        <div className={styles.aboutUs}>
            <div className={styles.aboutUs_container}>
                <div className={styles.aboutUs_sides}>
                    <div className={styles.aboutUs_leftSide}>
                        <div className={styles.aboutUs_title}>
                            <h1>ինչու՞</h1>
                            <h2>ընտրել մեզ</h2>
                        </div>
                        <div className={styles.aboutUs_text}>
                            <p>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                               has been the industry's standard dummy text ever since the 1500s, when an unknown
                               printer took a galley of type and scrambled it to make a type specimen book. It
                               has survived not only five centuries, but also the leap into electronic.
                            </p>
                        </div>
                        <div className={styles.aboutUs_reasons}>
                            <div className={styles.aboutUs_like}>
                                <div>
                                    <img src="/images/like.png" alt="like" />
                                </div>
                                <div>
                                    <p>լավագույն պարագաներ</p>
                                </div>
                            </div>
                            <div className={styles.aboutUs_like}>
                                <div>
                                    <img src="/images/star.png" alt="star" />
                                </div>   
                                <div>
                                    <p>լավագույն տեղակայում</p>
                                </div>
                            </div>
                            <div  className={styles.aboutUs_like}>
                                <div>
                                    <img src="/images/heart.png" alt="heart" />
                                </div>
                                <div>
                                    <p>գին եվ որակ համադրություն</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutUs_rightSide}>
                        <div className={styles.aboutUs_form}>
                            <div className={styles.aboutUs_form_title}>
                                <p>ամրագրել</p>
                            </div>
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" placeholder="Full name" value={text.name} name ="user_name" onChange={handleChange}/>
                                <input type="email" placeholder="Email" value={text.name} name="user_email" onChange={handleChange}/>
                                <PhoneInput defaultCountry="AM" style={{width:"72%", marginLeft:"23px"}} placeholder="Phone" value={value} name="user_phone" onChange={setValue}/>
                                <textarea placeholder="Message" name = "message" value={text.name} onChange={handleChange}/>
                                <input type="submit" value="ուղարկել" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default AboutUs