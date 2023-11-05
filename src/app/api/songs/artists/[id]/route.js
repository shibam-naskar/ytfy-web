import { NextRequest, NextResponse } from "next/server";
const {
    GOOGLE_IMG_SCRAP
  } = require("google-img-scrap");


export async function GET(request, content) {
    try {
        const test = await GOOGLE_IMG_SCRAP({
            search: content.params.id,
          });
        return NextResponse.json(test.result[0])
        // var artist = await getArtist(`https://www.youtube.com/watch?v=${content.params.id}`)
        // return NextResponse.json(artist)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}

