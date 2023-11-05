import { NextRequest, NextResponse } from "next/server";
import path from "path";
const youtubedl = require('youtube-dl-exec')
const fs = require('fs')
const ytdl = require('ytdl-core')

export async function GET(request, content) {
    var url = await getAudioLink(`https://www.youtube.com/watch?v=${content.params.id}`)
    return NextResponse.json(url)

}

async function getAudioLink(url) {
    try {
        const info = await ytdl.getInfo(url);
        const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio', filter: 'audioonly' });
        if (audioFormat && audioFormat.url) {
            return (audioFormat.url)
        } else {
            return 'Audio format not found';
        }
    } catch (error) {
        console.error('Error getting audio link:', error);
        return error
    }
}
