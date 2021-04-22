import React from 'react'
import {instance} from "./axios"
import requests from './requests'
import "./Banner.css"


function Banner() {
    const [movie , setMovie] = React.useState([])
    
    React.useEffect (() => {
        async function fetch() {
            const req = await instance.get(requests.fetchNetflixOriginals)
            const random = Math.floor(Math.random()*req.data.results.length-1)
            setMovie(req.data.results[random])
            
            return req
        }
        fetch()
    },[])
    // console.log(movie)

    function truncate (str,n) {
        return str?.length > n? str.substr(0,n-1) + "..." : str
    }

    return (
        // header is for background image 
        <header className="banner"
        style={{backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
        backgroundSize:"cover"}} >

            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name } 
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            <br/>

            <div className="banner__bottomFade"></div>
            <br/>
        </header>
    )
}

export {Banner}
