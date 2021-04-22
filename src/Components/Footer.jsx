import React from "react"
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"
import { FaInstagram , FaTwitterSquare , FaFacebookSquare , FaYoutube} from 'react-icons/fa';
import {BiCopyright} from "react-icons/bi"


const Footer = ( ) => {
    return (
            <div className={styles.footer}>
                <div className={styles.footer_box} >
                    <div className = {styles.footer_main} > 
                        <div className={styles.footer_left}>
                            <div>
                                <ul>
                                <h4>Your Account</h4>
                                    <li>Settings</li>
                                    <li>Log Out</li>
                                    <li>Help</li>
                                </ul>
                            </div>
                            <div>
                                
                                <ul>
                                <h4>Discover</h4>
                                    <li>Groups</li>
                                    <li>Calender</li>
                                    <li>Topics</li>
                                    <li>Cities</li>
                                </ul>
                            </div>
                            <div>
                                
                                <ul>
                                    <h4>Meetup</h4>
                                    <li>About</li>
                                    <li>Meetup Pro</li>
                                    <li>Careers</li>
                                    <li>Apps</li>
                                    <li>Blogs</li>
                                    <li>Accessibility</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footer_right} >  
                            <h4>Follow us</h4>
                            <div style={{display:"flex"}}>
{/* hover classname            */}
                            <div><FaFacebookSquare className={styles.hover} style={{height:"1.5em" ,width:"1.5em" }}  /></div>
{/* random inline              */}
                            <div><FaTwitterSquare onMouseOver="height:20px" style={{height:"1.5em" ,width:"1.5em"}}/></div> 
                            <div><FaYoutube style={{height:"1.5em" ,width:"1.5em"}}/></div>   
                            <div style={{marginRight:"0"}}><FaInstagram style={{height:"1.5em" ,width:"1.5em"}}/></div>
                            </div>
                            <div>
                                <div><img src="https://www.meetup.com/mu_static/en-US/download_en.b85d892d.png" alt="play store"/> </div>      

                                <div><img src="https://www.meetup.com/mu_static/en-US/download_en.cf6dad40.png" alt="goggle play"/></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.clear}></div>
            </div>

        
    )
}

export {Footer}