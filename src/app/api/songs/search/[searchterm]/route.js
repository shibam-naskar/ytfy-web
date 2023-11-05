import { NextRequest, NextResponse } from "next/server";
import { searchMusics } from "node-youtube-music";

export async function GET(request,content){
    console.log(content.params.searchterm)
    const musics = await searchMusics(content.params.searchterm);
    // console.log(musics)
    return NextResponse.json(musics)
}