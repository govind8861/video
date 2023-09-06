import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function VideoPlayer({ videos, currentPage }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const playVideo = (videoId) => {
    setCurrentVideo(videoId);
    setOpenModal(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setOpenModal(false);
  };
  const opts = {
    height: '390',
    width: '640',
    // Add other YouTube player options here
  };


  // Ensure currentPage is defined before filtering
  if (currentPage === undefined) {
    return null; // Handle the case where currentPage is undefined
  }

  const filteredVideos = videos.filter((video) => {
    return video.page === currentPage.toString();
  });

  return (
    <div>
      <h1>Video Player</h1>
      <div className="video-list">
        {filteredVideos.map((video) => (
          <button key={video.id} onClick={() => playVideo(video.id.toString())}>
            {video.title}
          </button>
        ))}
      </div>
      <Modal open={openModal} onClose={closeModal} center>
        {currentVideo && (
          <div className="video-container">
            <YouTube videoId={currentVideo.toString()} opts={opts} />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default VideoPlayer;
