import Twit from '../../twit/Twit';
import twits from '../../utils/dummyTwitData';
import React from 'react';
import { Link } from 'react-router-dom';
import Post from "../post/Post"

const newTwit = () => {
  //create a new twit
};

function Homepage() {
  return (
    <div>
      <div>
        <Link to="/">
          <p>Homepage</p>
        </Link>
        {/* {loggedIn ? (
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            Log out
          </button>
        ) : (
          <Link to="/login">
          <p>My Tweeter</p>
        </Link>  
        )} */}
      </div>
      {twits.map((item, index) => (
        <Twit key={index} username={item.username} twit={item.twit} />
      ))}
      <Post />
      <button onClick={newTwit}>+</button>
    </div>
  );
}

export default Homepage;
