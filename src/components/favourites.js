"use client"

import React, { useEffect, useState } from 'react'
import { readFromLocalStorage, writeToLocalStorage } from '@/hooks/localstorage';
import { useMusicStore } from '@/hooks/store';

function Favourites() {
    const { currentSong, playSong,addQueue,setIndexp } = useMusicStore();
    const [fav, Setfav] = useState([])
    const [curplay,Setcurplay]=useState({})

    const handlePlaySong = (song) => {
        playSong(song);
    };

    useEffect(() => {
        var data = readFromLocalStorage('favourites')
        if(data){
            Setfav(data.reverse())
        console.log("favourite songs")
        console.log(data)
        }
    }, []);

    useEffect(() => {
        if (currentSong) {
            console.log(`Now playing: ${currentSong.name}`);
            Setcurplay(currentSong)
        }
    }, [currentSong]);

    async function getArtistByid(id){
        var data = await fetch(`/api/songs/artists/${id.name}}`)
            .then(data => data.json())
            .then(data1 => {
                console.log("artist here")
                console.log(data1.url)
                var urlimg = data1.url
                writeToLocalStorage('artists', {"name":id.name,"image":urlimg,"id":id.id});
            })
    }
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Favourite Songs</h2>
                </div>
                <div className="mx-auto mb-8 w-full">

                    {fav.length==0?(
                        <p className='text-gray-400'>Your added to fav songs will appere here..</p>
                    ):(
                        <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                        {fav.map((item, index) => (
                            <li className="pb-3 sm:pb-4 mr-auto ml-auto max-w-2xl" key={item.youtubeId}>
                                <div className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-16 h-16 rounded-full" src={item.thumbnailUrl} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.artists[0].name}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <div class="w-12 h-12 bg-blue-700 rounded-full ring-4 ring-white grid place-items-center hover:bg-blue-600 transition" onClick={(e)=>{
                                            handlePlaySong(null)
                                            handlePlaySong(item)
                                            getArtistByid(item.artists[0])
                                            addQueue(fav)
                                            setIndexp(index)
                                        }}>
                                            <span class="sr-only">Watch the video</span>
                                            {curplay?.youtubeId==item.youtubeId?(
                                                <img className='rounded-full' src='https://i.ibb.co/JHrPLtB/ezgif-1-c8bf1b639a.gif'></img>
                                            ):(
                                                <svg class="ml-1 w-4" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
                                            </svg>
                                            )}
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Favourites