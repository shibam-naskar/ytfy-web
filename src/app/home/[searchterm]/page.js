"use client"

import { useEffect, useState } from "react"
import { useMusicStore } from "@/hooks/store";
import { writeToLocalStorage,writeLocalstoragefavourites,readFromLocalStorage } from "@/hooks/localstorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';


function SearchPage({ params }) {
    const { currentSong, playSong,addQueue,setIndexp } = useMusicStore();

    const [songs1, Setsongs] = useState([])
    const [fav,Setfav]=useState([])
    const [favid,Setfavid]=useState([])

    const handlePlaySong = (song) => {
        playSong(song);
    };


    useEffect(() => {
        var dd = getsongs()
        var data = readFromLocalStorage('favourites')
        if(data){
            Setfav(data)
        }
    }, []);

    var shadowcolors = [
        'shadow-green-500',
        'shadow-red-500',
        'shadow-blue-500',
        'shadow-yellow-500',
        'shadow-pink-500',
        'shadow-purple-500',
        'shadow-grey-500'
    ]

    

    async function getArtistByid(id){
        var data = await fetch(`/api/songs/artists/${id.name}}`)
            .then(data => data.json())
            .then(data1 => {
                console.log("artist here")
                console.log(data1.url)
                var urlimg = data1.url
                writeToLocalStorage('artists', {"name":id.name,"image":urlimg,"id":id.id});
                // Setsongs(data1)
            })
    }



    async function getsongs() {
        var data = await fetch(`/api/songs/search/${params.searchterm.toString().replace('%20', ' ')}`)
            .then(data => data.json())
            .then(data1 => {
                console.log(data1)
                Setsongs(data1)
            })

    }

    async function getStream(vid) {
        var data = await fetch(`/api/songs/getstream/${vid.youtubeId}`)
            .then(data => data.json())
            .then(data1 => {
                console.log(data1)
                var song = {"id":vid.youtubeId,"name":vid.title,"thumbnail":vid.thumbnailUrl,"stream":data1,"artist":vid.artists[0].name}
                // Setsongs(data1)
                handlePlaySong(null)
                handlePlaySong(song)
            })
    }
    return (
        <div className="container my-12 mx-auto px-4 md:px-50">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">

                {songs1.map((item, index) => (
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={item.youtubeId} >


                        <article className="overflow-hidden rounded-lg shadow-lg ">

                            <div onClick={(e) => { 
                        handlePlaySong(null)
                        handlePlaySong(item)
                        getArtistByid(item.artists[0])
                        addQueue(songs1)
                        setIndexp(index)
                        // getStream(item)
                        // handleAddToPlaylist({"id":item.youtubeId,"name":item.title,"thumbnail":item.thumbnailUrl})
                        }}>
                                <a >
                                <img alt="Placeholder" className={`shadow-[0_35px_350px_-0px] ${shadowcolors[(Math.floor(Math.random() * shadowcolors.length))]} ml-auto mr-auto mt-5 mb-5 block rounded-xl h-auto w-6/12`} src={item.thumbnailUrl} />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-gray-400" >
                                        <p className="text-sm text-overflow: ellipsis">{item.title}</p>
                                    </a>
                                </h1>
                                <p className="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>
                            </div>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <div className="flex items-center no-underline hover:underline text-gray-600">
                                    <img alt="Placeholder" className="block rounded-full w-10" src="https://p.kindpng.com/picc/s/26-261031_black-disco-cd-music-icon-png-record-clip.png" />
                                    <p className="ml-2 text-sm">
                                        {item.artists[0].name}
                                    </p>
                                </div>
                                <div className="no-underline text-grey-darker hover:text-red-dark" onClick={(e)=>{
                                    writeLocalstoragefavourites('favourites',item)
                                    Setfavid(item.youtubeId)
                                }}>
                                    {/* <span className="">Like</span> */}
                                    {/* <i className="fa fa-heart"></i> */}
                                    {fav.some(obj => obj.youtubeId === item.youtubeId)==true || favid.includes(item.youtubeId)?(
                                        <FontAwesomeIcon icon={faHeart} size="lg" color="#FF0000" />
                                    ):(
                                        <FontAwesomeIcon icon={faHeart} size="lg" />
                                    )}
                                    
                                </div>
                            </footer>

                        </article>

                    </div>
                ))}






            </div>
        </div>
    )
}

export default SearchPage