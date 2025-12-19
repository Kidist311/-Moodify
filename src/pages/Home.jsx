export default function Home() {
    return (
      <div
        className="w-full min-h-scree bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/moodify-bg.png')",
        }}
      >
        <Header />
        <MoodSelector />
      </div>
    );
  }
import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";  