'use client';
import React, { useEffect, useState } from 'react';

const SoundEffect = ({ className }: { className: string}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {isPlaying && (
        <audio src='/sci-fi-landscape.mp3' autoPlay loop preload='auto'>
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}
      <button onClick={() => setIsPlaying(prev => !prev)} className={className}>
        Sonido {isPlaying ? 'on' : 'off'}
      </button>
    </div>
  );
};

export default SoundEffect;
