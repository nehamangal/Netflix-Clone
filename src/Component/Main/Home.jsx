import React, { useEffect, useState } from "react";
import './Home.scss'
import Row from "../Cardss/Row";
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const image_url = "https://image.tmdb.org/t/p/original"

const apikey = "f266052663c4928de95fabe435d1dc7f"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const nowplaying = "now_playing"
const popular="popular"
const topRated="top_rated"
const Home=()=>{
    const[upcomingMovie,setupcomingMovie] = useState([])
    const [nowplayingMovie,setnowplayingMovie] = useState([]);
    const[popularMovie,setpopularMovie] = useState([])
    const [topRatedMovie,settopRatedMovie] = useState([]);
    const[generes,setgeneres]=useState([])



    useEffect(()=>{
        const fetchupcoming = async()=>{
           const {data}=  await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
           setupcomingMovie(data.results);
        }
        const fetchNowPlaying = async()=>{
            const{data} = await axios.get(`${url}/movie/${nowplaying}?api_key=${apikey}`)
            setnowplayingMovie(data.results);
         }
         const fetchPopular = async()=>{
            const {data}=  await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
            setpopularMovie(data.results);
         }
         const fetchTopRated = async()=>{
            const {data}=  await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
            settopRatedMovie(data.results);
         }

         const getAllGenere = async()=>{
            const {data}=  await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
            // console.log(data.genres);
            setgeneres(data.genres);
         }
         getAllGenere()
         fetchNowPlaying()
         fetchPopular()
         fetchTopRated()
        fetchupcoming()

    },[])
return(
    <>
    <section className="home">
        <div className="banner" style={{backgroundImage:nowplayingMovie[5]? `url(${`${image_url}/${nowplayingMovie[5].poster_path}`})`:"black"
    }}>
        {
            nowplayingMovie[5] &&(
                <h1>{nowplayingMovie[5].original_title}</h1>
            )
        }
        {
            nowplayingMovie[5] && (

        <p>{nowplayingMovie[5].overview}</p>
            )
        }

<div><button><BiPlay />Play </button>
         <button>MyList <AiOutlinePlus /></button></div>
        </div>
          
        <div>
        <Row title={"Upcoming Movie"} arr={upcomingMovie}/>
        <Row title={"Now Playing Movie"} arr={nowplayingMovie}/>
        <Row title={"Popular Movie"} arr={popularMovie}/>
        <Row title={"Top Rated Movie"} arr={topRatedMovie}/>
        </div>

        <div className="genereBox">
            
                {generes.map((item,index)=>{
                    return(
                        <Link key={index} to={`/genre/${item.id}`}>{item.name }</Link>

                    )
                    
                }
                )}
            
        </div>
    </section>
    
    </>
)
}

export default Home