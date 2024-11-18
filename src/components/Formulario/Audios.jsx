import React, { useState, useRef, useEffect } from "react";

// SVG Icons as components
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const VolumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const MuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const audioData = [
  {
    id: 1,
    title: "Nota Avovite Primera Página TV - Noticiero",
    url: "https://s3.us-east-1.wasabisys.com/avovite/20240703_NOTA%20AVOVITE%20-%20PRIMERA%20P%C3%81GINA%20TV%20-%20NOTICIERO.mp4",
    image: "https://conexiones-star.concilbot.com/fileblocks/humans/ada98f1b-bc8f-467a-808f-cfc885a91748.png",
    duration: "04:50",
  },
  {
    id: 2,
    title: "Entrevista Emir Silva en RCN Radio. Programa La Tertulia RCN",
    url: "https://s3.us-east-1.wasabisys.com/avovite/Octubre%203%202024.%20Entrevista%20Emir%20Silva%20en%20RCN%20Radio.%20Programa%20La%20Tertulia%20RCN.mp3",
    image: "https://conexiones-star.concilbot.com/fileblocks/humans/c0e4e539-8fa9-4ff2-8bf7-c662aaceccf1.png",
    duration: "08:19",
  },
  {
    id: 3,
    title: "Blu Radio. Entrevista Emirl Silva",
    url: "https://s3.us-east-1.wasabisys.com/avovite/Oct.9.2024.%20Programa%20Blu%204.0%20-%20Blu%20Radio.%20Entrevista%20Emir%20Silva.%20CEO%20AVOVITE.Entrevista%20Emir%20Grabaci%C3%B3n%20(39).mp3",
    image: "https://conexiones-star.concilbot.com/fileblocks/humans/df143b23-d38e-45b7-862c-4b0775b627d3.png",
    duration: "09:48",
  },
];

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [audioDurations, setAudioDurations] = useState({});
  const audioRef = useRef(null);
  const volumeRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    audioRef.current = new window.Audio();
    
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
      setAudioDurations((prev) => ({ ...prev, [audio.src]: audio.duration }));
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("ended", () => {
      setPlaying(null);
      setCurrentTime(0);
    });

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("ended", () => {});
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (volumeRef.current && !volumeRef.current.contains(event.target)) {
        setShowVolume(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePlay = (audio) => {
    if (!audioRef.current) return;
    
    const audioElement = audioRef.current;

    if (playing === audio.url) {
      audioElement.pause();
      setPlaying(null);
    } else {
      if (playing) {
        audioElement.pause();
      }

      if (audioElement.src !== audio.url) {
        audioElement.src = audio.url;
        audioElement.currentTime = 0;
      }

      audioElement.play();
      setPlaying(audio.url);
      setSelectedAudio(audio);
    }
  };

  const handleSeek = (event) => {
    if (!audioRef.current) return;
    
    const audioElement = audioRef.current;
    const newValue = parseFloat(event.target.value);
    audioElement.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const handleVolumeChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setVolume(newValue);
    setIsMuted(newValue === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(1);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div className="w-screen overflow-hidden relative -ml-[50vw] left-[50%] bg-[#064C41] py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex-grow text-white h-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-start mb-6">
                <h3 className="text-[#5D9B31] text-xl">Audios</h3>
                <h2 className="text-white text-4xl">Conoce más de nosotros</h2>
              </div>
              
              <div className="max-h-[60vh] overflow-auto bg-[#0D524C] rounded-lg scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <ul className="divide-y divide-yellow-400">
                  {audioData.map((audio) => (
                    <li
                      key={audio.id}
                      className={`${
                        selectedAudio?.id === audio.id ? "bg-[#224822] cursor-pointer" : ""
                      } hover:bg-[#224822] transition-colors cursor-pointer`}
                      onClick={() => handlePlay(audio)}
                    >
                      <div className="flex items-center p-4">
                        <button
                          onClick={() => handlePlay(audio)}
                          className="p-2 text-[#F9E988] hover:bg-[#0D524C] rounded-full transition-colors"
                        >
                          {playing === audio.url ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <div className="ml-4">
                          <p className="text-gray-100">{audio.title}</p>
                          <p className="text-[#FFF5C4] text-sm">
                            {playing === audio.url
                              ? `${formatTime(currentTime)} / ${formatTime(duration)}`
                              : `Duración: ${audio.duration}`}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {selectedAudio ? (
                <div className="bg-[#0a4741] text-[#F9E988] rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={selectedAudio.image}
                    alt={selectedAudio.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <p className="p-4">{selectedAudio.title}</p>
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-between mt-2">
                      <button
                        onClick={() => handlePlay(selectedAudio)}
                        className="p-2 text-[#F9E988] hover:bg-[#0D524C] rounded-full transition-colors"
                      >
                        {playing === selectedAudio.url ? <PauseIcon /> : <PlayIcon />}
                      </button>
                      <span className="text-sm">{formatTime(currentTime)}</span>
                      <input
                        type="range"
                        value={currentTime}
                        onChange={handleSeek}
                        max={duration || 100}
                        className="w-3/5 h-2 bg-[#F9E988]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#F9E988] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-150"
                      />
                      <span className="text-sm">{formatTime(duration)}</span>
                      <div className="relative" ref={volumeRef}>
                        <button
                          onClick={() => setShowVolume(!showVolume)}
                          className="p-2 text-[#F9E988] hover:bg-[#0D524C] rounded-full transition-colors"
                        >
                          {isMuted ? <MuteIcon /> : <VolumeIcon />}
                        </button>
                        {showVolume && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-4 bg-[#013220] rounded-lg shadow-lg">
                            <input
                              type="range"
                              value={volume}
                              onChange={handleVolumeChange}
                              min={0}
                              max={1}
                              step={0.1}
                              className="h-32 -rotate-90 bg-[#F9E988]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#F9E988] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-150"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#0a4741] text-[#F9E988] rounded-lg shadow-lg h-full min-h-[400px] flex flex-col justify-center items-center">
                  <h5 className="text-xl mb-4">No audio selected</h5>
                  <p>Please select an audio from the list to play</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}