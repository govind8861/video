// VideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import videoData from './videos.json';

function VideoPage() {
  const { pageId } = useParams();
  
  // Check if pageId is undefined and provide a default value
  const currentPageId = pageId ? pageId.toString() : '1'; // You can set a default value here
  
  const filteredVideos = videoData.filter((video) => video.page === currentPageId);

  return (
    <div>
      <h1>Page {currentPageId} Videos</h1>
      <VideoPlayer videos={filteredVideos} currentPage={currentPageId} />
    </div>
  );
}

export default VideoPage;
