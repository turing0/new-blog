import Image from "next/legacy/image";
import  React, { useState, useEffect } from 'react'
import { Play, Pause } from 'react-feather';
import Router from 'next/router';
function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Track(track) {
  const [isLoading, setLoading] = useState(true)
  const [currentTrack, setCurrentTrack] = useState<{
    isPlaying: boolean;
    audio: HTMLAudioElement | null;
  }>({ isPlaying: false, audio: null });

  // Stop audio if route is changed
  Router.events.on('routeChangeComplete', () => {
    if (currentTrack?.audio) {
      currentTrack.audio.pause();
      currentTrack.audio.currentTime = 0;
    }
  });

  // Intial audio load when page is hydrated
  useEffect(() => {
    setCurrentTrack((c) => ({ ...c, audio: new Audio() }));
  }, []);

  useEffect(() => {
    // Call when track ends
    const onEnd = () => {
      setCurrentTrack((c) => ({ ...c, isPlaying: false }));
    };

    if (currentTrack.audio) {
      currentTrack.audio?.addEventListener('ended', onEnd);
      return () => {
        currentTrack.audio?.removeEventListener('ended', onEnd);
      };
    }
  }, [currentTrack.audio]);

  const handleToggleMusic = (audioUrl: string) => {
    const isNewTrack = currentTrack;
    const isPlaying = isNewTrack || !currentTrack.isPlaying;

    if (currentTrack.audio) {
      if (isNewTrack) currentTrack.audio.src = audioUrl; // Switch to new song

      // Set volume to that track
      currentTrack.audio.volume = 0.15;

      // Play new track, or stop the current one
      isPlaying ? currentTrack.audio.play() : currentTrack.audio.pause();
    }

    // Apply changes
    setCurrentTrack((c) => ({ ...c}));
  };
  return (
    <div className="group mt-8 flex w-full max-w-3xl transform flex-row items-baseline border-b border-gray-200 transition-all hover:scale-[1.03] dark:border-gray-800">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">{track.ranking}</p>
      <div className="flex justify-self-auto">
      <div className="flex flex-col pl-3">
      <Image src={track.imageUrl} width={48} height={48} alt="" className={cn(
              'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
              isLoading
                ? 'rounded-lg scale-110 blur-2xl grayscale'
                : 'rounded-lg scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)} />
      </div>
      <div className="flex flex-col pl-3">
        <a
          className="w-60 truncate font-medium text-gray-900 group-hover:text-[#1bd760] dark:text-gray-100 group-hover:dark:text-[#1bd760] sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="mb-4 w-60 truncate text-gray-500 sm:w-96 md:w-full " color="gray.500">
          {track.artist}
        </p>
        {track.audioUrl ? (
        <button
          type="button"
           onClick={() => handleToggleMusic(track.audioUrl)}
          className="ml-auto text-gray-800 hover:scale-105 dark:text-primary-100"
          aria-label={track.isPlaying ? 'Pause Button' : 'Play Button'}
        >
          {track.isPlaying ? (
            <Pause className="text-3xl"  size={16} />
          ) : (
            <Play className="text-3xl" size={16} />
          )}
        </button>
      ) : null}
      </div>
      </div>
    </div>
  )
}