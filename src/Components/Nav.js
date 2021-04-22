import React from 'react'
import "./Nav.css"

function Nav() {
    const [show , setShow] = React.useState("")

    React.useEffect (() => {
        window.addEventListener("scroll" , () => {
            if ( window.scrollY > 100 ) {
                setShow(true)
            } else setShow(false)
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // }

    },[])

    return (
        <div className={`nav ${show && "nav__black" }`}>
            <img className="nav__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" 
            alt="netflix logo"/>

            <img className="nav__avatar" 
            src="https://tse1.mm.bing.net/th?id=OIP.WQtvVSX_upiNrA-gk9TEpAAAAA&pid=Api&rs=1&c=1&qlt=95&w=72&h=72" 
            alt="netflix logo"/>
        </div>
    )
}

export default Nav
