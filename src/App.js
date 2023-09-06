import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoPage from './VideoPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>YouTube Video Player</h1>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/page/:pageId" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
