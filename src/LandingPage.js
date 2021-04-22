import React from 'react'
import Nav from './Components/Nav'
import "./Components/Nav.css"
import "./LandingPage.css"
import { useHistory ,Redirect} from "react-router-dom";

function LandingPage() {
    const history = useHistory()

    const handleClick = () => {
        history.push("/home")
        // <Redirect to="/home" />
    }
    return (
        <div className="Landing__page">
            <Nav />
            <div className="landing__content">
                <h1>
                    Who's Watching ?
                </h1>

                <div className="image__box">
                    
                    <img onClick={handleClick} src="https://occ-0-2890-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGNQWc7L2Jfalunkat8icngCfR-dBCS8KUpqf7qQV6Hib9aoG9a0ffTlDC1ZdOT6_xkwl8-SPNZ2UUnZQbSPaszQ9Fv.png?r=6a1" alt="baby"/>
                    <img onClick={handleClick} src="https://occ-0-2890-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYTt3Ag0kwDhSmO3AT2sD4mfkoAO8fZsxfDgLKDU4zEKtQR6Ppk2Vfl6UsaI8I3hYjdnenK3F4IMju7VQqTQCbg1SIQt.png?r=a30" alt="men"/>
                    <img onClick={handleClick} src="https://occ-0-2890-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaUPoBCVB1RRbB3EfRHmR0B--jKWw5PtSZJG0K6KlbQwBvJPKU8mI-SSMWepaLtGsiR9SQnE92jjKFidoUpPQq-hGhE1.png?r=5cf" alt="child"/>
                </div>

            </div>

        </div>
    )
}

export default LandingPage
