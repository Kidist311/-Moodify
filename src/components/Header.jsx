
export default function Header() {
    return (
        <div className="w-full py-10 px-4 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center animate-wiggle">
                How are you feeling today?
            </h1>
            <p className="text-gray-600">Music that understand your mood and help you breath again</p>
            <p className="text-gray-600">Take a moment choose a mood. Let the music help.</p>
        </div>
    )
  }