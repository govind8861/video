// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to YouTube Video Player</h1>
      <p>Select a page to view videos:</p>
      <ul>
        <li>
          <Link to="/page/1">Page 1</Link>
        </li>
        <li>
          <Link to="/page/2">Page 2</Link>
        </li>
        <li>
          <Link to="/page/3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
