import { useState } from "react";
import { getMusicByMood } from "../api/musicApi";
import mood from "../mood.js";

const moods = mood;
export default function MoodSelector() {
  const [recommendedMusic, setRecommendedMusic] = useState([]);


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 py-36 px-4">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
        Pick Your Vibe 🎚️
      </h2>
      <p className="text-pink-200 text-lg mb-12 text-center max-w-2xl">
        Choose your mood and let Moodify recommend the perfect music for you 🎶
      </p>

      {/* Mood Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className={`${mood.bgColor} rounded-2xl shadow-2xl p-6 flex flex-col items-center border-2 ${mood.borderColor} transform hover:scale-[1.03] transition-all duration-300`}
          >
            {/* Image */}
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl flex items-center justify-center bg-white">
                <img
                  src={mood.image}
                  alt={mood.alt}
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold mb-3 text-center">
              {mood.title}
            </h3>
            <p className="text-gray-700 text-center mb-6">
              {mood.description}
            </p>

            {/* Button */}
            <button
              onClick={async () => {
                const songs = [];
                for (let i = 0; i < 3; i++) {
                  const music = await getMusicByMood(mood.tag);
                  songs.push(music);
                }
                setRecommendedMusic(songs);
              }}
              className={`${mood.buttonColor} text-white font-bold py-3 px-6 rounded-full w-full shadow-lg hover:shadow-xl transition`}
            >
              {mood.buttonText} 🎵
            </button>
          </div>
        ))}
      </div>

      {/* Recommended Music */}
      {recommendedMusic.length > 0 && (
        <div className="mt-16 grid gap-6 max-w-3xl mx-auto w-full">
          {recommendedMusic.map((music, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-xl text-center"
            >
              <h3 className="text-xl font-bold">{music.name}</h3>
              <p className="text-gray-700">by {music.artist}</p>
              <a
                href={music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-bold underline"
              >
                Listen on Last.fm 🎧
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Footer Text */}
      <p className="mt-12 text-pink-300 text-sm animate-pulse">
        ⚡ Every click creates a unique musical moment ⚡
      </p>
    </div>
  );
}
