import React, { useState } from 'react';
import { videos } from './videos';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className= "video-gallery ">
      <div className="video-thumbnail-grid">
        {videos.map((video, index) => (
          <div key={index} onClick={() => handleClick(video)}>
            <img className="video-thumbnail" src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="selected-video">
          <video controls>
            <source src={selectedVideo.src} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
