// src/components/VideoPlayer.jsx
import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ videoUrl, poster }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // Si ya existe un reproductor, no crear uno nuevo
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                responsive: true,
                fluid: true,
                preload: 'auto',
                poster: poster,
                sources: [{ src: videoUrl, type: 'video/mp4' }]
            });
        } else {
            // Si el reproductor ya existe, actualiza la fuente del video
            playerRef.current.src({ src: videoUrl, type: 'video/mp4' });
        }

        // Limpiar el reproductor al desmontar
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [videoUrl, poster]);

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                playsInline
            />
        </div>
    );
};

export default VideoPlayer;
