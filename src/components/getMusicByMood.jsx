export async function getMusicByMood(tag) {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=YOUR_API_KEY&format=json`
    );
  
    const data = await res.json();
  
    // 👇 RETURN 3 SONGS
    return data.tracks.track.slice(0, 3).map((track) => ({
      name: track.name,
      artist: track.artist.name,
      url: track.url,
    }));
  }
  