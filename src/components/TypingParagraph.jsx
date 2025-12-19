import { useEffect, useState } from 'react';

export default function TypingParagraph() {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  
  const typingFullText = "Warning: Our AI might turn your bad day into a dance party! 🎉";
  
  useEffect(() => {
    // Typing animation
    if (typingIndex < typingFullText.length) {
      const timer = setTimeout(() => {
        setTypingText(prev => prev + typingFullText[typingIndex]);
        setTypingIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [typingIndex, typingFullText.length]);
  
  return (
    <div className="mt-4 animate-fadeIn mt-12" style={{animationDelay: '2s'}}>
      <p className="text-sm md:text-base text-black font-medium italic font-mono 
                   bg-white/90 px-4 py-3 rounded-lg shadow-lg border-l-4 border-pink-500 
                   inline-block max-w-lg">
        {typingText}
        <span className="inline-block w-[3px] h-[1.2em] bg-pink-500 ml-1 align-middle animate-pulse"></span>
      </p>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}