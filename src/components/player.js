"use client"
import React, { useEffect, useState } from 'react'
import './plaer.css'
import { useMusicStore } from '@/hooks/store'

function MusicPlayer() {
    const { currentSong, playSong, songs, indexp } = useMusicStore();
    const [stream, Setstream] = useState("")
    const [index, Setindex] = useState(0)
    const [curplay, Setcurplay] = useState(null);


    useEffect(() => {
        if (currentSong) {
            console.log(`Now playing: ${currentSong.name}`);
            Setcurplay(currentSong)
            getStream(currentSong)
        }
    }, [currentSong]);

    async function getStream(vid) {
        playSong(vid)
        Setstream("")
        var data = await fetch(`http://127.0.0.1:2702/api/mp3/${vid.youtubeId}`)
            .then(data => data.json())
            .then(data1 => {
                console.log("stream url")
                console.log(data1)
                Setstream(data1.url)
                // Setsongs(data1)
                // handlePlaySong(null)
                // handlePlaySong(song)
            })
    }

    async function playNextSong() {
        console.log(index)
        console.log(indexp)
        if (index == indexp) {
            var iii = index + 1
            // Setindex(iii)
            if (iii < songs.length) {
                var songsque = songs;
                var curr = songs[iii];
                var nindex = iii + 1;
                Setindex(nindex)
                Setcurplay(curr)
                getStream(curr)
            }
        } else {
            if (index < songs.length) {
                var songsque = songs;
                var curr = songs[index];
                var nindex = index + 1;
                Setindex(nindex)
                Setcurplay(curr)
                getStream(curr)
            }
        }
    }
    return (

        curplay == null ? (<div></div>) : (
            <section className="music-player text-center">
                {/* <header className="music-player--banner"></header> */}
                {/* <img src={curplay?.thumbnail}/> */}
                {stream == "" ? (
                    <div className='flex flex-row ml-auto mr-auto'>
                        <img className='h-8 ml-4' src='https://i.ibb.co/zhpcXzf/ezgif-1-9242638928.gif'></img>
                    </div>
                ) : (<audio onEnded={() => {
                    console.log("song ended")
                    playNextSong()
                }} autoPlay controls><source src={stream} type="audio/mpeg" /></audio>)}
                <main className="music-player--main">

                    <div className="music-player--controls">
                        <img
                            className='rounded-full mt-auto mb-auto'
                            style={{
                                width: 40,
                                height: 40
                            }} src={curplay?.thumbnailUrl}></img>

                        <div className="song-info">
                            <div className="song-info--title">{curplay?.title.substring(0, 14)}</div>
                            <div className="song-info--artist">{curplay?.artists[0].name}</div>
                        </div>
                    </div>
                </main>
            </section>
        )

    )
}

export default MusicPlayer