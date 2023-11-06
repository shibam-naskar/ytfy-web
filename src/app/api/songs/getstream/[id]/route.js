import { NextRequest, NextResponse } from "next/server";
import path from "path";
const youtubedl = require('youtube-dl-exec')
const fs = require('fs')
const ytdl = require('ytdl-core')



export async function GET(request, content) {
    try {
      const url = await getAudioLink(`https://www.youtube.com/watch?v=${content.params.id}`, 'http://your-proxy-url:your-proxy-port');
      return NextResponse.json(url);
    } catch (error) {
      console.error('Error getting audio link:', error);
      return NextResponse.error(error.message, 500);
    }
  }
  
  async function getAudioLink(url, proxyUrl) {
    try {
      const options = {
        proxy: proxyUrl,
        quality: 'highestaudio',
        filter: 'audioonly',
      };
  
      const info = await ytdl.getInfo(url, options);
      const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio', filter: 'audioonly' });
  
      if (audioFormat && audioFormat.url) {
        return audioFormat.url;
      } else {
        throw new Error('Audio format not found');
      }
    } catch (error) {
      console.error('Error getting audio link:', error);
      throw error;
    }
  }
