
// src/api/musicApi.js
//require('dotenv').config();

//const API_KEY = process.env.LASTFM_API_KEY;

const API_KEY = "f685dbf848e0af14115e4d477563a27d"; // replace with your Last.fm API key
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export async function getMusicByMood(moodTag) {
  try {
    const response = await fetch(
      `${BASE_URL}?method=tag.gettoptracks&tag=${moodTag}&api_key=${API_KEY}&format=json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch music");
    }

    const data = await response.json();
    const tracks = data.tracks.track;

    // Pick a random track from the list
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    return {
      name: randomTrack.name,
      artist: randomTrack.artist.name,
      url: randomTrack.url, // link to Last.fm
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
