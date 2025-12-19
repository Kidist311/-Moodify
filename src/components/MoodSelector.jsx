import { useState } from "react";
import { getMusicByMood } from "../api/musicApi";
import mood from "../mood.js";

const moods = mood;

export default function MoodSelector() {
  const [recommendedMusic, setRecommendedMusic] = useState([]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4 md:py-16 md:px-8">
      {/* Mood Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
        {moods.map((mood) => (
          <div
            key={mood.id}
            className={`${mood.bgColor} rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center border-2 ${mood.borderColor} transform hover:scale-[1.03] transition-all duration-300`}
          >
            {/* Image */}
            <div className="relative mb-4 sm:mb-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img
                  src={mood.image}
                  alt={mood.alt}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">
              {mood.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base text-center mb-4 sm:mb-6">
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
              className={`${mood.buttonColor} text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:shadow-xl transition`}
            >
              {mood.buttonText} 🎵
            </button>
          </div>
        ))}
      </div>

      {/* Recommended Music */}
      {recommendedMusic.length > 0 && (
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 w-full max-w-5xl">
          {recommendedMusic.map((music, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] p-6 sm:p-8 bg-white rounded-2xl shadow-xl text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold">{music.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-2">
                by {music.artist}
              </p>
              <a
                href={music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 font-bold underline text-sm sm:text-base"
              >
                Listen on Last.fm 🎧
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Footer Text */}
      <p className="mt-8 sm:mt-12 text-pink-300 text-sm sm:text-base animate-pulse text-center">
        ⚡ Every click creates a unique musical moment ⚡
      </p>
    </div>
  );
}
